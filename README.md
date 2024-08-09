<div align="center">
  <p>
  <a href="https://github.com/RWS-NL/air-node-packages"><img src="https://raw.githubusercontent.com/RWS-NL/air-node-packages/master/packages/webcomponents/src/Logo/logo.svg?sanitize=true" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> Rijkswaterstaat AIR Node Packages </h1>
<h3> All node packages by Rijkswaterstaat for the AIR project in one convenient location </h3>
  </p>

</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/RWS-NL/air-node-packages?logo=github&style=flat-square)](https://github.com/RWS-NL/air-node-packages/blob/master/LICENSE.md)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@rws-air/stylelint-config?label=stylelint-config%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/stylelint-config)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@rws-air/stylelint-config?label=stylelint-config%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/stylelint-config)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@rws-air/tslint-config?label=tslint-config%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/tslint-config)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@rws-air/tslint-config?label=tslint-config%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/tslint-config)

[![npm bundle size](https://img.shields.io/bundlephobia/min/@rws-air/usercreator?label=usercreator%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/usercreator)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@rws-air/usercreator?label=usercreator%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/usercreator)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@rws-air/webcomponents?label=webcomponents%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/webcomponents)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@rws-air/webcomponents?label=webcomponents%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/webcomponents)

[![npm bundle size](https://img.shields.io/bundlephobia/min/@rws-air/utils?label=utils%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/utils)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@rws-air/utils?label=utils%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/utils)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@rws-air/commitlint-config?label=commitlint-config%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/commitlint-config)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@rws-air/commitlint-config?label=commitlint-config%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/commitlint-config)

[![npm bundle size](https://img.shields.io/bundlephobia/min/@rws-air/commitizen-config?label=commitizen-config%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/commitizen-config)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@rws-air/commitizen-config?label=commitizen-config%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/commitizen-config)

**Versions**

[![npm](https://img.shields.io/npm/v/@rws-air/stylelint-config?color=crimson&label=stylelint-config%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@rws-air/stylelint-config)
[![npm](https://img.shields.io/npm/v/@rws-air/tslint-config?color=crimson&label=tslint-config%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@rws-air/tslint-config)
[![npm](https://img.shields.io/npm/v/@rws-air/usercreator?color=crimson&label=usercreator%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@rws-air/usercreator)
[![npm](https://img.shields.io/npm/v/@rws-air/webcomponents?color=crimson&label=webcomponents%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@rws-air/webcomponents)
[![npm](https://img.shields.io/npm/v/@rws-air/utils?color=crimson&label=utils%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@rws-air/utils)
[![npm](https://img.shields.io/npm/v/@rws-air/commitlint-config?color=crimson&label=commitlint-config%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@rws-air/commitlint-config)
[![npm](https://img.shields.io/npm/v/@rws-air/commitizen-config?color=crimson&label=commitizen-config%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@rws-air/commitizen-config)

## What is this?

This is a mono-repo for all NodeJS related packages used throughout other AIR projects. This repository is managed by [Lerna](https://github.com/lerna/lerna). Each package has its own subfolder in the `packages` folder, you can easily create a new package with the `lerna create` command.

## Working with this repository

Please see [Lerna and working on air-node-packages](https://github.com/RWS-NL/air-dev/blob/master/docs/Lerna_and_working_on_air-node-packages.md) on the air-dev repo

---

To get autocompletion for Lerna follow these steps:

1. Run this:

```zsh
git clone https://github.com/favware/zsh-lerna ${ZSH_CUSTOM:=~/.oh-my-zsh/custom}/plugins/zsh-lerna
```

2. Add `zsh-lerna` in your `~/.zshrc`:

```zsh
plugins=(… zsh-lerna)
```

3. Reload `~/.zshrc` or reload your terminal

### Running the linter

Run `yarn lint` from repository root

### Running tests

Run `yarn test` from repository root

### Updating snapshots for Webcomponents

To easily update failing snapshots for webcomponents run this command from repository root: `yarn test:web`

### Creating a build

Run `yarn build` from repository root.  
If it fails, try running `yarn clean`, `yarn`, and `yarn pre-build` before. This will clean up install and build files.  
It is important webcomponents is build before building all others.

### Publishing new versions

1. Run `yarn build` to ensure you're about to publish all latest versions. This repo has TypeScript code that needs to be compiled to JavaScript before it can be published!
2. Prepare a git commit for your changes. But instead of using `git push` to finish the commit, go to the next step using `lerna publish`.
3. Run `lerna publish` to start the publishing process. This will publish packages to NPM and commit the change to github.

#### If `lerna publish` fails

1. Go to GitHub repository -> releases: https://github.com/RWS-NL/air-node-packages/releases.
2. Delete any tags created by the publish script.
3. Delete the same tags locally: `git tag -d <name_of_tag> [...<name_of_other_tag>]`.
4. Reset your HEAD to the commit before the publish.

- `tig` to find commit hash.
- `git checkout <commit_hash>`.

5. Remove the failed commit with `git push --force`.
6. Fix the issues.
7. Run `yarn build` to ensure your fixes fix everything.
8. Re-run the publish process as described above.

#### If you have the error: Could not find "packages/*/dist/index.js"`?  

Run `yarn pre-build`. This will compile all typescript files and create dist folders.  

## API Documentation

Check out [the docs on github pages](https://rws-nl.github.io/air-node-packages/)
