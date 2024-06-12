const initialCards = [
    {
    name: 'Yosemite Valley',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
}, {
    name: 'Lake Louise',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",

}, {
    name: 'Bald Mountains',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",

}, {
    name: 'Latemar',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",

} , {
    name: 'Vanoise National Park',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",

}, {
    name: 'Lago de Braies',
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",

}
];
//VARIABLES opening/closing modal
const profileEditModal = document.querySelector('.modal');
const profileEditButton = document.querySelector('.profile__edit-button');
const modalCloseButton = document.querySelector('.modal__close');
/////variables giving values on opening
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileTitleInput = document.querySelector('#profile-title-input');
const profileDescriptionInput = document.querySelector('#profile-description-input');
//////variables saving new values
const profileEditForm = profileEditModal.querySelector('.modal__form');
const cardTemplate = document.querySelector('#card-template').content.firstElementChild;
////// variables with cards
const cardListEl = document.querySelector('.cards__list');

//FUNCTIONS
function openModal(){
/////adding class so modal opens
profileEditModal.classList.add('modal__opened')
/////prefilling values on opening
profileTitleInput.value = profileTitle.textContent;
profileDescriptionInput.value = profileDescription.textContent;
}

function closeModal(){
//////removing class so modal hides    
    profileEditModal.classList.remove('modal__opened');
}

function submitModal(e){
e.preventDefault();
profileTitle.textContent = profileTitleInput.value;
profileDescription.textContent = profileDescriptionInput.value;
closeModal();
}

function getCardElement(cardData){
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector('.card__image');
    const cardTitleEl = cardElement.querySelector('.card__title');
    cardTitleEl.textContent = cardData.name;
    return cardElement;
}

//LISTENERS  open / close
profileEditButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);
//////submission 
profileEditForm.addEventListener('submit', submitModal);

//CARD CODE
initialCards.forEach((cardData) => {
const cardElement = getCardElement(cardData);
cardListEl.append(cardElement);

})