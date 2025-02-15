import { fetchWeatherData, fetchCitySuggestions } from "./weather.js";
import { updateWeatherUI, updateWeatherIcon, showSuggestions } from "./ui.js";

const cityInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("search-btn");
const backBtn = document.getElementById("back-btn");
let selectedCity = { lat: null, lon: null };

let debounceTimer;
cityInput.addEventListener("input", async () => {
    clearTimeout(debounceTimer);
    const query = cityInput.value.trim();

    if (query.length < 2) return;

    debounceTimer = setTimeout(async () => {
        const suggestions = await fetchCitySuggestions(query);
        showSuggestions(suggestions, (city) => {
            cityInput.value = city.name;
            selectedCity.lat = city.lat;
            selectedCity.lon = city.lon;
        });
    }, 300);
});

searchBtn.addEventListener("click", async () => {
    if (selectedCity.lat && selectedCity.lon) {
        const weatherData = await fetchWeatherData(selectedCity.lat, selectedCity.lon);
        if (weatherData) {
            updateWeatherUI(weatherData);
            updateWeatherIcon(weatherData);
        }
    } else {
        alert("Please select a city from the suggestions.");
    }
});

backBtn.addEventListener("click", () => {
    document.getElementById("weather-details").style.display = "none";
    document.getElementById("weather-container").style.display = "flex";
});

// Hide suggestions when clicking outside
document.addEventListener("click", (event) => {
    const suggestionsList = document.getElementById("suggestions");
    if (!cityInput.contains(event.target) && !suggestionsList.contains(event.target)) {
        suggestionsList.classList.add("hidden");
    }
});
