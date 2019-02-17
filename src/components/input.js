'use strict';

import css from './input.scss';

export class MaterialInput extends HTMLElement {
  constructor() {
    super();

    const shadow    = this.attachShadow({ mode: 'open' });
    const fieldset  = document.createElement('fieldset');
    const input     = document.createElement('input');
    const style     = document.createElement('style');

    this.legend = document.createElement('legend');

    this.legend.addEventListener('click', function() {
      this.classList.add('active');
      input.focus();
    });

    input.addEventListener('blur', () => {
      if (input.value.length === 0) {
        this.legend.classList.remove('active');
      }
    });

    input.addEventListener('focus', () => {
      this.legend.classList.add('active');
    });

    fieldset.appendChild(this.legend);
    fieldset.appendChild(input);

    style.textContent = css.toString();

    shadow.appendChild(style);
    shadow.appendChild(fieldset);
  }

  static get observedAttributes() {
    return ['legend'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'legend' && oldValue !== newValue) {
      this.legend.innerHTML = newValue;
    }
  }
}