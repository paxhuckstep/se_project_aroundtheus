class FormValidator {

    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = formElement;
    }

    _setEventListeners () {
        const inputList = Array.from(this.form.querySelectorAll(this._inputSelector));
        const ButtonElement = this.form.querySelector(this._submitButtonSelector);

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