import { convertTemperature } from "./weather.js"; // Import function to convert temperature units

/**
 * Updates the weather UI with fetched data.
 * Displays location name, temperature, and weather condition.
 * Hides the search UI and shows the weather details.
 */
export const updateWeatherUI = (data) => {
    const locationName = document.getElementById("location-name");
    const temperature = document.getElementById("temperature-display");
    const weatherDescription = document.getElementById("weather-description");

    locationName.textContent = `Weather in ${data.name}`;
    temperature.textContent = `${convertTemperature(data.main.temp, "C")}`; // Convert temperature to Celsius
    weatherDescription.textContent = `Condition: ${data.weather[0].description}`;

    document.getElementById("weather-container").style.display = "none"; // Hide search container
    document.getElementById("weather-details").style.display = "flex"; // Show weather details
};

/**
 * Updates the weather icon based on the received weather data.
 * Fetches the icon from OpenWeatherMap using the weather condition code.
 */
export const updateWeatherIcon = (data) => {
    const iconCode = data.weather[0].icon;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Set the icon source
    weatherIcon.classList.remove('hidden'); // Make the icon visible
};

/**
 * Displays a list of city suggestions based on user input.
 * Users can select a city from the list, triggering the callback function.
 */
export const showSuggestions = (suggestions, callback) => {
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    if (suggestions.length === 0) {
        suggestionsList.classList.add("hidden"); // Hide list if no suggestions
        return;
    }

    suggestions.forEach(city => {
        const listItem = document.createElement("li");
        listItem.textContent = `${city.name}, ${city.country}`;
        listItem.classList.add("suggestion-list");

        // When a city is clicked, update the input and hide suggestions
        listItem.addEventListener("click", () => {
            callback(city);
            suggestionsList.innerHTML = ""; // Clear suggestions
            suggestionsList.classList.add("hidden"); // Hide list
        });

        suggestionsList.appendChild(listItem); // Add city to the list
    });

    suggestionsList.classList.remove("hidden"); // Show the list
};
