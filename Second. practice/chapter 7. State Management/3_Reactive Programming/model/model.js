import observableFactory from "./observable.js";

const cloneDeep = x => {
  return JSON.parse(JSON.stringify(x));
};

const INITIAL_STATE = {
  todos: [],
  currentFilter: "All",
};

export default (initialState = INITIAL_STATE) => {
  const state = cloneDeep(initialState);

  const addItem = text => {
    if (!text) {
      return;
    }

    state.todos.push({
      text,
      completed: false,
    });
  };

  const updateItem = (text, index) => {
    if (!text) {
      return;
    }

    if (index < 0) {
      return;
    }

    if (!state.todos[index]) {
      return;
    }

    state.todos[index].text = text;
  };

  const deleteItem = index => {
    if (index < 0) {
      return;
    }

    if (!state.todos[index]) {
      return;
    }

    state.todos.splice(index, 1);
  };

  const toggleItemCompleted = index => {
    if (index < 0) {
      return;
    }

    if (!state.todos[index]) {
      return;
    }

    state.todos[index].completed = !state.todos[index].completed;
  };

  const completeAll = () => {
    state.todos.forEach(todo => (todo.completed = true));
  };

  const clearCompleted = () => {
    state.todos = state.todos.filter(todo => todo.completed === false);
  };

  const changeFilter = filter => {
    state.currentFilter = filter;
  };

  const model = {
    addItem,
    updateItem,
    deleteItem,
    toggleItemCompleted,
    completeAll,
    clearCompleted,
    changeFilter,
  };

  return observableFactory(model, () => state);
};
