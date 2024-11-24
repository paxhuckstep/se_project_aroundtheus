export default class Avatar{
    constructor(avatarSelector, url) {
        this._avatarSelector = avatarSelector;
        this._photoLink = url;
    }

    updateView() {
    
    this._avatarImage = this._avatarSelector.querySelector(".card__image");
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
}