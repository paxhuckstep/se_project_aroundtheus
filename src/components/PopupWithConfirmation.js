import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmationClick) {
    super({ popupSelector });
    this._handleConfirmationClick = handleConfirmationClick;
    this._yesDeleteButton = document.querySelector("#delete-card-button");
  }

  setEventListeners() {
    this._yesDeleteButton.addEventListener("click", () => {
      this._handleConfirmationClick(this);
      this.closePopup;
    });
    super.setEventListeners();
  }
}
