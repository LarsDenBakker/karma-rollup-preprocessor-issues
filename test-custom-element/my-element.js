customElements.define('my-element', class MyElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      My Web Component
    `;
  }
});