// signupForm.js

export default function signupForm() {
    const formContainer = document.createElement("div");
    formContainer.className = "signup-form-container";

    const form = document.createElement("form");
    form.addEventListener("submit", handleSignup);

    const usernameInput = createFormInput("text", "username", "Username");
    const passwordInput = createFormInput("password", "password", "Password");
    const confirmPasswordInput = createFormInput("password", "confirmPassword", "Confirm Password");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerHTML = "Sign Up";

    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(confirmPasswordInput);
    form.appendChild(submitButton);

    formContainer.appendChild(form);

    document.body.appendChild(formContainer);
}

function createFormInput(type, id, placeholder) {
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.placeholder = placeholder;
    return input;
}

function handleSignup(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        displayError("Passwords do not match");
        return;
    }

    // Perform validation and signup process
    // Add your signup API call or other logic here

    // Example: Display a success message
    displaySuccess(`Signup successful for ${username}!`);
}

function displayError(message) {
    const errorContainer = document.createElement("div");
    errorContainer.className = "error-container";
    errorContainer.textContent = message;

    document.body.appendChild(errorContainer);

    setTimeout(() => {
        errorContainer.remove();
    }, 3000);
}

function displaySuccess(message) {
    const successContainer = document.createElement("div");
    successContainer.className = "success-container";
    successContainer.textContent = message;

    document.body.appendChild(successContainer);

    setTimeout(() => {
        successContainer.remove();
    }, 3000);
}

export function destroySignUpForm() {
    console.log("destroying login form")
  let signUpFormContainer = document.querySelector(".signup-form-container");
  if (signUpFormContainer) {
    signUpFormContainer.remove();
  }
}

// New function to destroy content
export function destroyContent() {
  // Implementer logik for at ødelægge eller skjule indholdet
  console.log("Destroying content...");
}