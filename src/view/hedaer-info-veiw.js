import { RenderPosition, createElement, render } from "../render";


function createHeader(){
    return `
        <section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
              <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
            </div>
            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
            </p>
        </section>
    `

}

class HeaderInfo{
    // constructor(callback){
    //     this.callback = callback;
    //     this.element = null;
    // }
    getTemplate(){
        return createHeader();
    }
    getElement(){
        if(!this.element){
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }
    renderObject(){
        const documentRoot = document.querySelector('.trip-main');
        render(this.getElement(),documentRoot,RenderPosition.AFTERBEGIN);
    }
    removeElement(){
        this.element = null;
    }
}

export default HeaderInfo;