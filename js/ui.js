import { convertTemperature } from "./weather.js"; // Import the missing function

export const updateWeatherUI = (data) => {
    const locationName = document.getElementById("location-name");
    const temperature = document.getElementById("temperature-display");
    const weatherDescription = document.getElementById("weather-description");

    locationName.textContent = `Weather in ${data.name}`;
    temperature.textContent = `${convertTemperature(data.main.temp, "C")}`;
    weatherDescription.textContent = `Condition: ${data.weather[0].description}`;

    document.getElementById("weather-container").style.display = "none";
    document.getElementById("weather-details").style.display = "flex";
};

// Update Weather Icon
export const updateWeatherIcon = (data) => {
    const iconCode = data.weather[0].icon;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.classList.remove('hidden');
};

// Show city suggestions
export const showSuggestions = (suggestions, callback) => {
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = "";

    if (suggestions.length === 0) {
        suggestionsList.classList.add("hidden");
        return;
    }

    suggestions.forEach(city => {
        const listItem = document.createElement("li");
        listItem.textContent = `${city.name}, ${city.country}`;
        listItem.classList.add("suggestion-list");

        listItem.addEventListener("click", () => {
            callback(city);
            suggestionsList.innerHTML = "";
            suggestionsList.classList.add("hidden");
        });

        suggestionsList.appendChild(listItem);
    });

    suggestionsList.classList.remove("hidden");
};
