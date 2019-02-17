'use strict';

import css from '../sass/components/chip.sass';

export class MaterialChip extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const span = document.createElement('span');
    const style = document.createElement('style');

    span.innerHTML = this.innerHTML;
    span.classList.add('chip');

    style.textContent = css.toString();

    shadow.appendChild(style);
    shadow.appendChild(span);
  }
}
