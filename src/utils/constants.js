export const profileEditModal = document.querySelector("#edit-modal");
//export const cardAddModal = document.querySelector("#card-add-modal");
export const addNewCardButton = document.querySelector(".profile__add-button");
export const profileEditButton = document.querySelector(".profile__edit-button");
//export const profileTitle = document.querySelector(".profile__title");
//export const profileDescription = document.querySelector(".profile__description");
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const cardTitleInput = document.querySelector("#card-title-input");
export const cardUrlInput = document.querySelector("#card-url-input");
export const profileEditForm = profileEditModal.querySelector("#profile-edit-form");
//export const cardListEl = document.querySelector(".cards__list");
//export const pictureModal = document.querySelector("#picture-modal");
//export const pictureModalHeading = document.querySelector("#picture-modal-heading");
//export const pictureModalImage = document.querySelector("#picture-modal-image");
export const addCardForm = document.querySelector("#add-card-form");
//export const modals = document.querySelectorAll(".modal");


////





////

export const settings = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save",
    inactiveButtonClass: "modal__save_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  };
  
  export const initialCards = [
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
  
 export const cardData = {
    //Why do I have cardData as just one card's data??????????????
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  };