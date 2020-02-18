const isNetlifyCI = require('../utils/is-netlify-ci')

// Retrieve the environment variables passed to plugins and lifecycle commands.
// When run locally, this tries to emulate the production environment.
const getChildEnv = function() {
  if (isNetlifyCI()) {
    return process.env
  }

  const defaultEnv = getDefaultEnv()
  const configurableEnv = getConfigurableEnv()
  const forcedEnv = getForcedEnv()
  return { ...defaultEnv, ...process.env, ...configurableEnv, ...forcedEnv }
}

// Environment variables that can be unset by local ones or configuration ones
const getDefaultEnv = function() {
  return {}
}

// Environment variables that can be unset by configuration ones but not local
const getConfigurableEnv = function() {
  return {
    // Disable telemetry of some tools
    GATSBY_TELEMETRY_DISABLED: '1',
    NEXT_TELEMETRY_DISABLED: '1',
  }
}

// Environment variables that can be unset by neither local nor configuration
const getForcedEnv = function() {
  return {}
}

module.exports = { getChildEnv }
