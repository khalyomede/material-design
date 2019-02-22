'use strict';

import css from '../sass/components/chip.sass';

export class MaterialChip extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');

    this.span = document.createElement('span');

    this.span.innerHTML = this.innerHTML;
    this.span.classList.add('chip');

    style.textContent = css.toString();

    shadow.appendChild(style);
    shadow.appendChild(this.span);
  }

  static get observedAttributes() {
    return ['outlined'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'outlined' && oldValue !== newValue) {
      this.span.classList.add('outlined');
    }
  }
}
