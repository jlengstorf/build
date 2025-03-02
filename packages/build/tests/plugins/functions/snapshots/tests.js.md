# Snapshot report for `packages/build/tests/plugins/functions/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## Functions: default directory

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

## Functions: missing source directory

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
        functions: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core@1.0.0 from core␊
    ␊
    ┌────────────────────────────────────────────────────────────┐␊
    │ 1. onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
    (@netlify/plugin-functions-core onPostBuild completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## Functions: no functions

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
        functions: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core@1.0.0 from core␊
    ␊
    ┌────────────────────────────────────────────────────────────┐␊
    │ 1. onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────┘␊
    ␊
    Packaging functions from functions␊
    No functions were packaged␊
    ␊
    (@netlify/plugin-functions-core onPostBuild completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## Functions: simple setup

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
        functions: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core@1.0.0 from core␊
    ␊
    ┌────────────────────────────────────────────────────────────┐␊
    │ 1. onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────┘␊
    ␊
    Packaging functions from functions␊
    Functions packaged in .netlify/functions/␊
     - test.zip␊
    ␊
    (@netlify/plugin-functions-core onPostBuild completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`
