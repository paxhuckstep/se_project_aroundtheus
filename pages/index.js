import Card from "../components/Card.js";
import FormValidator from "../components/FormValidation.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago de Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const cardData = {
  //Why do I have cardData as just one card's data??????????????
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

//VARIABLES opening/closing modal EXPORTEDDDD
import {
profileEditModal,
cardAddModal,
addNewCardButton,
profileEditButton,
profileTitle,
profileDescription,
profileTitleInput,
profileDescriptionInput,
cardTitleInput,
cardUrlInput,
profileEditForm,
cardListEl,
pictureModal,
pictureModalHeading,
pictureModalImage,
addCardForm,
 modals,
} from "../utils/constants.js";
// exported

// this stay but closeModal becomes close() from Popup.js ?
// modals.forEach((modal) => {
//   modal.addEventListener("mousedown", (evt) => {
//     if (
//       evt.target.classList.contains("modal_opened") ||
//       evt.target.classList.contains("modal__close")
//     ) {
//       closeModal(modal);
//     }
//   });
// });
// stays in index.js ???
// profileEditForm.addEventListener("submit", submitProfileForm);

// turns into open() in Popup.js ??
// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", handleEscapeKey);
// }

// turns into handleEscClose() in Popup.js ???
// function handleEscapeKey(e) {
//   if (e.key === "Escape") {
//     const currentOpenModal = document.querySelector(".modal_opened");
//     closeModal(currentOpenModal);
//   }
// }

// //put into close() in Popup.js ???
// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", handleEscapeKey);
//}
// this goes to PopupWithForm.js ??
function submitProfileForm(e) {
  e.preventDefault(e);
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

// this stays in index.js ???
function createCard(cardData) {
  const cardElement = new Card(cardData, "#card-template", handleImageButton);
  return cardElement.getView();
}

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list"
);
// This becomes render() in Section.js ??
function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardSection.addItem(cardElement);
}

cardSection.renderItems();
//This goes to Popup
function handleImageButton(cardData) {
  openModal(pictureModal);
  // pictureModalImage.src = cardData.link;
  // pictureModalImage.alt = cardData.name;
  // pictureModalHeading.textContent = cardData.name;
}

// This Goes to PopupWithForm.js??
function submitCardAdd(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link });
  e.target.reset();
  addFormValidator.disableButton();
  closeModal(cardAddModal);
}

//LISTENER This stays but logic comes from PopupWithForm.js ??
profileEditButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  // openModal(profileEditModal);
  editProfilePopup.openPopup();
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});
addNewCardButton.addEventListener("click", () => {
  openModal(cardAddModal);
});
addCardForm.addEventListener("submit", submitCardAdd);

//exported
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
// exported

const editFormValidator = new FormValidator(settings, profileEditModal);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addCardForm);
addFormValidator.enableValidation();

const newCardPopup = new PopupWithForm("#card-add-modal", submitCardAdd);

const editProfilePopup = new PopupWithForm("#edit-modal", submitProfileForm);

const imagePopup = new PopupWithImage("#picture-modal", cardData);
imagePopup.setEventListeners();

//don't these go inside the anonomous function?? at least open?
//newCardPopup.open();

//newCardPopup.close();
