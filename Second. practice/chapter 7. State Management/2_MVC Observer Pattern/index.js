import todosView from "./view/todos.js";
import counterView from "./view/counter.js";
import filtersView from "./view/filters.js";
import appView from "./view/app.js";

import applyDiff from "./applyDiff.js";

import registry from "./registry.js";

import modelFactory from "./model/model.js";

registry.add("todos", todosView);
registry.add("counter", counterView);
registry.add("filters", filtersView);
registry.add("app", appView);

const loadState = () => {
  const serializedState = window.localStorage.getItem("state");

  if (!serializedState) {
    return;
  }

  return JSON.parse(serializedState);
};

const model = modelFactory(loadState());

const { addChangeListener, ...events } = model;

const render = state => {
  window.requestAnimationFrame(() => {
    console.log("render!");
    const main = document.querySelector("#root");

    const newMain = registry.renderRoot(main, state, events);

    applyDiff(document.body, main, newMain);
  });
};

addChangeListener(render);

addChangeListener(state => {
  Promise.resolve().then(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  });
});

addChangeListener(state => {
  console.log(`Current State (${new Date().getTime()})`, state);
});
