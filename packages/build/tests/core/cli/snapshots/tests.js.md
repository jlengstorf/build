# Snapshot report for `packages/build/tests/core/cli/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## --features

> Snapshot 1

    '_cachesave_'

## --help

> Snapshot 1

    `netlify-build [OPTIONS...]␊
    ␊
    Run Netlify Build system locally.␊
    ␊
    Options can also be specified as environment variables prefixed with␊
    NETLIFY_BUILD_. For example the environment variable NETLIFY_BUILD_DRY=true can␊
    be used instead of the CLI flag --dry.␊
    ␊
    Options:␊
      --help            Show help                                          [boolean]␊
      --version         Show version number                                [boolean]␊
      --config          Path to the configuration file.␊
                        Defaults to any netlify.toml in the git repository root␊
                        directory or the base directory                     [string]␊
      --cwd             Current directory. Used to retrieve the configuration file.␊
                        Default: current directory                          [string]␊
      --repositoryRoot  Git repository root directory. Used to retrieve the␊
                        configuration file.␊
                        Default: automatically guessed                      [string]␊
      --token           Netlify API token for authentication.␊
                        The NETLIFY_AUTH_TOKEN environment variable can be used as␊
                        well.                                               [string]␊
      --siteId          Netlify Site ID.                                    [string]␊
      --context         Build context.␊
                        Default: 'production'                               [string]␊
      --branch          Repository branch.␊
                        Default: automatically guessed                      [string]␊
      --dry, --dry-run  Run in dry mode, i.e. printing commands without␊
                        executing them.␊
                        Default: false                                     [boolean]␊
      --nodePath        Path to the Node.js binary to use in user commands and build␊
                        plugins.␊
                        Default: Current Node.js binary                     [string]␊
      --features        Print currently enabled feature flags.␊
                        Default: false                                     [boolean]`

## --version

> Snapshot 1

    '1.0.0'

## Exit code is 0 on success

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      {}␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## Exit code is 1 on error

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      config: /file/path␊
    ␊
    ┌─────────────────────────────┐␊
    │     Configuration error     │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      When resolving config file /file/path␊
      Configuration file does not exist␊
    `
