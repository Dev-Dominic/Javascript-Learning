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

// Pet Component
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

/*
    Rendering App Component to the browser DOM
    Params:
        - Element to be rendered
        - Where it should be rendered in the DOM
*/
ReactDOM.render(React.createElement(App), document.querySelector("#root"));
