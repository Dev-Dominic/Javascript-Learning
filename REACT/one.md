# Complete Intro to REACT, v5

## Contents

1. Introduction
2. Pure React3
3. npm, EsLint & Prettier
4. Parcel
5. JSX
6. Hooks
7. Effects
8. Dev Tools
9. Handling Async

## Introduction

[Reference Repository](https://github.com/btholt/complete-intro-to-react-v5)

**Note:** unpkg.com this is CDN for NPM packages. Pulls javascript packages from
npm registry.

React-Dom renders components to the browser.

## Pure React

**What are components**

These are functions that return a result from `React.createElement`. Components
are smaller components that are used to create other components. Components are
inherently reusable.

**Note:** React.createElement can either take either another component or markup
tag `(as strings)`

**DOM Rendering**

DOM rendering is done using the React-Dom library.

**React.createElement Parameters**

- Passes what kind of element should be rendered ("div", "h1", "p") or a
  composite component which are developer created.
- Object containing attributes to be associated with the created DOM element
- The children of the created element, these can be passed as a list of child
  elements or as individual parameters.

```javascript
// App Component

const App = () => {
  return React.createElement(
    "div", // Element
    {}, // Attributes
    React.createElement("h1", {}, "Adopt Me!") // Child elements
  );
};

// Rendering App Component to the DOM

ReactDOM.render(React.createElement(App), document.getElmentById("root"));
```

**React Props**

Essentially passed data to a component.

```javascript
// Demonstrating Props
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// Deconstructing props
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

// Params Component and props
React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" });
```

## Tools

**NPM**

Setup/Install React via NPM

```bash

$ npm init -y (Produces packages.json)
$ npm install -D <package> (developer dependencies)
$ npm ci (installation from package-lock.json)

```

**Prettier**

Used to standardize javascript code.

**Parcel**

Used for packaging project files for both development and production. Another
popular alternative is `webpack`.

**Installing REACT and REACT-DOM via `npm`**

```bash

$ npm install react react-dom

```

React is then imported in the main App.js script.

```javascript
import React from "react";
import { render } from "react-dom";
```

## JSX

This method of writing REACT allows for raw html markup to be written, over
using raw javascript function call of `React.createElement`. JSX is transpile
to normal `React.createElement` calls. React requires you to only return one top
level element.

```javascript
// Example JSX markup with Pet Component
export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}

// Cannot have two return
return (
    <h1>Something</h1>
    <div>
        <h1>Something else</h1>
    </div>
);
```
