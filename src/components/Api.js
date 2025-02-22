export default class Api {
  constructor(options) {
    // constructor body
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }


  // C Create R Read U Update D Delete
  // POST, GET*, { PATCH, PUT }, DELETE

  // create function to handle server response

  handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    else return Promise.reject(`Error: ${res.status}`);
  }

  //This replaces const "initialCards" right? (line 23 in constants.js)
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this.handleServerResponse);
  }

  likeCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      headers: this._headers,
      method: "PUT",
    }).then(this.handleServerResponse);
  }

  unLikeCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this.handleServerResponse);
  }

  createNewCard(card) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: card.title,
        link: card.url,
      }),
    }).then(this.handleServerResponse);
  }

  deleteSelectedCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}`, {
        headers: this._headers,
        method: "DELETE",
    }).then(this.handleServerResponse);
  }

  //   // other methods for working with the API

  getCurrentUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this.handleServerResponse);
  }
  

  updateProfileInfo(newUserInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: newUserInfo.name,
        about: newUserInfo.description,
      }),
    }).then(this.handleServerResponse);
  }

    updateProfileAvatar(avatarInfo) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
          headers: this._headers,
          method: "PATCH",
          body: JSON.stringify({
            avatar: avatarInfo
          })
      }).then(this.handleServerResponse);
    }
}

//does this go to constants.js?????
export const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "3842a5e9-1960-4db2-bd37-d3db8df7459f",
    "Content-Type": "application/json",
  },
});
