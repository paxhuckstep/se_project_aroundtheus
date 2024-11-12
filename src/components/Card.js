export default class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", () => {
      this._handleLikeIcon();
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

  _handleLikeIcon() {
      this._cardLikeButton.classList.toggle("card__like-button_active");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector) 
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardLikeButton = this._cardElement 
      .querySelector(".card__like-button");
    this._cardTrashButton = this._cardElement 
      .querySelector(".card__trash-button");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._cardElement;
  }
}
//this goes here?
// fetch("https://around-api.en.tripleten-services.com/v1/cards", {
//   headers: {
//     authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6"
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });