export default class UserInfo {
    constructor ({ userName, userJob }) {
        this._nameElement = document.querySelector(userName);
        this._jobElement = document.querySelector(userJob);
    }


getUserInfo() {
const userInfo = {
name: this._nameElement.textContent,
job: this._jobElement.textContent,
}
// getting the user info
return userInfo
}

setUserInfo(userInput) {
// sets userInfo at end of submitProfileEdit ()
this._nameElement.textContent = userInput.name;
this._jobElement.textContent = userInput.job;
}

}