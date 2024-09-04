export default class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    //".card__like-button"
    this._cardLikeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });
    //".card__trash-button"
    this._cardTrashButton.addEventListener("click", () => {
      this._handletrashButton();
    });
    this._cardImage.addEventListener("click", () => {
      console.log(this);
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  _handletrashButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-buton")
      .classList.toggle("card__like-button+active");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardLikeButton =
      this._cardElement.querySelector(".card__like-button");
    this._cardTrashButton = this._cardElement.querySelector(
      ".card__trash-button"
    );
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._cardElement;
    // get card view
    // set event listeners
    this._setEventListeners();
    // return the card
  }
}
