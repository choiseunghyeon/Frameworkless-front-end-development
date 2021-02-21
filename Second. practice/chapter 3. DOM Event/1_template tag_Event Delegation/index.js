import getTodos from "./getTodos.js";
import todosView from "./view/todos.js";
import counterView from "./view/counter.js";
import filtersView from "./view/filters.js";
import appView from "./view/app.js";

import applyDiff from "./applyDiff.js";

import registry from "./registry.js";

registry.add("todos", todosView);
registry.add("counter", counterView);
registry.add("filters", filtersView);
registry.add("app", appView);

const state = {
  todos: [],
  currentFilter: "All",
};

const events = {
  deleteItem: index => {
    state.todos.splice(index, 1);
    render();
  },
  addItem: text => {
    state.todos.push({ text, completed: false });
    render();
  },
};

const render = () => {
  window.requestAnimationFrame(() => {
    console.log("render!");
    const main = document.querySelector("#root");
    const newMain = registry.renderRoot(main, state, events);
    applyDiff(document.body, main, newMain);
  });
};

render();
