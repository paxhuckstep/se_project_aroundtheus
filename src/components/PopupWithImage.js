import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._image = this._popupElement.querySelector("#picture-modal-image");
    this._title = this._popupElement.querySelector("#picture-modal-heading");
  }
  openPopup({ name, link }) {
    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
    super.openPopup();
  }
}
