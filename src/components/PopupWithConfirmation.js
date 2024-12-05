import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmationClick) {
    super({ popupSelector });
    this._handleConfirmationClick = handleConfirmationClick;
    this._yesDeleteButton = document.querySelector("#delete-card-button");
  }


  openPopup(data){
    console.log(data);
    super.openPopup();
    const cardID = data;
    return cardID
  }

  setEventListeners() {
    this._yesDeleteButton.addEventListener("click", () => {
        console.log(cardID);
      this._handleConfirmationClick(cardID);
      this.closePopup;
    });
    super.setEventListeners();
  }
}
