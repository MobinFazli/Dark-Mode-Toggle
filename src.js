const toggleEl = document.querySelector(".toggle");

const bodyEl   = document.querySelector("body");

toggleEl.checked = JSON.parse(localStorage.getItem("theme"));

updateBody();

function updateBody() {
    bodyEl.style.background = toggleEl.checked ? "black" : "white";
}

toggleEl.addEventListener("input", () => {
    updateBody();
    localStorage.setItem("theme", JSON.stringify(toggleEl.checked));
});