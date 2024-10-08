import Card from "../components/Card.js";
import FormValidator from "../components/FormValidation.js";

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
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

//VARIABLES opening/closing modal
const profileEditModal = document.querySelector("#edit-modal");
const cardAddModal = document.querySelector("#card-add-modal");
const addNewCardButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");
const profileEditForm = profileEditModal.querySelector("#profile-edit-form");
//const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");
const pictureModal = document.querySelector("#picture-modal");
const pictureModalHeading = document.querySelector("#picture-modal-heading");
const pictureModalImage = document.querySelector("#picture-modal-image");
const addCardForm = document.querySelector("#add-card-form");
const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("modal_opened") ||
      evt.target.classList.contains("modal__close")
    ) {
      closeModal(modal);
    }
  });
});

profileEditForm.addEventListener("submit", submitProfileForm);

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscapeKey);
}

function handleEscapeKey(e) {
  if (e.key === "Escape") {
    const currentOpenModal = document.querySelector(".modal_opened");
    closeModal(currentOpenModal);
  }
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

function submitProfileForm(e) {
  e.preventDefault(e);
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

// function getCardElement(cardData) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImageEl = cardElement.querySelector(".card__image");
//   cardImageEl.setAttribute("src", cardData.link);
//   cardImageEl.setAttribute("alt", cardData.name);
//   const cardTitleEl = cardElement.querySelector(".card__title");
//   cardTitleEl.textContent = cardData.name;
//   const likeButton = cardElement.querySelector(".card__like-button");
//   likeButton.addEventListener("click", handleLikeButton);
//   const trashButton = cardElement.querySelector(".card__trash-button");
//   trashButton.addEventListener("click", handleTrashButton);
//   cardImageEl.addEventListener("click", () => handleImageButton(cardData));
//   return cardElement;
// }

function createCard (cardData) {
  const cardElement = new Card(cardData, "#card-template", handleImageButton);
  return cardElement.getView();
}

function renderCard(cardData) {
  // const card = new Card(cardData, "#card-template", handleImageButton);
  // const cardElement = card.getView();
  const cardElement = createCard(cardData);
  cardListEl.prepend(cardElement);
}

function handleImageButton(cardData) {
  openModal(pictureModal);
  pictureModalImage.src = cardData.link;
  pictureModalImage.alt = cardData.name;
  pictureModalHeading.textContent = cardData.name;
}


function submitCardAdd(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link });
  e.target.reset();
  addFormValidator.disableButton();
  closeModal(cardAddModal);
}

//LISTENER
profileEditButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  openModal(profileEditModal);
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});
addNewCardButton.addEventListener("click", () => {
  openModal(cardAddModal);
});
addCardForm.addEventListener("submit", submitCardAdd);

//CARD CODE
initialCards.forEach((cardData) => {
  renderCard(cardData);
});

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(settings, profileEditModal);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addCardForm);
addFormValidator.enableValidation();
