import { RenderPosition, render } from './render';
import HeaderInfo from '@view/hedaer-info-view';
import Filters from '@view/filters-view';
import Presenter from './presenter/border-presenter';

const mainElement = document.querySelector('.trip-main');
const eventsElement = document.querySelector('.trip-events');
const filtersElement = document.querySelector('.trip-controls__filters');
const presenter = new Presenter({ component: eventsElement });

render(new Filters(), filtersElement);
render(new HeaderInfo(), mainElement, RenderPosition.AFTERBEGIN);

presenter.init();
