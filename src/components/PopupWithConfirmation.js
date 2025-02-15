import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._yesDeleteButton = document.querySelector("#delete-card-button");
    this._saveButton = this._popupElement.querySelector(".modal__save");
  }

setSubmitAction(action) {
    this._handleSubmit = action;
}

setButtonTextYes() {
  setTimeout(() => {
    this._saveButton.textContent = "Yes";
  }, 600);
}

  setEventListeners() {
    this._yesDeleteButton.addEventListener("click", () => {
        this._saveButton.textContent = "Deleting...";
      this._handleSubmit();
    });
    super.setEventListeners();
  }
}
