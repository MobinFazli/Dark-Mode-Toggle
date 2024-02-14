// Selects the toggle switch element with the class toggle!
const toggleEl = document.querySelector(".toggle");

// Selects the body element!
const bodyEl = document.querySelector("body");

// Sets the checked property of the toggle switch based on the value retrieved from localStorage!
toggleEl.checked = JSON.parse(localStorage.getItem("theme"));

// Calls the updateBodyMode function to initially set the background color based on the toggle state!
updateBodyMode();

// Defines a function to update the body background color based on the toggle state!
function updateBodyMode() {
    // Sets the background color of the body to black if the toggle is checked, otherwise white!
    bodyEl.style.background = toggleEl.checked ? "black" : "white";
}

// Adds an event listener to the toggle switch for input (change) events!
toggleEl.addEventListener("input", () => {
     // Calls the updateBody function to update the body background color when the toggle state changes!
    updateBodyMode();

     // Updates the localStorage with the current toggle state!
    localStorage.setItem("theme", JSON.stringify(toggleEl.checked));
});