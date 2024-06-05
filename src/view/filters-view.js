import { createElement } from '../render';
import { FILTER_TYPE } from '../const';

function createFilterTempleteItem(type) {
  return `
        <div class="trip-filters__filter">
            <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}">
            <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
        </div>
 `;
}

function createFilteredForm() {
  return `
  <form class="trip-filters" action="#" method="get">
  ${FILTER_TYPE.map((type) => createFilterTempleteItem(type)).join('')}
  <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
  `;
}

class Filters {
  getTemplate() {
    return createFilteredForm();
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

export default Filters;
