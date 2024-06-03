import { RenderPosition, createElement, render } from "../render";

function createFilters() {
 return `
    <form class="trip-filters" action="#" method="get">
        <div class="trip-filters__filter">
            <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">
            <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
        </div>
        <div class="trip-filters__filter">
            <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
            <label class="trip-filters__filter-label" for="filter-future">Future</label>
        </div>
        <div class="trip-filters__filter">
            <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">
            <label class="trip-filters__filter-label" for="filter-present">Present</label>
        </div>
        <div class="trip-filters__filter">
            <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>
            <label class="trip-filters__filter-label" for="filter-past">Past</label>
        </div>
        <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
 `
}

class Filters{
    // constructor(callback){
    //     this.callback = callback;
    //     this.element = null;
    // }
    getTemplate(){
        return createFilters();
    }
    getElement(){
        if(!this.element){
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }
    renderObject(){
        const documentRoot = document.querySelector('.trip-controls__filters');
        render(this.getElement(), documentRoot, RenderPosition.BEFOREEND);
    }
    removeElement(){
        this.element = null;
    }
}

export default Filters;