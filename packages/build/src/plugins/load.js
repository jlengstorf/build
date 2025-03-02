const { reportPluginLoadError } = require('../status/report')

const { callChild } = require('./ipc')

// Retrieve all plugins commands
// Can use either a module name or a file path to the plugin.
const loadPlugins = async function({
  pluginsOptions,
  childProcesses,
  netlifyConfig,
  utilsData,
  token,
  constants,
  mode,
  api,
  errorMonitor,
}) {
  const pluginsCommands = await Promise.all(
    pluginsOptions.map((pluginOptions, index) =>
      loadPlugin(pluginOptions, {
        childProcesses,
        index,
        netlifyConfig,
        utilsData,
        token,
        constants,
        mode,
        api,
        errorMonitor,
      }),
    ),
  )
  const pluginsCommandsA = pluginsCommands.flat()
  return pluginsCommandsA
}

// Retrieve plugin commands for one plugin.
// Do it by executing the plugin `load` event handler.
const loadPlugin = async function(
  { package, packageJson, packageJson: { version } = {}, pluginPath, manifest, inputs, loadedFrom, origin },
  { childProcesses, index, netlifyConfig, utilsData, token, constants, mode, api, errorMonitor },
) {
  const { childProcess } = childProcesses[index]
  const event = 'load'

  try {
    const { pluginCommands } = await callChild(
      childProcess,
      'load',
      { pluginPath, manifest, inputs, netlifyConfig, utilsData, token, constants },
      { plugin: { package, packageJson }, location: { event, package, loadedFrom, origin } },
    )
    const pluginCommandsA = pluginCommands.map(({ event }) => ({
      event,
      package,
      loadedFrom,
      origin,
      packageJson,
      childProcess,
    }))
    return pluginCommandsA
  } catch (error) {
    await reportPluginLoadError({ error, api, mode, event, package, version, netlifyConfig, errorMonitor })
    throw error
  }
}

module.exports = { loadPlugins }
