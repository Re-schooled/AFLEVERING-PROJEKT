// script.js
import header from './components/header.js';
import signupForm, { destroySignUpForm, destroyContent } from './pages/signUpForm/signupForm.js'; // Importér destroyContent og destroySignUpForm
import login from './login.js'; // Importer login-funktionen
import logout from './logout.js'; // Importer logout-funktionen
import content from './pages/content.js'; // Importer content-funktionen

function callback(isLoggedIn) {
    console.log("working")
    isLoggedIn ? destroySignUpForm() : signupForm();
    isLoggedIn ? content() : destroyContent();
}



header(callback);