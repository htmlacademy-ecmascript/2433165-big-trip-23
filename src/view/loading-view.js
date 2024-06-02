import { RenderPosition, createElement, render } from "../render";
import LoadPage from "./components/loading";

class Loading{
    renderObject() {
        const sort = createElement(new LoadPage().getElement());
        const documentRoot = document.querySelector('.page-body__container');
        render(sort, documentRoot, RenderPosition.AFTERBEGIN);
    }
}

export default Loading;