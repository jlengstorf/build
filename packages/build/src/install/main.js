const { homedir } = require('os')

const execa = require('execa')
const pathExists = require('path-exists')
const { gte: gteVersion } = require('semver')

const { addErrorInfo } = require('../error/info')

// Install Node.js dependencies in a specific directory
const installDependencies = function({ packageRoot, isLocal }) {
  return runCommand({ packageRoot, isLocal, type: 'install' })
}

// Add new Node.js dependencies
const addDependencies = function({ packageRoot, isLocal, packages }) {
  return runCommand({ packageRoot, packages, isLocal, type: 'add' })
}

const runCommand = async function({ packageRoot, packages, isLocal, type }) {
  try {
    const command = await getCommand({ packageRoot, type, isLocal })
    const packagesList = packages === undefined ? '' : ` ${packages.join(' ')}`
    await execa.command(`${command}${packagesList}`, { cwd: packageRoot, all: true })
  } catch (error) {
    const message = getErrorMessage(error.all)
    const errorA = new Error(`Error while installing dependencies in ${packageRoot}\n${message}`)
    addErrorInfo(errorA, { type: 'dependencies' })
    throw errorA
  }
}

// Retrieve the shell command to install or add dependencies
const getCommand = async function({ packageRoot, type, isLocal }) {
  const manager = await getManager(packageRoot)
  const command = COMMANDS[manager][type]
  const commandA = await fixNpmCiCompat(command)
  const commandB = addYarnCustomCache(commandA, manager, isLocal)
  return commandB
}

const getManager = async function(packageRoot) {
  if (await pathExists(`${packageRoot}/yarn.lock`)) {
    return 'yarn'
  }

  return 'npm'
}

const COMMANDS = {
  npm: {
    add: 'npm install --no-progress --no-audit --no-fund',
    install: 'npm install --no-progress --no-audit --no-fund',
  },
  yarn: {
    add: 'yarn add --no-progress --non-interactive --ignore-workspace-root-check',
    install: 'yarn install --no-progress --non-interactive',
  },
}

// npm ci was introduced in npm@5.7.0 which is shipped in Node >= 8.12.0 and
// Node >= 10.3.0
// TODO: remove once we stop supporting Node <8.12.0, Node 9 and Node <10.3.0
const fixNpmCiCompat = async function(command) {
  if (!command.includes('npm ci')) {
    return command
  }

  const { stdout } = await execa.command('npm --version')
  if (gteVersion(stdout, NPM_CI_MIN_VERSION)) {
    return command
  }

  return command.replace('npm ci', 'npm install')
}

const NPM_CI_MIN_VERSION = '5.7.0'

// In CI, yarn uses a custom cache folder
const addYarnCustomCache = function(command, manager, isLocal) {
  if (manager !== 'yarn' || isLocal) {
    return command
  }

  return `${command} --cache-folder=${YARN_CI_CACHE_DIR}`
}

const YARN_CI_CACHE_DIR = `${homedir()}/.yarn_cache`

// Retrieve message to add to install errors
const getErrorMessage = function(allOutput) {
  return allOutput
    .split('\n')
    .filter(isNotNpmLogMessage)
    .join('\n')
}

// Debug logs shown at the end of npm errors is not useful in Netlify Build
const isNotNpmLogMessage = function(line) {
  return NPM_LOG_MESSAGES.every(message => !line.includes(message))
}
const NPM_LOG_MESSAGES = ['complete log of this run', '-debug.log']

module.exports = { installDependencies, addDependencies }
