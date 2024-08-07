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
//VARIABLES opening/closing modal
const profileEditModal = document.querySelector("#edit-modal");
const cardAddModal = document.querySelector("#card-add-modal");
const addNewCardButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModalCloseButton =
  profileEditModal.querySelector(".modal__close");
const cardAddModalCloseButton = cardAddModal.querySelector(".modal__close");

/////variables giving values on opening
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");
//////variables saving new values
const profileEditForm = profileEditModal.querySelector("#profile-edit-form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
////// variables with cards
const cardListEl = document.querySelector(".cards__list");
///// picture modal
const pictureModal = document.querySelector("#picture-modal");
const pictureModalHeading = document.querySelector("#picture-modal-heading");
const pictureModalImage = document.querySelector("#picture-modal-image");
const addCardForm = document.querySelector("#add-card-form");
let foregroundClicked = false;
let backgroundClicked = false;
let modalIsOpen = false; // WITHOUT THIS IT CLOSES THE MODAL AS SOON AS I OPEN IT :)

//FUNCTIONS
function openModal(modal) {
  modal.classList.add("modal_opened");
  let modalBackground = document.querySelector("#" + modal.id);
  modalBackground.addEventListener("click", handleBackgroundClick);
  let modalForeground = document.querySelector("#" + modal.id + "-container");
  modalForeground.addEventListener("click", handleForegroundClick);
  modalIsOpen = true;
}

function handleForegroundClick() {
  foregroundClicked = true;
  // console.log("foreground clicked");
}

function handleBackgroundClick() {
  backgroundClicked = true;
  //console.log('background clicked');
  if (!foregroundClicked && backgroundClicked && modalIsOpen) {
    //console.log("closed");
    closeModal(pictureModal);
    closeModal(cardAddModal);
    closeModal(profileEditModal);
  } else {
    //console.log("still open")
    backgroundClicked = false;
    foregroundClicked = false;
  }
}

function handleModalKeydown(e) {
 // console.log("pressed");
  if (e.key === "Escape") {
    closeModal(pictureModal);
    closeModal(cardAddModal);
    closeModal(profileEditModal);
  }
}

const page = document.querySelector(".page");
page.addEventListener("keydown", handleModalKeydown);

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  modalIsOpen = false;
}

function submitProfileForm(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  cardImageEl.setAttribute("src", cardData.link);
  cardImageEl.setAttribute("alt", cardData.name);
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", handleLikeButton);
  //this was easier for me than having a forEach like button handler. and it should work with 100 like buttons just like the other way??
  const trashButton = cardElement.querySelector(".card__trash-button");
  trashButton.addEventListener("click", handleTrashButton);
  cardImageEl.addEventListener("click", () => handleImageButton(cardData));
  return cardElement;
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}
function handleLikeButton(event) {
  event.target.classList.toggle("card__like-button_active");
}
function handleTrashButton(event) {
  event.target.closest(".card").remove();
}
function handleImageButton(cardData) {
  openModal(pictureModal);
  pictureModalImage.src = cardData.link;
  pictureModalImage.alt = cardData.name;
  pictureModalHeading.textContent = cardData.name;
}
function handleClosePictureModal() {
  closeModal(pictureModal);
}
const pictureModalCloseButton = pictureModal.querySelector(
  "#picture-modal-close"
);
pictureModalCloseButton.addEventListener("click", handleClosePictureModal);
//^^^^ close modal only works as an arrow function here, otherwise it activates wtihout a click, idk y

function submitCardAdd(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link });
  cardTitleInput.value = "";
  cardUrlInput.value = "";
  closeModal(cardAddModal);
}

//LISTENERS
profileEditButton.addEventListener("click", () => {
  openModal(profileEditModal);
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});
profileEditModalCloseButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);
profileEditForm.addEventListener("submit", submitProfileForm);
addNewCardButton.addEventListener("click", () => openModal(cardAddModal));
cardAddModalCloseButton.addEventListener("click", () =>
  closeModal(cardAddModal)
);
addCardForm.addEventListener("submit", submitCardAdd);

//CARD CODE
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});
