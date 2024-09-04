export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
  }

  _showInputError(inputEl) {
    const ErrorMessageEl = this._form.querySelector(
      "#" + inputEl.id + "-error"
    );
    inputEl.classList.add(this._inputErrorClass);
    ErrorMessageEl.textContent = inputEl.validationMessage;
    ErrorMessageEl.classList.add(this._errorClass);
  }

  _removeInputError(inputEl) {
    const ErrorMessageEl = this._form.querySelector(
      "#" + inputEl.id + "-error"
    );
    inputEl.classList.remove(this._inputErrorClass);
    ErrorMessageEl.textContent = "";
    ErrorMessageEl.classList.remove(this._errorClass);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _hasInvalidInput() {
    return !this._inputList.every((inputEl) => inputEl.validity.valid);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl);
    } else {
      this._removeInputError(inputEl);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);

    this._inputList.forEach((inputElement) => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  }

  enableValidation() {
    this._form.addEventListener("Submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}