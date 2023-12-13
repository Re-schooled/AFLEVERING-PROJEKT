// login.js
import signupForm from "./pages/signUpForm/signupForm.js";
import { destroySignUpForm, destroyContent } from "./pages/signUpForm/signupForm.js";
import content from "./pages/content.js";
import header from "./components/header.js"; // Importer header-funktionen

export default function login(callback) {
  localStorage.setItem("loggedIn", true);
  callback(true);
  header(callback); // Opdater headeren efter vellykket login
}

function displayContent(isLoggedIn) {
  console.log(isLoggedIn);
  isLoggedIn ? destroySignUpForm() : signupForm();
  isLoggedIn ? content() : destroyContent();
}

function checkLoggedIn() {
  console.log("checking storage");
  return localStorage.getItem("loggedIn") === "true";
}

displayContent(checkLoggedIn());
