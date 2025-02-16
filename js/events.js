import { fetchWeatherData, fetchCitySuggestions } from "./weather.js";
import { updateWeatherUI, updateWeatherIcon, showSuggestions } from "./ui.js";

const cityInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("search-btn");
const backBtn = document.getElementById("back-btn");
let selectedCity = { lat: null, lon: null }; // Stores the selected city's latitude and longitude

let debounceTimer;

/**
 * Adds an input event listener to fetch city suggestions with debounce.
 * It waits for the user to stop typing for 300ms before making an API request.
 */
cityInput.addEventListener("input", async () => {
    clearTimeout(debounceTimer);
    const query = cityInput.value.trim();

    if (query.length < 2) return; // Prevents API calls for very short inputs

    debounceTimer = setTimeout(async () => {
        const suggestions = await fetchCitySuggestions(query);
        showSuggestions(suggestions, (city) => {
            cityInput.value = city.name; // Sets input value to selected city
            selectedCity.lat = city.lat;
            selectedCity.lon = city.lon;
        });
    }, 300);
});

/**
 * Fetches weather data when the search button is clicked.
 * Ensures that a city is selected before making an API request.
 */
searchBtn.addEventListener("click", async () => {
    if (selectedCity.lat && selectedCity.lon) {
        const weatherData = await fetchWeatherData(selectedCity.lat, selectedCity.lon);
        if (weatherData) {
            updateWeatherUI(weatherData); // Updates the UI with weather details
            updateWeatherIcon(weatherData); // Updates the weather icon
        }
    } else {
        alert("Please select a city from the suggestions.");
    }
});

/**
 * Handles back button click to hide weather details and show the search UI.
 */
backBtn.addEventListener("click", () => {
    document.getElementById("weather-details").style.display = "none";
    document.getElementById("weather-container").style.display = "flex";
});

/**
 * Hides the suggestions list when clicking outside the input field.
 */
document.addEventListener("click", (event) => {
    const suggestionsList = document.getElementById("suggestions");
    if (!cityInput.contains(event.target) && !suggestionsList.contains(event.target)) {
        suggestionsList.classList.add("hidden");
    }
});
