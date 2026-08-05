const // 1. Grab your HTML form elements using their unique IDs
const cityInput = document.getElementById("cityInput");
const submitButton = document.getElementById("submitButton");
const cityTitle = document.querySelector(".dash-header h1");

// 2. Attach an action event listener tracking mouse clicks
// FIXED: Repaired case-sensitivity spelling typos and injected missing functional arrows
submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the browser webpage window from resetting on click
    
    const typedCity = cityInput.value.trim(); // Extracts and filters input text values
    
    if (typedCity) {
        cityTitle.innerText = typedCity; // Instantly overrides the dashboard card location header h1 text string
        cityInput.value = "";            // Empties out the search entry query field input box layout
    }
});
