export default class Card {
  constructor(cardData, cardSelector, handleImageClick, handleLikeClick, handleTrashClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._ID = cardData._id;
    this._isLiked = cardData.isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
    this._handleTrashClick = handleTrashClick;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
      console.log(this);
    });
    this._cardTrashButton.addEventListener("click", () => {
      this._handleTrashClick();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  cardDeletionConfirmed() { // _handletrashButton
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

    this._checkLikeView();
    this._setEventListeners();
    return this._cardElement;
  }
  _checkLikeView() {
    if (this._isLiked) {
      this._cardLikeButton.classList.add("card__like-button_active");
    } else {
      this._cardLikeButton.classList.remove("card__like-button_active");
    }
  }
  getId() {
    return this._ID;
  }
  getLikeStatus() {
    return this._isLiked;
  }
}
