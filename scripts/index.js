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
//variables
const profileEditModal = document.querySelector('.modal');
const profileEditButton = document.querySelector('.profile__edit-button');
const modalCloseButton = document.querySelector('.modal__close');

//functions
function openModal(){
profileEditModal.classList.add('modal__opened')
}

function closeModal(){
    profileEditModal.classList.remove('modal__opened')
}

//listeners
profileEditButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal)