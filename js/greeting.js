const userNameForm = document.querySelector('.form-user');
const inputName = userNameForm.querySelector('input');
const greeting = document.querySelector('.greeting');

const CLS_SHOW = 'show';
const CLS_HIDE = 'hide';

const KEY_USER_NAME = 'curUserName';

// document.addEventListener('DOMContentLoaded', function () {
//     init();
// });

function greetingInit() {
    loadUserName();
}

function loadUserName() {
    const userName = localStorage.getItem(KEY_USER_NAME);
    if (userName === null) {
        askUserName();
    } else {
        showGreeting(userName);
    }
}

function askUserName() {
    setVisibleElement(userNameForm, true);
    userNameForm.addEventListener('submit', handelUserNameSubmit);
}

function handelUserNameSubmit(event) {
    event.preventDefault();
    const userName = inputName.value;

    saveUserName(userName);
    showGreeting(userName);
}

function saveUserName(event) {
    localStorage.setItem(KEY_USER_NAME, userName);
}

function removeUserName() {
    localStorage.removeItem(KEY_USER_NAME);
}

function showGreeting(userName) {
    setVisibleElement(greeting, true);
    greeting.innerHTML = `Hello ${userName}!`;
}

function setVisibleElement(element, isVisible) {
    if (isVisible === true) {
        element.classList.add(CLS_SHOW);
        element.classList.remove(CLS_HIDE);
    } else {
        element.classList.add(CLS_HIDE);
        element.classList.remove(CLS_SHOW);
    }
}

greetingInit();