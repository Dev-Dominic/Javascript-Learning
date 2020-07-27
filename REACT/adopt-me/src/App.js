import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// Created App Component
const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Zeus", animal: "Dog", breed: "shitbag" }),
    React.createElement(Pet, {
      name: "Impala",
      animal: "Cat",
      breed: "sphinx",
    }),
    React.createElement(Pet, {
      name: "Zerg",
      animal: "Donkey",
      breed: "Mixed",
    }),
  ]);
};

/*
Rendering App Component to the browser DOM
Params:
- Element to be rendered
- Where it should be rendered in the DOM
*/
render(React.createElement(App), document.querySelector("#root"));
