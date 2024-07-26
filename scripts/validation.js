


function setEventListeners(formEl, options) {
    const {inputSelector} = options;
    const inputEls = [...(formEl.querySelectorAll(inputSelector))];
    inputEls.forEach(inputEl => {
        inputEl.addEventListener('input', (e) => {

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
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"}

enableValidation(config, 'julian');