import { createElement } from '../render';

function createListTemplete() {
  return `
    <ul class="trip-events__list"></ul>
    `;
}

class MainList {
  getTemplate() {
    return createListTemplete();
  }
  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}

export default MainList;
