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
// openPopup() {
//     this._saveButton.textContent = "Yes";
//     super.openPopup();
//    }
setButtonTextYes() {
    this._saveButton.textContent = "Yes";
}

  setEventListeners() {
    this._yesDeleteButton.addEventListener("click", () => {
        this._saveButton.textContent = "Deleting...";
      this._handleSubmit();
    });
    super.setEventListeners();
  }
}
