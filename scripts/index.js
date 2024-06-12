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
//variables opening/closing modal
const profileEditModal = document.querySelector('.modal');
const profileEditButton = document.querySelector('.profile__edit-button');
const modalCloseButton = document.querySelector('.modal__close');
//variables giving values on opening
const profileTitle = document.querySelector('.profile__title');
const profileDescrition = document.querySelector('.profile__description');
const profileTitleInput = document.querySelector('#profile-title-input');
const profileDescriptionInput = document.querySelector('#profile-description-input');


//functions
function openModal(){
/////adding class so modal opens
profileEditModal.classList.add('modal__opened')
/////prefilling values on opening
profileTitleInput.value = profileTitle.textContent;
profileDescriptionInput.value = profileDescrition.textContent;
}
function closeModal(){
//////removing class so modal hides    
    profileEditModal.classList.remove('modal__opened')
}

//listeners
profileEditButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal)