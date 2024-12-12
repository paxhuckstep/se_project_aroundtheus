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
  settings,
  avatarPhoto,
  avatarPhotoForm,
} from "../utils/constants.js";
import Popup from "../components/Popup.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";



function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#card-template",
    handleImageButton,
    handleLikeClick,
    handleTrashButton
  );
  return cardElement.getView();
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardSection.addItem(cardElement);
}

function handleImageButton(cardData) {
  imagePopup.openPopup(cardData);
}

function handleLikeClick(card) {
  const cardId = card.getId();
  const isLiked = card.getLikeStatus();
  if (isLiked) {
    api
      .unLikeCard(cardId)
      .then(() => {
        card.handleLikeIcon();
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    api
      .likeCard(cardId)
      .then(() => {
        card.handleLikeIcon();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function handleTrashButton(card) {
  console.log(card);
  const cardId = card.getId();
  cardDeletePopup.openPopup();
  cardDeletePopup.setSubmitAction(() => {
    api
      .deleteSelectedCard(cardId)
      .then(() => {
        card.cardDeletionConfirmed();
        cardDeletePopup.closePopup();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        cardDeletePopup.setButtonTextYes();
      });
  });
}

function submitProfileForm(userDataInput) {
  api
    .updateProfileInfo(userDataInput)
    .then((userData) => {
      userInfoMain.setUserInfo({
        name: userData.name,
        job: userData.about,
      });
      editProfilePopup.resetForm();
      editProfilePopup.closePopup();
    })
    .catch((error) => console.log(error))
    .finally(() => {
      editProfilePopup.setButtonTextSave();
    });
}
function submitAvatarLink(urlInput) {
  api
    .updateProfileAvatar(urlInput.url)
    .then((data) => {
      userInfoMain.setAvatarUrl(data.avatar);
      changeAvatarPopup.resetForm();
      changeAvatarPopup.closePopup();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      changeAvatarPopup.setButtonTextSave();
    });
}
function submitCardAdd(inputValues) {
  api
    .createNewCard(inputValues)
    .then((data) => {
      renderCard(data);
      addFormValidator.disableButton();
      newCardPopup.resetForm();
      newCardPopup.closePopup();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      newCardPopup.setButtonTextSave();
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

avatarPhoto.addEventListener("click", () => {
  changeAvatarPopupValidator.resetValidation();
  changeAvatarPopup.openPopup();
});

const userInfoMain = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__description",
  userAvatar: ".profile__image",
});

const cardSection = new Section({ renderer: renderCard }, ".cards__list");

const editFormValidator = new FormValidator(settings, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addCardForm);
addFormValidator.enableValidation();

const changeAvatarPopupValidator = new FormValidator(settings, avatarPhotoForm);
changeAvatarPopupValidator.enableValidation();

const newCardPopup = new PopupWithForm("#card-add-modal", submitCardAdd);
newCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm("#edit-modal", submitProfileForm);
editProfilePopup.setEventListeners();

const changeAvatarPopup = new PopupWithForm(
  "#change-avatar-modal",
  submitAvatarLink
);
changeAvatarPopup.setEventListeners();

const imagePopup = new PopupWithImage("#picture-modal");
imagePopup.setEventListeners();

const cardDeletePopup = new PopupWithConfirmation("#delete-card-modal");
cardDeletePopup.setEventListeners();

api
  .getInitialCards()
  .then((result) => {
    cardSection.renderItems(result);
  })
  .catch((err) => {
    console.error(err);
  });

api
  .getCurrentUserInfo()
  .then((result) => {
    userInfoMain.setUserInfo({
      name: result.name,
      job: result.about,
    });
    userInfoMain.setAvatarUrl(result.avatar);
  })
  .catch((error) => console.log(error));

// github pages link: https://paxhuckstep.github.io/se_project_aroundtheus
