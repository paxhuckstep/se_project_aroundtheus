export default class Popup {
    constructor({ popupSelector }){
    this._popup = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
}

open() {
    // open popup (whats a modal vs popup?)
    this._popup.classList.add("modal_opened");
    document.addEventListener("keydown", _handleEscClose);
}

close () {
    //closes popup
    this._popup
}

_handleEscClose () {
    //listens to esc button
}

setEventListeners () {
    // different from setEventListeners in FormValidation???
}