const apiKey = "API_KEY";

/**
 * Converts temperature from Kelvin to Celsius or Fahrenheit.
 * @param {number} temp - Temperature in Kelvin.
 * @param {string} unit - Unit to convert to ("C" for Celsius, "F" for Fahrenheit).
 * @returns {string} - Converted temperature with unit.
 */
export const convertTemperature = (temp, unit = "C") => {
    return unit === "C"
        ? `${(temp - 273.15).toFixed(1)} °C`
        : `${((temp - 273.15) * 9 / 5 + 32).toFixed(1)} °F`;
};

/**
 * Fetches weather data based on latitude and longitude.
 * @param {number} lat - Latitude of the location.
 * @param {number} lon - Longitude of the location.
 * @returns {Object|null} - Weather data object or null if an error occurs.
 */
export const fetchWeatherData = async (lat, lon) => {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const response = await fetch(apiUrl);

        if (!response.ok) throw new Error("Location not found");

        const data = await response.json();
        return data;
    } catch (error) {
        alert(error.message);
        return null;
    }
};

/**
 * Fetches city suggestions based on user input.
 * @param {string} query - City name input by the user.
 * @returns {Array} - List of matching city suggestions.
 */
export const fetchCitySuggestions = async (query) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`);
        return response.ok ? await response.json() : [];
    } catch (error) {
        console.error("Error fetching cities:", error);
        return [];
    }
};
