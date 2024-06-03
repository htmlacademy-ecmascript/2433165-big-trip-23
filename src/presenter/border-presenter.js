import { render } from '../render';
import Sort from '@view/sort-view';
import AddNewPoint from '@view/add-new-point-view';
import EditPoint from '@view/edit-point-view';
import MainList from '@view/list-view';
import Point from '@view/point-in-list-view';

const Counter = 3;

class Presenter {
  sortComponent = new Sort();
  mainList = new MainList();

  constructor({ component }) {
    this.component = component;
  }

  init() {
    render(this.sortComponent, this.component);
    render(this.mainList, this.component);
    render(new EditPoint(), this.component.getElement());

    for (let i = 0; i < Counter; i++) {
      render(new Point(), this.component.getElement());
    }

    render(new AddNewPoint(), this.component.getElement());
  }
}

export default Presenter;
