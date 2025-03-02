const { relative } = require('path')
const { cwd } = require('process')

const test = require('ava')

const resolveConfig = require('../..')
const { runFixture, FIXTURES_DIR, getJsonOpt, escapeExecaOpt } = require('../helpers/main')

test('Empty configuration', async t => {
  await runFixture(t, 'empty')
})

test('No --config but none found', async t => {
  await runFixture(t, 'none', { copyRoot: {} })
})

test('--config with an absolute path', async t => {
  await runFixture(t, '', { flags: `--config=${FIXTURES_DIR}/empty/netlify.toml` })
})

test('--config with a relative path', async t => {
  await runFixture(t, '', { flags: `--config=${relative(cwd(), FIXTURES_DIR)}/empty/netlify.toml` })
})

test('--config with an invalid relative path', async t => {
  await runFixture(t, '', { flags: '--config=/invalid' })
})

test('--defaultConfig merge', async t => {
  const defaultConfig = getJsonOpt({ build: { publish: 'publish' } })
  await runFixture(t, 'default_merge', { flags: `--defaultConfig=${defaultConfig}` })
})

test('--defaultConfig priority', async t => {
  const defaultConfig = getJsonOpt({ build: { command: 'echo commandDefault' } })
  await runFixture(t, 'default_priority', { flags: `--defaultConfig=${defaultConfig}` })
})

test('--defaultConfig with an invalid relative path', async t => {
  await runFixture(t, '', { flags: '--defaultConfig={{}' })
})

test('--defaultConfig merges UI plugins with config plugins', async t => {
  const defaultConfig = getJsonOpt({ plugins: [{ package: 'one', inputs: { test: true } }] })
  await runFixture(t, 'plugins_merge', { flags: `--defaultConfig=${defaultConfig}` })
})

test('--cachedConfig', async t => {
  const { stdout } = await runFixture(t, 'cached_config', { snapshot: false })
  const cachedConfig = escapeExecaOpt(stdout)
  await runFixture(t, 'cached_config', { flags: `--cachedConfig=${cachedConfig}` })
})

test('--cachedConfig with an invalid path', async t => {
  await runFixture(t, '', { flags: '--cachedConfig={{}' })
})

test('--cachedConfig with a token', async t => {
  const { stdout } = await runFixture(t, 'cached_config', { snapshot: false, flags: '--token=test' })
  const cachedConfig = escapeExecaOpt(stdout)
  await runFixture(t, 'cached_config', { flags: `--cachedConfig=${cachedConfig} --token=test` })
})

test('--cachedConfig with a siteId', async t => {
  const { stdout } = await runFixture(t, 'cached_config', { snapshot: false, flags: '--siteId=test' })
  const cachedConfig = escapeExecaOpt(stdout)
  await runFixture(t, 'cached_config', { flags: `--cachedConfig=${cachedConfig} --siteId=test` })
})

test('Programmatic', async t => {
  const { config } = await resolveConfig({ repositoryRoot: `${FIXTURES_DIR}/empty` })
  t.not(config.build.environment, undefined)
})

test('Programmatic no options', async t => {
  const { config } = await resolveConfig()
  t.not(config.build.environment, undefined)
})
