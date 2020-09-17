# Introduction to NodeJS

[Fronted Masters NodeJS Repo](https://github.com/frontendmasters/intro-node-js)

NodeJs is an open source runtime that allows for javascript to run outside of
the browser.

- Open Source
- Built on Chrome's v8 Javascript engine
- Created by Ryan Dhai

#### What can node be used for?

- Tooling (build, automation, etc)
- API's (REST, Realtime, etc)
- CDN's
- Shareable libraries
- Desktop applications
- IOT

## Node.js Modules

### Globals

- process - project environment variables
- require - function to find and use modules in current module
- \_\_dirname - the current directory path
- \_\_filename - gives current filename
- module - information about current module, methods or making module
  consumable(exportable)
- global - like window, its the `global` object, `Probably should never use it`

### What are Modules

These are just encapsulated pieces of code.

```javascript
var module1 = function (exports, require, module, __filename, __dirname) {
  // your node js code in another file
};
```

**Note:** NodeJs uses commonJs for its module system.

### Creating Modules

All your NodeJs code are modules.

```javascript
const add = (num, num2) => {};
const notPublic = () => {};

module.exports = { add, thing() {}, value: 1 };
```

**Do not use `exports` to export modules only use `module.exports`**
