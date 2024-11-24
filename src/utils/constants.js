export const profileEditModal = document.querySelector("#edit-modal");
export const addNewCardButton = document.querySelector(".profile__add-button");
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

export const profileEditForm =
  profileEditModal.querySelector("#profile-edit-form");
export const addCardForm = document.querySelector("#add-card-form");
export const avatarPhoto = document.querySelector("#avatar-photo");
export const avatarPhotoForm = document.querySelector("#avatar-photo-form");

export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
