import ReactDOM from "react-dom/client";
import MyComponent from "./myComponent";
export default class MyWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(<MyComponent />);
  }
}

customElements.define("my-component", MyWebComponent);
