


function showInputError (formEl, inputEl, {inputErrorClass}) {
    const ErrorMessageEl = formEl.querySelector('#' + inputEl.id + '-error');
    inputEl.classlist.add(inputErrorClass);
    ErrorMessageEl.textContent = inputEl.validationMessage;
    ErrorMessageEl.classlist.add(errorClass);
}

function checkInputValidity(formEl, inputEl, options) {
    if(!inputEl.validity.valid) {
        showInputError(formEl, inputEl, options);
    } else{
        hideInputError(formEl, inputEl, options);
    }
}

function hasInvalidInput(inputList) {
return !inputList.every((inputEl) => inputEl.validity.valid)
}

function toggleButtonState(inputEls, submitButton, {inactiveButtonClass}) {
    const foundInvalid = false;
    inputEls.foreach(input => [
        if (inputEl.validity.valid) {
            foundInvalid = true;
        }
    ]);

    if(hasInvalidInput(inputEls)) {
        submitButton.classList.add(inactiveButtonClass);
        submitButton.disabled = true;
        return;
    }

    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;

}

function setEventListeners(formEl, options) {
    const {inputSelector} = options;
    const inputEls = [...(formEl.querySelectorAll(inputSelector))];
    inputEls.forEach(inputEl => {
        inputEl.addEventListener('input', (e) => {
            checkInputValidity(formEl, inputEl, options)
            toggleButtonState(inputEls, submitButton, options);
        });
    });
}


function enableValidation(options) {
    const formEls = [...(document.querySelectorAll(options.formSelector))];
    formEls.forEach((formEl) => {
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
});

setEventListeners(formEl, options);
 


});
}

const config = {    
    formSelector: ".modal__form", //FIX THE REST TO MATCH OUR CSS CLASS NAMES
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"}

enableValidation(config, 'julian');