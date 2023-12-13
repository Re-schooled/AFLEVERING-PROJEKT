// logout.js
import clearHeader from './components/header.js';
import { destroyContent } from './pages/content.js';
import { renderLoggedOutHeader } from './components/header.js';

export default function logout(callback) {
    // Log ud
    callback(false);
    localStorage.setItem("loggedIn", false);
    clearHeader();
    destroyContent(); // Fjern content ved logud
    renderLoggedOutHeader(callback);
}
