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

ReactDOM.render(
    React.createElement(App),
    document.getElmentById('root')
);
```

**React Props**

Essentially passed data to a component.

```javascript
// Demonstrating Props
const Pet = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h2", {}, props.breed),
        ]
    );
};

// Deconstructing props
const Pet = ({name, animal, breed}) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, name),
            React.createElement("h2", {}, animal),
            React.createElement("h2", {}, breed),
        ]
    );
};

// Params Component and props
React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })

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
