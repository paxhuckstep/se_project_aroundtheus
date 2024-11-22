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

function submitProfileForm(userDataInput) {
  console.log(userDataInput);
  api
    .updateProfileInfo(userDataInput)
    .then((userData) => {
      console.log(userData);
      userInfoMain.setUserInfo({
        name: userData.name,
        job: userData.about,
      });
      editProfilePopup.closePopup();
    })
    .catch((error) => console.log(error));
}

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#card-template",
    handleImageButton,
    handleLikeClick
  );
  // console.log(cardData);
  return cardElement.getView();
}

function handleLikeClick(card) {
  const cardId = card.getId();
  const isLiked = card.getLikeStatus();
  if (isLiked) {
    api
      .unLikeCard(cardId)
      .then(() => {
        //somethingThisCard.handleLikeIcon
        card.handleLikeIcon();
        console.log("unliked");
        // return "api successful";
      })
      .catch((error) => {
        console.log(error);
        // return "api unsuccessful";
      });
  } else {
    api
      .likeCard(cardId)
      .then(() => {
        card.handleLikeIcon();
        //somethingThiscard.handleLikeIcon
        console.log("liked");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const cardSection = new Section({ renderer: renderCard }, ".cards__list");

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardSection.addItem(cardElement);
}

function handleImageButton(cardData) {
  imagePopup.openPopup(cardData);
}

function submitCardAdd(inputValues) {
  api
    .createNewCard(inputValues)
    .then((data) => {
      // console.log(data);
      renderCard(data);
      addFormValidator.disableButton();
    })
    .catch((error) => {
      console.log(error);
    });
}

profileEditButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  const userDetails = userInfoMain.getUserInfo();
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

const userInfoMain = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__description",
});

api
  .getInitialCards()
  .then((result) => {
    console.log(result);
    cardSection.renderItems(result);
  })
  .catch((err) => {
    console.error(err); // log the error to the console
  });

api.getCurrentUserInfo().then((result) => {
  // console.log(result);
  userInfoMain.setUserInfo({
    name: result.name,
    job: result.about,
  });
});
