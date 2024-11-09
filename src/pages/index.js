import Card from "../components/Card.js";
import FormValidator from "../components/FormValidation.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";
import { api } from "../components/Api.js";

import {
  profileEditForm,
  addNewCardButton,
  profileEditButton,
  profileTitleInput,
  profileDescriptionInput,
  addCardForm,
  initialCards,
  settings,
} from "../utils/constants.js";

function submitProfileForm(userData) {
  userInfoClass.setUserInfo({
    name: userData.name,
    job: userData.description,
  });
  editProfilePopup.closePopup();
}

function createCard(cardData) {
  const cardElement = new Card(cardData, "#card-template", handleImageButton);
  return cardElement.getView();
}

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list"
);

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardSection.addItem(cardElement);
}

cardSection.renderItems();

function handleImageButton(cardData) {
  imagePopup.openPopup(cardData);
}

function submitCardAdd(inputValues) {
  const name = inputValues.title;
  const link = inputValues.url;
  console.log(inputValues);
  renderCard({ name, link });
  addFormValidator.disableButton();
}

profileEditButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  const userDetails = userInfoClass.getUserInfo();
  editProfilePopup.openPopup();
  profileTitleInput.value = userDetails.name;
  profileDescriptionInput.value = userDetails.job;
});
addNewCardButton.addEventListener("click", () => {
  newCardPopup.openPopup();
});

const editFormValidator = new FormValidator(settings, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addCardForm);
addFormValidator.enableValidation();

const newCardPopup = new PopupWithForm("#card-add-modal", submitCardAdd);
newCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm("#edit-modal", submitProfileForm);
editProfilePopup.setEventListeners();

const imagePopup = new PopupWithImage("#picture-modal");
imagePopup.setEventListeners();

const userInfoClass = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__description",
});

api
  .getInitialCards()
  .then((result) => {
    // process the result
    console.log(result);
  })
  .catch((err) => {
    console.error(err); // log the error to the console
  });
