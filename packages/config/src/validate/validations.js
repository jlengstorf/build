const isPlainObj = require('is-plain-obj')

const { isString, isUndefined, validProperties, insideRootCheck, removeParentDots } = require('./helpers')

// List of validations performed on the configuration file.
// Validation are performed in order: parent should be before children.
// Each validation is an object with the following properties:
//   - `property` {string}: dot-delimited path to the property.
//     Can contain `*` providing a previous check validates the parent is an
//     object or an array.
//   - `check` {(value) => boolean}: validation check function
//   - `message` {string}: error message
//   - `example` {string}: example of correct code
//   - `warn` {boolean}: whether to print a console message or throw an error
// We use this instead of JSON schema (or others) to get nicer error messages.

// Validations done before `defaultConfig` merge
const PRE_MERGE_VALIDATIONS = [
  {
    property: 'plugins',
    check: value => Array.isArray(value) && value.every(isPlainObj),
    message: 'must be an array of objects.',
    example: () => ({ plugins: [{ package: 'netlify-plugin-one' }, { package: 'netlify-plugin-two' }] }),
  },
]

// Validations done before context merge
const PRE_CONTEXT_VALIDATIONS = [
  {
    property: 'context',
    check: isPlainObj,
    message: 'must be a plain object.',
    example: () => ({ context: { production: { publish: 'dist' } } }),
  },
  {
    property: 'context.*',
    check: isPlainObj,
    message: 'must be a plain object.',
    example: (contextProps, key) => ({ context: { [key]: { publish: 'dist' } } }),
  },
]

// Validations done before normalization
const PRE_NORMALIZE_VALIDATIONS = [
  {
    property: 'build',
    check: isPlainObj,
    message: 'must be a plain object.',
    example: () => ({ build: { command: 'npm run build' } }),
  },
  {
    property: 'build.command',
    check: isString,
    message: 'must be a string',
    example: () => ({ build: { command: 'npm run build' } }),
  },
]

// Validations done after normalization
const POST_NORMALIZE_VALIDATIONS = [
  // TODO: remove once users stop using those features
  {
    property: 'plugins.*.type',
    check: isUndefined,
    message: 'has been renamed to "package".',
    example: type => ({ plugins: [{ package: type }] }),
  },
  {
    property: 'plugins.*.config',
    check: isUndefined,
    message: 'has been renamed to "inputs".',
    example: inputs => ({ plugins: [{ inputs }] }),
  },

  {
    property: 'plugins.*',
    ...validProperties(['package', 'inputs'], ['origin']),
    example: { plugins: [{ package: 'netlify-plugin-one', inputs: { port: 80 } }] },
  },

  {
    property: 'plugins.*',
    check: ({ package }) => package !== undefined,
    message: '"package" property is required.',
    example: () => ({ plugins: [{ package: 'netlify-plugin-one' }] }),
  },

  {
    property: 'plugins.*.package',
    check: isString,
    message: 'must be a string.',
    example: () => ({ plugins: [{ package: 'netlify-plugin-one' }] }),
  },

  {
    property: 'plugins.*.inputs',
    check: isPlainObj,
    message: 'must be a plain object.',
    example: () => ({ plugins: [{ package: 'netlify-plugin-one', inputs: { port: 80 } }] }),
  },
  {
    property: 'build.base',
    check: isString,
    message: 'must be a string.',
    example: () => ({ build: { base: 'packages/project' } }),
  },
  {
    property: 'build.base',
    ...insideRootCheck,
    example: base => ({ build: { base: removeParentDots(base) } }),
  },
  {
    property: 'build.publish',
    check: isString,
    message: 'must be a string.',
    example: () => ({ build: { publish: 'dist' } }),
  },
  {
    property: 'build.publish',
    ...insideRootCheck,
    example: publish => ({ build: { publish: removeParentDots(publish) } }),
  },
  {
    property: 'build.functions',
    check: isString,
    message: 'must be a string.',
    example: () => ({ build: { functions: 'functions' } }),
  },
  {
    property: 'build.functions',
    ...insideRootCheck,
    example: functions => ({ build: { functions: removeParentDots(functions) } }),
  },

  // TODO: remove once users stop using `build.lifecycle`
  {
    property: 'build.lifecycle',
    check: isUndefined,
    message: 'has been removed. Please use build.command instead.',
    example: () => ({ build: { command: 'npm run build' } }),
  },
]

module.exports = {
  PRE_MERGE_VALIDATIONS,
  PRE_CONTEXT_VALIDATIONS,
  PRE_NORMALIZE_VALIDATIONS,
  POST_NORMALIZE_VALIDATIONS,
}
