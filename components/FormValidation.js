export default FormValidator;

class FormValidator {

    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = formElement;
    }

    _showInputError (formEl, inputEl, { inputErrorClass, errorClass }) = {
        const ErrorMessageEl = this._form.querySelector("#" + inputEl.id + "-error");
        inputEl.classList.add(inputErrorClass);
        ErrorMessageEl.textContent = inputEl.validationMessage;
        ErrorMessageEl.classList.add(this._errorClass);
    }


    _toggleButtonState (inputList, ButtonElement, inactiveButtonClass) {
        if(hasInvalidInput(inputList)) {
            ButtonElement.classList.add(inactiveButtonClass);
            ButtonElement.classList.add(inactiveButtonClass);
            ButtonElement.disabled = true;
        } else {
            ButtonElement.classList.remove(inactiveButtonClass);
            ButtonElement.disabled = false;
        }
    }

_hasInvalidInput () {

}

_checkInputValidity() {
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, options);
      } else {
        hideInputError(formEl, inputEl, options);
      }
    }
}

    _setEventListeners () {
        this._inputList = Array.from(this.form.querySelectorAll(this._inputSelector));
        this._ButtonElement = this.form.querySelector(this._submitButtonSelector);

        inputList.forEach((inputElement) => {
            checkInputValidity(this.form, inputElement, rest);
            toggleButtonState(inputList, ButtonElement, inactiveButtonClass);
        });
    }

    enableValidation() {
        this._form.addEventListener("Submit", (e) => {
            e.preventDefault();
        });
        setEventListeners(formElement, rest);
    }

}

const settings = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save",
    inactiveButtonClass: "modal__save_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  }

const editFormValidator = new FormValidator(settings, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addForm)