import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// Created App Component
const App = () => {
  //return React.createElement("div", { id: "something-important" }, [
  //React.createElement("h1", {}, "Adopt Me!"),
  //React.createElement(Pet, { name: "Zeus", animal: "Dog", breed: "shitbag" }),
  //React.createElement(Pet, {
  //name: "Impala",
  //animal: "Cat",
  //breed: "sphinx",
  //}),
  //React.createElement(Pet, {
  //name: "Zerg",
  //animal: "Donkey",
  //breed: "Mixed",
  //}),
  //React.createElement(Car),
  //]);
  //return (
  //<div>
  //<h1 id="something-important">Adopt me!</h1>
  //<Pet name="Luna" animal="Dog" breed="Havanese" />
  //<Pet name="Pepper" animal="Bird" breed="Cockatiel" />
  //<Pet name="Doink" animal="Cat" breed="Mixed" />
  //</div>
  //);

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

/*
Rendering App Component to the browser DOM
Params:
- Element to be rendered
- Where it should be rendered in the DOM
*/
render(<App />, document.querySelector("#root"));
