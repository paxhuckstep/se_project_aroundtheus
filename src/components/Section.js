export default class Section {
  constructor({ renderer }, cssSelector) {
    this._renderer = renderer;
    this.cardListEl = document.querySelector(cssSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this.cardListEl.prepend(item);
  }
}
