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

All your NodeJs code are modules. exporting using `nodejs` exports an object.

`module.exports = {}`

```javascript
const add = (num, num2) => {};
const notPublic = () => {};

module.exports = { add, thing() {}, value: 1 };
```

**Do not use `exports` to export modules only use `module.exports`**

### Using Modules

NodeJs injects another global called require allows for you to import a module.

```javascript
// lib.js exporting
module.exports = () => {
  console.log("name");
};

// app.js (user created) file importing
const nameFn = require("./lib");
```

## Internal Modules & npm

### Some shipped modules

- fs - fileSystem module
- http - low level module for creating netowkr based programs, `APIs`
- path - useful for manipulating path strings

#### fs Module (filesystem)

Internal modules don't use './' for node_modules.

`Importing fs module`

```javascript
const fs = require("fs");

// Reading a file `readFileSync`
const file = readFileSync("./lib.js", { encoding: "utf-8" });
console.log(file);
```

### Remote Modules

Also from importation of modules from other people.

### NPM

CLI to manage nodejs modules. Remote repository with modules, allows for
publishing, download, and update modules.

`NPM` utilizes `package.json` to package dependencies for a project.

### yarn

Does the samething as `npm`. `Yarn` utilizes

    - file locking
    - cacheing

### Additional Notes

Using path module to get full path

```javascript
const contactsPath = path.join(__dirname, "contacts");
```

**Capturing arguments when running node file**<br>

This can be achieve through using the `process` global, and then added attribute
of `agrv`.

```bash
$ node some_file.js new thing
```

```javascript
console.log(process.argv); // ['<node-path>', '<some_file.js-filepath>', 'new', 'thing']
```

## Asynchronous Code Nodejs

Nodejs is single threaded, event-based and async like the browser.

### Asynchronous Pattern

```javascript
// callback takes error as first arg, and result as second
doAsyncThing((error, result) => {});

// promises
doAsyncThing()
  .then((result) => {})
  .catch((error) => {});

// async / await
const run = async () => {
  const results = await doAsyncThing(); // returns promise
  console.log("hello");
};
```

## Debugging

**Level 1**<br>

Using console.log, In production, record your logs to files.

**Level 2**<br>

Using node inspector.

```bash
node --inspect <javascript-file>
```

You can open the chrome DevTools to debug `chome:inpsect`

### Testing Node Libraries

To test certain functionality within in a module you need to export the code
that you want to test.

### Anatomy of tests

- Your code to be tested
- Test Suite `organize tets, provide hooks and overall environment`
- Assertion library `conducts actual comparisons`
- Mocks + Spies - Allows for mocking api calls, and to test to see if an
  internal function has been called.

### Types of tests

- unit
- integration
- end-to-end
- UI

## Stepping Stone

- express.js framework
- webpack
- commander.js
- babel.js
