import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmationClick) {
   this._popupElement = document.querySelector(popupSelector);
   this._handleConfirmationClick = handleConfirmationClick;
  }
)}