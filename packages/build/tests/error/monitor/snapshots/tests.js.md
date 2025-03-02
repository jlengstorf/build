# Snapshot report for `packages/build/tests/error/monitor/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## Report API error

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
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    ┌────────────────────────────────────────┐␊
    │ 1. onPreBuild command from /file/path │␊
    └────────────────────────────────────────┘␊
    ␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "api",␊
      "errorMessage": "Unauthorized",␊
      "context": "API error on /"cancelSiteDeploy/"",␊
      "groupingHash": "API error on /"cancelSiteDeploy/"/file/path",␊
      "severity": "error",␊
      "unhandled": true,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "endpoint": "cancelSiteDeploy",␊
        "parameters": {␊
          "deploy_id": "test"␊
        }␊
      },␊
      "packageJson": false,␊
      "other": {␊
        "groupingHash": "API error on /"cancelSiteDeploy/"/file/path"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────────┐␊
    │ API error on "cancelSiteDeploy" │␊
    └─────────────────────────────────┘␊
    ␊
      Error message␊
      Unauthorized␊
    ␊
      Error location␊
      While calling the Netlify API endpoint 'cancelSiteDeploy' with:␊
      {␊
        "deploy_id": "test"␊
      }␊
    ␊
      Error properties␊
      { name: 'TextHTTPError', status: 401, data: '' }␊
    `

## Report BUILD_ID

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
      build:␊
        command: node --invalid␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ node --invalid␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "buildCommand",␊
      "errorMessage": "Command failed with exit code 9: node --invalid",␊
      "context": "node --invalid",␊
      "groupingHash": "node --invalid/nCommand failed with exit code 0: node --invalid",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "buildCommand": "node --invalid",␊
        "configPath": "/file/path"␊
      },␊
      "packageJson": false,␊
      "BUILD_ID": "test",␊
      "other": {␊
        "groupingHash": "node --invalid/nCommand failed with exit code 0: node --invalid"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────┐␊
    │   "build.command" failed    │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Command failed with exit code 9: node --invalid␊
    ␊
      Error location␊
      In build.command from netlify.toml:␊
      node --invalid␊
    ␊
      Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    node: bad option: --invalid`

## Report CLI mode as releaseStage

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
      mode: cli␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ node --invalid␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "buildCommand",␊
      "errorMessage": "Command failed with exit code 9: node --invalid",␊
      "context": "node --invalid",␊
      "groupingHash": "node --invalid/nCommand failed with exit code 0: node --invalid",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "cli",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "buildCommand": "node --invalid",␊
        "configPath": "/file/path"␊
      },␊
      "packageJson": false,␊
      "other": {␊
        "groupingHash": "node --invalid/nCommand failed with exit code 0: node --invalid"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────┐␊
    │   "build.command" failed    │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Command failed with exit code 9: node --invalid␊
    ␊
      Error location␊
      In build.command from netlify.toml:␊
      node --invalid␊
    ␊
      Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    node: bad option: --invalid`

## Report IPC error

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
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    ┌────────────────────────────────────────┐␊
    │ 1. onPreBuild command from /file/path │␊
    └────────────────────────────────────────┘␊
    ␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "ipc",␊
      "errorMessage": "Plugin exited with exit code 0 and signal null./nThe plugin might have exited due to a bug terminating the process, such as an infinite loop./nThe plugin might also have explicitly terminated the process, for example with process.exit()./nPlugin methods should instead:/n  - on success: return/n  - on failure: call utils.build.failPlugin() or utils.build.failBuild()",␊
      "context": "Plugin /"/file/path" internal error",␊
      "groupingHash": "Plugin /"/file/path" internal error/nPlugin exited with exit code 0 and signal null./nThe plugin might have exited due to a bug terminating the process, such as an infinite loop./nThe plugin might also have explicitly terminated the process, for example with process.exit()./nPlugin methods should instead:/n  - on success: return/n  - on failure: call utils.build.failPlugin() or utils.build.failBuild()",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "event": "onPreBuild",␊
        "package": "/file/path",␊
        "loadedFrom": "local",␊
        "origin": "config"␊
      },␊
      "package": "/file/path",␊
      "packageJson": true,␊
      "homepage": "git+https://github.com/netlify/build.git",␊
      "other": {␊
        "groupingHash": "Plugin /"/file/path" internal error/nPlugin exited with exit code 0 and signal null./nThe plugin might have exited due to a bug terminating the process, such as an infinite loop./nThe plugin might also have explicitly terminated the process, for example with process.exit()./nPlugin methods should instead:/n  - on success: return/n  - on failure: call utils.build.failPlugin() or utils.build.failBuild()"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Plugin exited with exit code 0 and signal null.␊
      The plugin might have exited due to a bug terminating the process, such as an infinite loop.␊
      The plugin might also have explicitly terminated the process, for example with process.exit().␊
      Plugin methods should instead:␊
        - on success: return␊
        - on failure: call utils.build.failPlugin() or utils.build.failBuild()␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      In "onPreBuild" event in "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## Report build.command failure

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
      build:␊
        command: node --invalid␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ node --invalid␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "buildCommand",␊
      "errorMessage": "Command failed with exit code 9: node --invalid",␊
      "context": "node --invalid",␊
      "groupingHash": "node --invalid/nCommand failed with exit code 0: node --invalid",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "buildCommand": "node --invalid",␊
        "configPath": "/file/path"␊
      },␊
      "packageJson": false,␊
      "other": {␊
        "groupingHash": "node --invalid/nCommand failed with exit code 0: node --invalid"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────┐␊
    │   "build.command" failed    │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Command failed with exit code 9: node --invalid␊
    ␊
      Error location␊
      In build.command from netlify.toml:␊
      node --invalid␊
    ␊
      Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    node: bad option: --invalid`

## Report buildbot mode as releaseStage

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
      mode: buildbot␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ node --invalid␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "buildCommand",␊
      "errorMessage": "Command failed with exit code 9: node --invalid",␊
      "context": "node --invalid",␊
      "groupingHash": "node --invalid/nCommand failed with exit code 0: node --invalid",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "buildbot",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "buildCommand": "node --invalid",␊
        "configPath": "/file/path"␊
      },␊
      "packageJson": false,␊
      "other": {␊
        "groupingHash": "node --invalid/nCommand failed with exit code 0: node --invalid"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────┐␊
    │   "build.command" failed    │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Command failed with exit code 9: node --invalid␊
    ␊
      Error location␊
      In build.command from netlify.toml:␊
      node --invalid␊
    ␊
      Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    node: bad option: --invalid`

## Report configuration user error

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
    Error monitoring payload:␊
    {␊
      "errorClass": "resolveConfig",␊
      "errorMessage": "When resolving config file /file/path property build must be a plain object./n/nInvalid syntax/n/n  build = false/n/nValid syntax/n/n  [build]/n  command = /"npm run build/"",␊
      "context": "Configuration error",␊
      "groupingHash": "Configuration error/nWhen resolving config file /file/path property build must be a plain object./n/nInvalid syntax/n/n  build = false/n/nValid syntax/n/n  [build]/n  command = /"npm run build/"",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "packageJson": false,␊
      "other": {␊
        "groupingHash": "Configuration error/nWhen resolving config file /file/path property build must be a plain object./n/nInvalid syntax/n/n  build = false/n/nValid syntax/n/n  [build]/n  command = /"npm run build/""␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────┐␊
    │     Configuration error     │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      When resolving config file /file/path␊
      Configuration property build must be a plain object.␊
    ␊
      Invalid syntax␊
    ␊
        build = false␊
    ␊
      Valid syntax␊
    ␊
        [build]␊
        command = "npm run build"␊
    `

## Report dependencies error

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
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: netlify-plugin-test-does-not-exist␊
    ␊
    > Context␊
      production␊
    ␊
    > Installing plugins␊
       - netlify-plugin-test-does-not-exist␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "dependencies",␊
      "errorMessage": "Error while installing dependencies in /file/path ERR! code E404/nnpm ERR! 404 Not Found - GET https://registry.npmjs.org/netlify-plugin-test-does-not-exist - Not found/nnpm ERR! 404 /file/path ERR! 404  'netlify-plugin-test-does-not-exist@latest' is not in the npm registry./nnpm ERR! 404 You should bug the author to publish it (or use the name yourself!)/nnpm ERR! 404 /file/path ERR! 404 Note that you can also install from a/nnpm ERR! 404 tarball, folder, http url, or git url./n",␊
      "context": "Dependencies installation error",␊
      "groupingHash": "Dependencies installation error/nnpm ERR! code E0/nnpm ERR! 0 Not Found - GET /file/path - Not found/nnpm ERR! 0 /file/path ERR! 0  'netlify-plugin-test-does-not-exist@latest' is not in the npm registry./nnpm ERR! 0 You should bug the author to publish it (or use the name yourself!)/nnpm ERR! 0 /file/path ERR! 0 Note that you can also install from a/nnpm ERR! 0 tarball, folder, http url, or git url.",␊
      "severity": "warning",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "packageJson": false,␊
      "other": {␊
        "groupingHash": "Dependencies installation error/nnpm ERR! code E0/nnpm ERR! 0 Not Found - GET /file/path - Not found/nnpm ERR! 0 /file/path ERR! 0  'netlify-plugin-test-does-not-exist@latest' is not in the npm registry./nnpm ERR! 0 You should bug the author to publish it (or use the name yourself!)/nnpm ERR! 0 /file/path ERR! 0 Note that you can also install from a/nnpm ERR! 0 tarball, folder, http url, or git url."␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────────┐␊
    │ Dependencies installation error │␊
    └─────────────────────────────────┘␊
    ␊
      Error message␊
      Error while installing dependencies in /file/path␊
      npm ERR! code E404␊
    ␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: netlify-plugin-test-does-not-exist`

## Report plugin homepage

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
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    ┌────────────────────────────────────────┐␊
    │ 1. onPreBuild command from /file/path │␊
    └────────────────────────────────────────┘␊
    ␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "pluginInternal",␊
      "errorMessage": "test",␊
      "context": "Plugin /"/file/path" internal error",␊
      "groupingHash": "Plugin /"/file/path" internal error/ntest",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "event": "onPreBuild",␊
        "package": "/file/path",␊
        "loadedFrom": "local",␊
        "origin": "config"␊
      },␊
      "package": "/file/path",␊
      "packageJson": true,␊
      "homepage": "git+https://github.com/test/test.git",␊
      "other": {␊
        "groupingHash": "Plugin /"/file/path" internal error/ntest"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/test/test.git␊
      npm link:       https://www.npmjs.com/package/test-plugin␊
      Report issues:  https://github.com/test/test/issues␊
    ␊
      Error location␊
      In "onPreBuild" event in "/file/path" from netlify.toml␊
    STACK TRACE␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## Report plugin input error

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
      plugins:␊
        - inputs:␊
            test: true␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "pluginInput",␊
      "errorMessage": "Invalid input /"test/" for plugin /"/file/path"/file/path your plugin configuration to be sure that:/n  - the input name is spelled correctly/n  - the input is included in the plugin's available configuration options/n  - the plugin's input requirements have not changed/n/nPlugin inputs/ntest: true",␊
      "context": "Plugin /"/file/path" invalid input /"test/"",␊
      "groupingHash": "Plugin /"/file/path" invalid input /"test/"/file/path input /"test/" for plugin /"/file/path"/file/path your plugin configuration to be sure that:/n  - the input name is spelled correctly/n  - the input is included in the plugin's available configuration options/n  - the plugin's input requirements have not changed/n/nPlugin inputs/ntest: true",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "event": "load",␊
        "package": "/file/path",␊
        "input": "test",␊
        "loadedFrom": "local",␊
        "origin": "config"␊
      },␊
      "package": "/file/path",␊
      "packageJson": true,␊
      "homepage": "git+https://github.com/netlify/build.git",␊
      "other": {␊
        "groupingHash": "Plugin /"/file/path" invalid input /"test/"/file/path input /"test/" for plugin /"/file/path"/file/path your plugin configuration to be sure that:/n  - the input name is spelled correctly/n  - the input is included in the plugin's available configuration options/n  - the plugin's input requirements have not changed/n/nPlugin inputs/ntest: true"␊
      }␊
    }␊
    ␊
    ┌───────────────────────────────────────────┐␊
    │ Plugin "/file/path" invalid input "test" │␊
    └───────────────────────────────────────────┘␊
    ␊
      Error message␊
      Invalid input "test" for plugin "/file/path".␊
      Check your plugin configuration to be sure that:␊
        - the input name is spelled correctly␊
        - the input is included in the plugin's available configuration options␊
        - the plugin's input requirements have not changed␊
    ␊
      Plugin inputs␊
      test: true␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs:␊
            test: true␊
          origin: config␊
          package: /file/path`

## Report plugin internal error

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
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    ┌────────────────────────────────────────┐␊
    │ 1. onPreBuild command from /file/path │␊
    └────────────────────────────────────────┘␊
    ␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "pluginInternal",␊
      "errorMessage": "test",␊
      "context": "Plugin /"/file/path" internal error",␊
      "groupingHash": "Plugin /"/file/path" internal error/ntest",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "event": "onPreBuild",␊
        "package": "/file/path",␊
        "loadedFrom": "local",␊
        "origin": "config"␊
      },␊
      "package": "/file/path",␊
      "packageJson": true,␊
      "homepage": "git+https://github.com/netlify/build.git",␊
      "other": {␊
        "groupingHash": "Plugin /"/file/path" internal error/ntest"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      In "onPreBuild" event in "/file/path" from netlify.toml␊
    STACK TRACE␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## Report plugin origin

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
      plugins:␊
        - inputs: {}␊
          origin: ui␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from Netlify app␊
    ␊
    ┌────────────────────────────────────────┐␊
    │ 1. onPreBuild command from /file/path │␊
    └────────────────────────────────────────┘␊
    ␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "pluginInternal",␊
      "errorMessage": "test",␊
      "context": "Plugin /"/file/path" internal error",␊
      "groupingHash": "Plugin /"/file/path" internal error/ntest",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "event": "onPreBuild",␊
        "package": "/file/path",␊
        "loadedFrom": "local",␊
        "origin": "ui"␊
      },␊
      "package": "/file/path",␊
      "packageJson": true,␊
      "homepage": "git+https://github.com/netlify/build.git",␊
      "other": {␊
        "groupingHash": "Plugin /"/file/path" internal error/ntest"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      In "onPreBuild" event in "/file/path" from Netlify app␊
    STACK TRACE␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: ui␊
          package: /file/path`

## Report plugin validation error

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
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "pluginValidation",␊
      "errorMessage": "Invalid event 'invalid'/file/path use a valid event name. One of:/n - onPreBuild/n - onBuild/n - onPostBuild/n - onSuccess/n - onError/n - onEnd",␊
      "context": "Plugin /"/file/path" internal error",␊
      "groupingHash": "Plugin /"/file/path" internal error/nInvalid event 'invalid'/file/path use a valid event name. One of:/n - onPreBuild/n - onBuild/n - onPostBuild/n - onSuccess/n - onError/n - onEnd",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "event": "load",␊
        "package": "/file/path",␊
        "loadedFrom": "local",␊
        "origin": "config"␊
      },␊
      "package": "/file/path",␊
      "packageJson": true,␊
      "homepage": "git+https://github.com/netlify/build.git",␊
      "other": {␊
        "groupingHash": "Plugin /"/file/path" internal error/nInvalid event 'invalid'/file/path use a valid event name. One of:/n - onPreBuild/n - onBuild/n - onPostBuild/n - onSuccess/n - onError/n - onEnd"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └─────────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Invalid event 'invalid'.␊
      Please use a valid event name. One of:␊
       - onPreBuild␊
       - onBuild␊
       - onPostBuild␊
       - onSuccess␊
       - onError␊
       - onEnd␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## Report programmatic mode as releaseStage

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
      mode: require␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ node --invalid␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "buildCommand",␊
      "errorMessage": "Command failed with exit code 9: node --invalid",␊
      "context": "node --invalid",␊
      "groupingHash": "node --invalid/nCommand failed with exit code 0: node --invalid",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "buildCommand": "node --invalid",␊
        "configPath": "/file/path"␊
      },␊
      "packageJson": false,␊
      "other": {␊
        "groupingHash": "node --invalid/nCommand failed with exit code 0: node --invalid"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────┐␊
    │   "build.command" failed    │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Command failed with exit code 9: node --invalid␊
    ␊
      Error location␊
      In build.command from netlify.toml:␊
      node --invalid␊
    ␊
      Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    node: bad option: --invalid`

## Report utils.build.cancelBuild()

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
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    ┌────────────────────────────────────────┐␊
    │ 1. onPreBuild command from /file/path │␊
    └────────────────────────────────────────┘␊
    ␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "cancelBuild",␊
      "errorMessage": "test",␊
      "context": "Build canceled by /file/path",␊
      "groupingHash": "Build canceled by /file/path",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "event": "onPreBuild",␊
        "package": "/file/path",␊
        "loadedFrom": "local",␊
        "origin": "config"␊
      },␊
      "package": "/file/path",␊
      "packageJson": true,␊
      "homepage": "git+https://github.com/netlify/build.git",␊
      "other": {␊
        "groupingHash": "Build canceled by /file/path"␊
      }␊
    }␊
    ␊
    ┌───────────────────────────────┐␊
    │ Build canceled by /file/path │␊
    └───────────────────────────────┘␊
    ␊
      test␊
    `

## Report utils.build.failBuild()

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
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    ┌────────────────────────────────────────┐␊
    │ 1. onPreBuild command from /file/path │␊
    └────────────────────────────────────────┘␊
    ␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "failBuild",␊
      "errorMessage": "test",␊
      "context": "Plugin /"/file/path" failed",␊
      "groupingHash": "Plugin /"/file/path" failed/ntest",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "event": "onPreBuild",␊
        "package": "/file/path",␊
        "loadedFrom": "local",␊
        "origin": "config"␊
      },␊
      "package": "/file/path",␊
      "packageJson": true,␊
      "homepage": "git+https://github.com/netlify/build.git",␊
      "other": {␊
        "groupingHash": "Plugin /"/file/path" failed/ntest"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────┐␊
    │ Plugin "/file/path" failed │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Error: test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      In "onPreBuild" event in "/file/path" from netlify.toml␊
    STACK TRACE␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## Report utils.build.failPlugin()

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
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    ┌────────────────────────────────────────┐␊
    │ 1. onPreBuild command from /file/path │␊
    └────────────────────────────────────────┘␊
    ␊
    ␊
    ┌─────────────────────────────┐␊
    │ Plugin "/file/path" failed │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Error: test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      In "onPreBuild" event in "/file/path" from netlify.toml␊
    STACK TRACE␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    Error monitoring payload:␊
    {␊
      "errorClass": "failPlugin",␊
      "errorMessage": "test",␊
      "context": "Plugin /"/file/path" failed",␊
      "groupingHash": "Plugin /"/file/path" failed/ntest",␊
      "severity": "info",␊
      "unhandled": false,␊
      "releaseStage": "require",␊
      "version": "@netlify/build 1.0.0",␊
      "type": "@netlify/build",␊
      "node": "1.0.0",␊
      "location": {␊
        "event": "onPreBuild",␊
        "package": "/file/path",␊
        "loadedFrom": "local",␊
        "origin": "config"␊
      },␊
      "package": "/file/path",␊
      "packageJson": true,␊
      "homepage": "git+https://github.com/netlify/build.git",␊
      "other": {␊
        "groupingHash": "Plugin /"/file/path" failed/ntest"␊
      }␊
    }␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`
