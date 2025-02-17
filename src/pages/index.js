import Card from "../components/Card.js";
import FormValidator from "../components/FormValidation.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";
import { api } from "../components/Api.js";

import {
  profileEditForm,
  addNewCardButton,
  profileEditButton,
  profileTitleInput,
  profileDescriptionInput,
  addCardForm,
  settings,
  avatarPhoto,
  avatarPhotoForm,
} from "../utils/constants.js";
import Popup from "../components/Popup.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
////////////////////////////////////////////////////////

function twoArrays(k, A, B) {
  const length = A.length;
  const aMax = Math.max(...A);
  const bMax = Math.max(...B);
  let aSortCount = [];
  let bSortCount = [];
  let aSorted = [];
  let bSorted = [];
  let sumArray = [];

  for (let i = 0; i < aMax + 1; i++) {
    aSortCount.push(0);
  }
  for (let i = 0; i < bMax + 1; i++) {
    bSortCount.push(0);
  }

  for (let i = 0; i < length; i++) {
    aSortCount[A[i]]++;
    bSortCount[B[i]]++;
  }
  for (let i = 0; i < aMax + 1; i++) {
    if (aSortCount[i] > 0) {
      for (let j = 0; j < aSortCount[i]; j++) {
        aSorted.push(i);
      }
    }
  }
  for (let i = bMax; i >= 0; i--) {
    if (bSortCount[i] > 0) {
      for (let j = 0; j < bSortCount[i]; j++) {
        bSorted.push(i);
      }
    }
  }
  for (let i = 0; i < length; i++) {
    sumArray.push(aSorted[i] + bSorted[i]);
  }

  for (let i = 0; i < length; i++) {
    if (sumArray[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

console.log(twoArrays(7, [2, 0, 1, 2, 2, 2, 99], [7, 99, 9, 0, 5, 6, 3]));

// function countingSort(arr) {
//   let outputArr = [];
//   for (let i = 0; i < 100; i++) {
//     outputArr.push(0);
//   }
//   arr.forEach((number) => {
//     outputArr[number]++;
//   });
//   return outputArr;
// }

// function twoArraysOriginal(k, A, B) {
//   A.sort();
//   B.sort().reverse();
//   let sumArr = [];
//   for (let i = 0; i < A.length; i++) {
//       sumArr[i] = A[i] + B[i];
//   }
//   for (let i = 0; i < sumArr.length; i++) {
//       if (sumArr[i] < k) {
//           return "NO";
//       }

//   }
//   return "YES";
// }

// let Rone = [];
// let Rtwo = [];

// for (let i = 0; i < 700; i++) {
//   Rone.push(i);
//   Rtwo.push(800 - i);
// }
// // Rtwo.reverse();
// // console.log( Rtwo);
// console.log(twoArrays(900, Rone, Rtwo));

// const firstArray = [1,2,3,4,5];
// console.log(firstArray);
// let secondArray = firstArray.concat().reverse();
// console.log(firstArray);
// secondArray.pop();
// console.log(firstArray);
// console.log(firstArray, secondArray);

// function pangrams(s) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const alphabetArray = alphabet.split("");
//   const lowerCase = s.toLowerCase();
//   let missersArr = [];
//   alphabetArray.forEach((letter) => {
//     if(!lowerCase.includes(letter)) {
//       missersArr.push(letter);
//     }
//   })
//   if (missersArr.length > 0) {
//     const missersStr = missersArr.join(", ");
//     return `"${s}" is not a pangram. "${s}" is missing: ${missersStr}.`;

//   }
//   return "pangram";
// }

// console.log(
//   pangrams(
//     "pangramCDBEGHKtYZP fijowvyuq"
//   )
// );

// function miniMaxSum(arr) {
//   let total = 0;
//   arr.forEach((num) => {
//     total = total + num;
//   });
//   const minSum = total - Math.max(...arr);
//   const maxSum = total - Math.min(...arr);
//   console.log(minSum, maxSum);
// }

// const stuff = [1, 2, 3, 4, 5];

// console.log(miniMaxSum(stuff));

// function arrayReverse(arr) {
//   let newArr = []
//   // for (let i = 0; i < arr.length; i++) {
//   //   newArr.unshift(arr[i]);
//   // }
//   arr.forEach((piece) => {
//     newArr.unshift(piece);
//   })
//   return newArr
//   // return arr.reverse();
// }

// const rev = [1, 2, 4, 5, 9, 8];

// console.log(arrayReverse(rev));

// function timeConversion(s) {
//   console.log(s);
//   const wholeArray = s.split("");
//   wholeArray.pop();
//   wholeArray.pop();
//   const noLetters = wholeArray.join("");
//   const timeArray = noLetters.split(":");

//   if (s.charAt(0) === "1" && s.charAt(1) === "2") {
//     if (s.charAt(8) === "A") {
//       timeArray[0] = "00";
//       return timeArray.join(":");
//     }
//     if (s.charAt(8) === "P") {
//       return noLetters;
//     }
//   }

//   if (s.charAt(8) === "P") {
//     timeArray[0] = (Number(timeArray[0]) + 12).toString();
//     return timeArray.join(":");
//   }

//   return noLetters;
// }

// console.log(timeConversion("12:11:11AM"));

// function timeConversionOriginal(s) {
//   const wholeArray = s.split("");
//   wholeArray.pop();
//   wholeArray.pop();
//   const noLetters = wholeArray.join("");
//   const timeArray = noLetters.split(":");

//   if (s.charAt(8) === "P" && s.charAt(0) === "1" && s.charAt(1) === "2") {
//     return noLetters;
//   }

//   if (s.charAt(8) === "P") {
//     timeArray[0] = (Number(timeArray[0]) + 12).toString();
//     return timeArray.join(":");
//   }

//   if (s.charAt(8) === "A" && s.charAt(0) === "1" && s.charAt(1) === "2") {
//     timeArray[0] = "00";
//     return timeArray.join(":");
//   }

//   return noLetters;
// }

// function countingSort(arr) {
//   let outputArr = [];
//   for (let i = 0; i < 100; i++) {
//     outputArr.push(0);
//   }
//   // for (let i = 0; i < arr.length; i++) {
//   //   // outputArr[arr[i]] = outputArr[arr[i]] + 1;
//   //   outputArr[arr[i]]++
//   // }
//   arr.forEach((number) => {
//     outputArr[number]++;
//   });
//   return outputArr;
// }
// const unsorted = [1, 2, 3, 5, 3, 2, 5, 4, 6, 7, 3, 99, 99, 99, 99];

// console.log(countingSort(unsorted));

// function matchingStrings(strings, queries) {
//   const answer = [];
//   queries.forEach((query) => {
//     let matches = 0;
//     strings.forEach((string) => {
//       if (string === query) {
//         matches++;
//       }
//     });
//     answer.push(matches);
//   });
//   return answer;
// }

// const strs =["abcde",
//   "sdaklfj",
// "  asdjf",
//   "na",
//   "basdn",
//   'sdaklfj',
//   "asdjf",
//   "na",
//   "asdjf",
//   "na",
//   "basdn",
//   "sdaklfj"
//   ,"asdjf"]

//   const qrs = ["abcde",
//     "sdaklfj",
//     "asdjf",
//     "na",
//     "basdn"]

// console.log(matchingStrings(strs, qrs))

// function flippingBits(n) {
//   const bitStr = (n.toString(2));
//   let preZeros = [];
//   for (let i = 0; i < 32 - bitStr.length; i++) {
//     preZeros.push("0");
//   }
//   const bitList = preZeros.concat(bitStr.split(""));
//   const flipList = bitList.map((bit) => {
//     if(bit === "1") {
//       return "0"
//     }
//     return "1"
//   })
//   return parseInt(flipList.join(""), 2);

//   }

// console.log(flippingBits(4294967263));

// function sockMerchant(ar) {
//   const sorted = ar.sort();
//   let matches = 0;
//   for (let i = 0; i < ar.length; i++) {
//     if (sorted[i] === sorted[i + 1]) {
//       matches++;
//       i++;
//     }
//   }
//   return matches;
// }

// console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));

//////////////////////////////////////////////////////////////////

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#card-template",
    handleImageButton,
    handleLikeClick,
    handleTrashButton
  );
  return cardElement.getView();
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardSection.addItem(cardElement);
}

function handleImageButton(cardData) {
  imagePopup.openPopup(cardData);
}

function handleLikeClick(card) {
  const cardId = card.getId();
  const isLiked = card.getLikeStatus();
  if (isLiked) {
    api
      .unLikeCard(cardId)
      .then(() => {
        card.handleLikeIcon();
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    api
      .likeCard(cardId)
      .then(() => {
        card.handleLikeIcon();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function handleTrashButton(card) {
  console.log(card);
  const cardId = card.getId();
  cardDeletePopup.openPopup();
  cardDeletePopup.setSubmitAction(() => {
    api
      .deleteSelectedCard(cardId)
      .then(() => {
        card.cardDeletionConfirmed();
        cardDeletePopup.closePopup();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        cardDeletePopup.setButtonTextYes();
      });
  });
}

function submitProfileForm(userDataInput) {
  api
    .updateProfileInfo(userDataInput)
    .then((userData) => {
      userInfoMain.setUserInfo({
        name: userData.name,
        job: userData.about,
      });
      editProfilePopup.resetForm();
      editProfilePopup.closePopup();
    })
    .catch((error) => console.log(error))
    .finally(() => {
      editProfilePopup.setButtonTextSave();
    });
}
function submitAvatarLink(urlInput) {
  api
    .updateProfileAvatar(urlInput.url)
    .then((data) => {
      userInfoMain.setAvatarUrl(data.avatar);
      changeAvatarPopup.resetForm();
      changeAvatarPopup.closePopup();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      changeAvatarPopup.setButtonTextSave();
    });
}
function submitCardAdd(inputValues) {
  api
    .createNewCard(inputValues)
    .then((data) => {
      renderCard(data);
      addFormValidator.disableButton();
      newCardPopup.resetForm();
      newCardPopup.closePopup();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      newCardPopup.setButtonTextSave();
    });
}

profileEditButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  const userDetails = userInfoMain.getUserInfo();
  editProfilePopup.openPopup();
  profileTitleInput.value = userDetails.name;
  profileDescriptionInput.value = userDetails.job;
});

addNewCardButton.addEventListener("click", () => {
  newCardPopup.openPopup();
});

avatarPhoto.addEventListener("click", () => {
  changeAvatarPopupValidator.resetValidation();
  changeAvatarPopup.openPopup();
});

const userInfoMain = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__description",
  userAvatar: ".profile__image",
});

const cardSection = new Section({ renderer: renderCard }, ".cards__list");

const editFormValidator = new FormValidator(settings, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addCardForm);
addFormValidator.enableValidation();

const changeAvatarPopupValidator = new FormValidator(settings, avatarPhotoForm);
changeAvatarPopupValidator.enableValidation();

const newCardPopup = new PopupWithForm("#card-add-modal", submitCardAdd);
newCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm("#edit-modal", submitProfileForm);
editProfilePopup.setEventListeners();

const changeAvatarPopup = new PopupWithForm(
  "#change-avatar-modal",
  submitAvatarLink
);
changeAvatarPopup.setEventListeners();

const imagePopup = new PopupWithImage("#picture-modal");
imagePopup.setEventListeners();

const cardDeletePopup = new PopupWithConfirmation("#delete-card-modal");
cardDeletePopup.setEventListeners();

api
  .getInitialCards()
  .then((result) => {
    cardSection.renderItems(result);
  })
  .catch((err) => {
    console.error(err);
  });

api
  .getCurrentUserInfo()
  .then((result) => {
    userInfoMain.setUserInfo({
      name: result.name,
      job: result.about,
    });
    userInfoMain.setAvatarUrl(result.avatar);
  })
  .catch((error) => console.log(error));

// github pages link: https://paxhuckstep.github.io/se_project_aroundtheus
