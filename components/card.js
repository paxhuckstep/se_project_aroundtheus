export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    //".card__like-button"
    this._cardElement
    .querySelector(".card__like-button")
    .addEventListener('click', () => {
        this._handleLikeIcon();
    });
    //".card__trash-button"
    this._cardElement
    .querySelector(".card__trash-button")
    .addEventListener('click', () => {
        this._handletrashButton();
    })
  }
  _handletrashButton () {
    this._cardElement.remove();
    this._cardElement = null;
  }


  _handleLikeIcon () {
    this._cardElement.querySelector('.card__like-buton').classList.toggle('card__like-button+active');
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
