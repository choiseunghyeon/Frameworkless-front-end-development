import eventCreators from "../model/eventCreators.js";

let template;

const getTemplate = () => {
  if (!template) {
    template = document.getElementById("todo-item");
  }

  return template.content.firstElementChild.cloneNode(true);
};

const attachEventsToTodoElement = (element, index, dispatch) => {
  const handler = e => dispatch(eventCreators.deleteItem(parseInt(index)));

  element.querySelector("button.destroy").addEventListener("click", handler);

  element.querySelector("input.toggle").addEventListener("click", e => dispatch(eventCreators.toggleItemCompleted(index)));

  element.querySelector("dblclick", () => {
    element.classList.add("editing");
    element.querySelector("input.edit").focus();
  });

  element.querySelector("input.edit").addEventListener("keypress", e => {
    if (e.key === "Enter") {
      element.classList.remove("editing");
      dispatch(eventCreators.updateItem(index, e.target.value));
      events.updateItem(index, e.target.value);
    }
  });
};

const getTodoElement = (todo, index, dispatch) => {
  const { text, completed } = todo;

  const element = getTemplate();

  element.querySelector("input.edit").value = text;
  element.querySelector("label").textContent = text;

  if (completed) {
    element.classList.add("completed");
    element.querySelector("input.toggle").checked = true;
  }

  attachEventsToTodoElement(element, index, dispatch);

  return element;
};

const filterTodos = (todos, filter) => {
  const isCompleted = todo => todo.completed;
  if (filter === "Active") {
    return todos.filter(todo => !isCompleted(todo));
  }

  if (filter === "Completed") {
    return todos.filter(isCompleted);
  }

  return [...todos];
};

export default (targetElement, state, dispatch) => {
  const { todos, currentFilter } = state;
  const newTodoList = targetElement.cloneNode(true);

  newTodoList.innerHTML = "";

  const filteredTodos = filterTodos(todos, currentFilter);

  filteredTodos.map((todo, index) => getTodoElement(todo, index, dispatch)).forEach(element => newTodoList.appendChild(element));

  return newTodoList;
};
