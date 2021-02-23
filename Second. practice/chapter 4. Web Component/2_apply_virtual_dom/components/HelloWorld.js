import applyDiff from "./applyDiff.js";

const DEFAULT_COLOR = "black";

const createDomElement = color => {
  const div = document.createElement("DIV");
  div.style.color = color;
  div.textContent = "Hello World";
  return div;
};

export default class HelloWorld extends HTMLElement {
  static get observedAttributes() {
    return ["color"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.hasChildNodes()) {
      return;
    }

    window.requestAnimationFrame(() => applyDiff(this, this.firstElementChild, createDomElement(newValue)));
  }

  get color() {
    return this.getAttribute("color") || DEFAULT_COLOR;
  }

  set color(value) {
    this.setAttribute("color", value);
  }

  connectedCallback() {
    window.requestAnimationFrame(() => this.appendChild(createDomElement(this.color)));
  }
}
