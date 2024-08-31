export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    //".card__like-button"
    const likeButton = this._cardElement.querySelector(".card__like-button");
    //".card__trash-button"
    const trashButton = this._cardElement.querySelector(
        ".card__trash-button"
    );
  }

  getView() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .querySelector(".card")
    .cloneNode(true);
    // get card view
    // set event listeners
    this._setEventListeners();
    // return the card
  }
}
