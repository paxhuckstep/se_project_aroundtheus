export default class Section {
    constructor({ items, renderer}, cssSelector ) {
        //item array
        this._items = items;
        this._renderer = renderer;
        this.cardListEl = document.querySelector(cssSelector);
        //render function
        //CSS Selector for adding card elements
    }


    renderItems() {
    this._items.forEach(item => {
        this._renderer(item);
    });
    }

    addItem(item) {
        this.cardListEl.prepend(item)
    }

}