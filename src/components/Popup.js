export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  openPopup() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown,", this._handleEscClose);
  }

  _handleEscClose = (e) => {
    if (e.key === "Escape") {
      this.closePopup();
    }
  };

  setEventListeners() {
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
