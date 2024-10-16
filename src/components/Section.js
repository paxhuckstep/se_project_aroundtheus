export default class Section {
  constructor({ items, renderer }, cssSelector) {
    this._items = items;
    this._renderer = renderer;
    this.cardListEl = document.querySelector(cssSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this.cardListEl.prepend(item);
  }
}
