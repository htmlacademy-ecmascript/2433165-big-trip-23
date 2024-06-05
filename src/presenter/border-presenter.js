import { render } from '../render';
import Sort from '@view/sort-view';
import AddNewPoint from '@view/add-new-point-view';
import EditPoint from '@view/edit-point-view';
import MainList from '@view/list-view';
import Point from '@view/point-in-list-view';

const сounter = 3;

class Presenter {
  sortComponent = new Sort();
  mainList = new MainList();

  constructor({ component }) {
    this.component = component;
  }

  init() {
    render(this.sortComponent, this.component);
    render(this.mainList, this.component);
    render(new EditPoint(), this.component);

    for (let i = 0; i < сounter; i++) {
      render(new Point(), this.component);
    }

    render(new AddNewPoint(), this.component);
  }
}

export default Presenter;
