export default function button(target, handleClick, text, type) {
    let button = document.createElement("button")
    button.addEventListener("click", handleClick)
    button.innerHTML = text
    button.classList.add("button", type)
    target.append(button)
}