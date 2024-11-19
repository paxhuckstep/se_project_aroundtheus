export default class Card {
  constructor(cardData, cardSelector, handleImageClick, handleLikeClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._ID = cardData._id;
    this._isLiked = cardData.isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", () => {
      this._handleLikeClick({ID: this._ID, isLiked: cardData.isLiked});
    });
    this._cardTrashButton.addEventListener("click", () => {
      this._handletrashButton();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  _handletrashButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  handleLikeIcon() {
    this._cardLikeButton.classList.toggle("card__like-button_active");
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
  }
}
