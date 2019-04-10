---
title: Setting up Babel and TypeScript
tags: [TypeScript, JavaScript, Featured]
date: 2019-04-10
---

###

<!-- {.-literate-style} -->

You can use Babel as a TypeScript compiler. This means much faster compilations, and you can use Babel plugins in TypeScript just as you would with JavaScript!

<figure class='-no-pad'>
<img src='https://source.unsplash.com/CNmvgopt0L8/600x300' alt='Display'>
<figcaption>The alien <a href='https://en.m.wikipedia.org/wiki/Babel_fish'>Babel fish</a> can translate any language. This is not a babel fish.</figcaption>
</figure>

To do this, we'll configure `tsc` (the TypeScript compiler) only check types, but not emit files. We'll use Babel to do the actual compilation.

## Setting it up

### Install Babel

<!-- {.-literate-style} -->

Install Babel and its required packages. We'll be using [@babel/preset-typescript] to allow Babel to consume TypeScript files, and [typescript] to check our types.

[@babel/preset-typescript]: https://yarn.pm/@babel/preset-typescript
[typescript]: https://yarn.pm/typescript

<figure>

```sh
yarn add --dev \
  @babel/core \
  @babel/cli \
  @babel/preset-env \
  @babel/preset-typescript \
  typescript
```

<figcaption>Note: If you're already using a bundler like Webpack or Rollup, you may not need <code>@babel/cli</code>.</figcaption>
</figure>

### Configure Babel

<!-- {.-literate-style} -->

In `babel.config.js`, add the `preset-typescript` preset. This strips out type annotations from your TypeScript files, allowing Babel to compile them just as it would regular JavaScript.

```
babel.config.js
```

<!-- prettier-ignore -->
```javascript
module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-env'
  ]
}
```

This only makes Babel ignore the types&mdash;it doesn't check them! For that, we'll use TypeScript's `tsc`, which we'll get to later.

### Configure TypeScript

<!-- {.-literate-style} -->

Configure TypeScript by creating a file called `tsconfig.json`. Of particular interest here is `noEmit`, which prevents TypeScript from writing its own JavaScript files. We'll only be using TypeScript for type-checking. We'll leave the compilation duties to Babel.

```
tsconfig.json
```

```javascript
{
  "compilerOptions": {
    "noEmit": true
  }
}
```

## Trying it out

### Check types with `tsc`

<!-- {.-literate-style} -->

Just run `tsc` to check types. This should print a few errors if you have any.

```sh
yarn run tsc
```

### Build files with `babel`

<!-- {.-literate-style} -->

If you installed `@babel/cli`, you can test building files using the `babel` command. (Note: if you're using Webpack or Rollup, you don't need this package; use Webpack/Rollup to compile your JavaScript instead.)

```sh
yarn run babel src --out-dir lib --extensions '.ts,.tsx'
```

## Configuring Babel-CLI

You can use Babel without Webpack or Rollup. If you're using already Webpack or Rollup, you can skip this; this is mostly ideal for writing small open-source libraries with limited compilation needs.

### Auto-compile Babel files

You can use `@babel/cli` to compile files. In this example, we'll set up some NPM scripts to convert every TypeScript file in `src/` to JavaScript files into `lib/`.

```sh
"scripts": {
  "watch": "babel src --out-dir lib --extensions '.ts,.tsx' --watch",
  "build": "babel src --out-dir lib --extensions '.ts,.tsx'",
  "tsc": "tsc"
}
```

##

### References

- [TypeScript and Babel 7](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/) _(msdn.microsoft.com)_