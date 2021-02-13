import eventCreators from "../model/eventCreators.js";

export default (targetElement, { currentFilter }, dispatch) => {
  const newCounter = targetElement.cloneNode(true);

  Array.from(newCounter.querySelectorAll("li a")).forEach(a => {
    if (a.textContent === currentFilter) a.classList.add("selected");
    else a.classList.remove("selected");

    a.addEventListener("click", e => {
      e.preventDefault();
      dispatch(eventCreators.changeFilter(a.textContent));
    });
  });

  return newCounter;
};
