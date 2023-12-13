// content.js

let contentContainer; // Deklarer variabel til at gemme content container

export default function content() {
    // Tjek om content container allerede eksisterer, og fjern den i så fald
    if (contentContainer) {
        contentContainer.remove();
    }

    // Opret en ny container div
    contentContainer = document.createElement("div");
    contentContainer.classList.add("link-container"); // Tilføj klasse til styling om nødvendigt

    // Opret den første link div med henvisning til classSelect.html
    const link1 = createLink("Class Selection", "classSelect.html");

    // Opret den anden link div
    const link2 = createLink("Coming Soon", handleLinkClick);

    // Tilføj link divs til container
    contentContainer.appendChild(link1);
    contentContainer.appendChild(link2);

    // Tilføj containeren til dokumentets krop eller en anden container
    document.body.appendChild(contentContainer);
}

// Funktion til at oprette en link div
function createLink(text, href) {
    const linkDiv = document.createElement("div");
    linkDiv.textContent = text;
    linkDiv.classList.add("link"); // Tilføj klasse til styling om nødvendigt
    linkDiv.addEventListener("click", () => handleLinkClick(href));
    return linkDiv;
}

// Funktion til at håndtere linkklik
function handleLinkClick(href) {
    console.log(`Link clicked: ${href}`);
    // Tilføj din logik til håndtering af linkklik
    // For eksempel kan du navigere til en anden side eller opdatere indholdet dynamisk
    window.location.href = href; // Dette navigerer til den angivne side
}

// Ny funktion til at ødelægge indhold
export function destroyContent() {
    // Tjek om content container eksisterer, og fjern den i så fald
    if (contentContainer) {
        contentContainer.remove();
    }
    // Implementer logik for at ødelægge eller skjule indholdet
    console.log("Destroying content...");
}
