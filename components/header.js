// header.js
import button from "./button.js";
import login from "../login.js"; // Importer login-funktionen
import logout from "../logout.js"; // Importer logout-funktionen

export function renderLoggedOutHeader(callback) {
    clearHeader()
    let header = document.createElement("header");
    header.className = "header";
    button(header, () => login(callback), "Log in", "primary");
    document.body.prepend(header);
}

export function renderLoggedInHeader(callback) {
    clearHeader()
    let header = document.createElement("header");
    header.className = "header";
    button(header, () => logout(callback), "Log out", "secondary");
    document.body.prepend(header);
}

export default function header(callback) {
    checkLoggedIn() ? renderLoggedInHeader(callback) : renderLoggedOutHeader(callback);
}

function checkLoggedIn() {
    console.log("checking storage")
    return localStorage.getItem("loggedIn") === "true";
}

export function clearHeader() {
    document.querySelector(".header")?.remove()
    // let header = document.querySelector(".header")
    // if (header) header.remove();
}
