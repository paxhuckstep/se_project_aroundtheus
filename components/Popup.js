export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  openPopup() {
    // open popup (whats a modal vs popup?)
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    //closes popup
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown,", this._handleEscClose);
  }

  _handleEscClose(e) {
    //listens to esc button
    if (e.key === "Escape") {
      this.closePopup();
    }
  }

  setEventListeners() {
    // different from setEventListeners in FormValidation???
    console.log(this._popupElement);
    this._popupElement.addEventListener("mousedown", (evt) => {
 
      if (
        evt.target.classList.contains("modal_opened") ||
        evt.target.classList.contains("modal__close")
      ) {
        this.closePopup();
      }
    });
  }
}
