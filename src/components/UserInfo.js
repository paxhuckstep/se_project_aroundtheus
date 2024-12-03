export default class UserInfo {
  constructor({ userName, userJob, userAvatar }) {
    this._nameElement = document.querySelector(userName);
    this._jobElement = document.querySelector(userJob);
    this._avatarElement = document.querySelector(userAvatar);
  }

  getUserInfo() {
    const userInfo = {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
    // getting the user info
    return userInfo;
  }

  setUserInfo(userInput) {
    // sets userInfo at end of submitProfileEdit ()
    this._nameElement.textContent = userInput.name;
    this._jobElement.textContent = userInput.job;
  }

//   getAvatarInfo() {
//   const avatarInfo ={
//     url: this._avatarElement.src,
//   };
//   return avatarInfo;
// }

  setAvatarUrl(avatarInput){
    this._avatarElement.src = avatarInput.url;
  }
}
