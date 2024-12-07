import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupForm.querySelectorAll(".modal__input");
   this._saveButton = this._popupForm.querySelector(".modal__save");
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

 openPopup() {
  this._saveButton.textContent = "Save";
  super.openPopup();
 }

  setEventListeners() {
    this._popupForm.addEventListener("submit", () => {
     
      this._saveButton.textContent = "Saving...";
      this._handleFormSubmit(this._getInputValues());
      this._popupForm.reset();
      this.closePopup();
      
    });
    super.setEventListeners();
  }
}
