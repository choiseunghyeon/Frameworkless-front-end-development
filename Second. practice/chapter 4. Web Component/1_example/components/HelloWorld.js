const DEFAULT_COLOR = "black";

export default class HelloWorld extends HTMLElement {
  static get observedAttributes() {
    return ["color"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.div) {
      return;
    }

    if (name === "color") {
      this.div.style.color = newValue;
    }
  }

  get color() {
    return this.getAttribute("color") || DEFAULT_COLOR;
  }

  set color(value) {
    this.setAttribute("color", value);
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      const div = document.createElement("DIV");
      div.textContent = "Hello World";

      div.style.color = this.color;
      this.div = div;
      this.appendChild(div);
    });
  }
}
