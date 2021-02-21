let template;

const createNewTodoNode = () => {
  if (!template) {
    template = document.getElementById("todo-item");
  }

  return template.content.firstElementChild.cloneNode(true);
};

const getTodoElement = (todo, index) => {
  const { text, completed } = todo;

  const element = createNewTodoNode();

  element.querySelector("input.edit").value = text;
  element.querySelector("label").textContent = text;
  element.querySelector("button.destroy").dataset.index = index;

  if (completed) {
    element.classList.add("completed");
    element.querySelector("input.toggle").checked = true;
  }

  return element;
};

export default (targetElement, { todos }, events) => {
  const newTodoList = targetElement.cloneNode(true);
  newTodoList.innerHTML = "";
  todos.map(getTodoElement).forEach(element => newTodoList.appendChild(element));
  newTodoList.addEventListener("click", e => {
    if (e.target.matches("button.destroy")) {
      events.deleteItem(e.target.dataset.index);
    }
  });

  return newTodoList;
};
