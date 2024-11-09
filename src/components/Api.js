export default class Api {
  constructor(options) {
    // constructor body
    this._baseUrl =  options.baseUrl;
    this.header = options.headers;
  }

  // C R U D
  // POST, PATCH, PUT, DELETE, GET*

  // create function to handle server response

  handleServerResponse(res) {
    if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      else return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: "6fa57863-b0dd-4bdb-83ec-bd9fc4d03760",
      },
    }).then(this.handleServerResponse)
  }

  // other methods for working with the API
}

export const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "6fa57863-b0dd-4bdb-83ec-bd9fc4d03760",
    "Content-Type": "application/json",
  },
});
