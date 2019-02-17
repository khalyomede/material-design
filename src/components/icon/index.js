export class MaterialIcon extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const link = document.createElement('link');
    const slot = document.createElement('slot');

    this.icon = document.createElement('i');

    link.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    link.setAttribute('rel', 'stylesheet');

    this.icon.classList.add('material-icons');
    this.icon.appendChild(slot);

    shadow.appendChild(link);
    shadow.appendChild(this.icon);
  }

  static get observedAttributes() {
    return [ 'color' ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'color' && oldValue !== newValue) {
      this.icon.style.color = newValue;
    }
  }
}