// function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
//   const ErrorMessageEl = formEl.querySelector("#" + inputEl.id + "-error");
//   inputEl.classList.add(inputErrorClass);
//   ErrorMessageEl.textContent = inputEl.validationMessage;
//   ErrorMessageEl.classList.add(errorClass);
// }

// function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
//   const ErrorMessageEl = formEl.querySelector("#" + inputEl.id + "-error");
//   inputEl.classList.remove(inputErrorClass);
//   ErrorMessageEl.textContent = "";
//   ErrorMessageEl.classList.remove(errorClass);
// }

// function checkInputValidity(formEl, inputEl, options) {
//   if (!inputEl.validity.valid) {
//     showInputError(formEl, inputEl, options);
//   } else {
//     hideInputError(formEl, inputEl, options);
//   }
// }

// function hasInvalidInput(inputList) {
//   return !inputList.every((inputEl) => inputEl.validity.valid);
// }

// function toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
//   if (hasInvalidInput(inputEls)) {
//     submitButton.classList.add(inactiveButtonClass);
//     submitButton.disabled = true;
//   } else {
//     submitButton.classList.remove(inactiveButtonClass);
//     submitButton.disabled = false;
//   }
// }

// function setEventListeners(formEl, options) {
//   const { inputSelector, submitButtonSelector } = options;
//   const submitButton = formEl.querySelector(submitButtonSelector);
//   const inputEls = [...formEl.querySelectorAll(inputSelector)];
//   toggleButtonState(inputEls, submitButton, options); //copied from review
//   inputEls.forEach((inputEl) => {
//     inputEl.addEventListener("input", (e) => {
//       checkInputValidity(formEl, inputEl, options);
//       toggleButtonState(inputEls, submitButton, options);
//     });
//   });
// }

// function enableValidation(options) {
//   const formEls = [...document.querySelectorAll(options.formSelector)];
//   formEls.forEach((formEl) => {
//     formEl.addEventListener("submit", (e) => {
//       e.preventDefault();
//     });

//     setEventListeners(formEl, options);
//   });
// }

// const config = {
//   formSelector: ".modal__form",
//   inputSelector: ".modal__input",
//   submitButtonSelector: ".modal__save",
//   inactiveButtonClass: "modal__save_disabled",
//   inputErrorClass: "modal__input_type_error",
//   errorClass: "modal__error_visible",
// };

// enableValidation(config);
