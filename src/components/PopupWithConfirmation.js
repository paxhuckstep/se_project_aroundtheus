import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._yesDeleteButton = document.querySelector("#delete-card-button");
  }

setSubmitAction(action) {
    this._handleSubmit = action;
}

  setEventListeners() {
    this._yesDeleteButton.addEventListener("click", () => {
      this._handleSubmit();
    });
    super.setEventListeners();
  }
}
