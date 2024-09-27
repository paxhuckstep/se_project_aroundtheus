import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super({ popupSelector });
        this._popupForm = this._popupElement.querySelector('.modal__form');
        this._handleFormSubmit = handleFormSubmit;
    }



    close() {
        this._popupForm.reset();
        super.close(); //is this not calling itself ??
    }

    submitCardAddPopup(e) {
        e.preventDefault();
        const name = cardTitleInput.value;
        const link = cardUrlInput.value;
        renderCard({ name, link });
        e.target.reset();
        addFormValidator.disableButton();
        closeModal(cardAddModal);
      }

      submitProfileForm(e) {
        e.preventDefault(e);
        profileTitle.textContent = profileTitleInput.value;
        profileDescription.textContent = profileDescriptionInput.value;
        closeModal(profileEditModal);
      }

}

