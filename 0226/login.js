const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-input");
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
  greeting.innerText = `Hello! ${username}`;
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  //   localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
