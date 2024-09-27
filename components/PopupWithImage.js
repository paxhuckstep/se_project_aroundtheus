import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
  }
openPopupWithImage ({ name, link }) {
    //opening with name and link of image
    const image = document.querySelector('#picture-modal-image');
    const title = document.querySelector('#picture-modal-heading');
    image.src = link;
    image.alt = name;
    title.textContent = name;
    super.openPopup
} 

}