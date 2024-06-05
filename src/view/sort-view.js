import { createElement } from '../render';
import { SORT_TYPE } from '../const';

function createSortedTempleteItem(type) {
  return `
      <div class="trip-sort__item  trip-sort__item--${type}">
        <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type}">
        <label class="trip-sort__btn" for="sort-${type}">${type}</label>
      </div>
  `;
}

function createSortedForm() {
  return `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get"> 
  ${SORT_TYPE.map((type) => createSortedTempleteItem(type)).join('')}
  </form>
  `;
}

class Sort {
  getTemplate() {
    return createSortedForm();
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

export default Sort;
