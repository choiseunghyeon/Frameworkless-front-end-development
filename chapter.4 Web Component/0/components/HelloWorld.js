const DEFAULT_COLOR = "black";

export default class HelloWorld extends HTMLElement {
  static get observedAttributes() {
    return ["color"];
  }

  get color() {
    return this.getAttribute("color") || DEFAULT_COLOR;
  }

  set color(value) {
    this.setAttribute("color", value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("속성 변경!");
    if (!this.div) {
      return;
    }

    if (name === "color") {
      this.div.style.color = newValue;
    }
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.div = document.createElement("DIV");
      this.div.textContent = "Hello World!";
      this.div.style.color = this.color;

      this.appendChild(this.div);
      console.log(this);
    });
  }
}
