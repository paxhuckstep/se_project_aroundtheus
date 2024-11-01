import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._image = this._popupElement.querySelector("#picture-modal-image");
    this._title = this._popupElement.querySelector("#picture-modal-heading");
    // this._name = "";
    // this._link = "";
    // console.log(this._image, this._title, this._name, this._link);
  }
  openPopup({ name, link }) {
    //opening with name and link of image
    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
    super.openPopup();
  }
}
