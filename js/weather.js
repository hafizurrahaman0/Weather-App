const apiKey = "API_KEY";

// Convert Kelvin to Celsius
export const convertTemperature = (temp, unit = "C") => {
    return unit === "C"
        ? `${(temp - 273.15).toFixed(1)} °C`
        : `${((temp - 273.15) * 9 / 5 + 32).toFixed(1)} °F`;
};

// Fetch weather data
export const fetchWeatherData = async (lat, lon) => {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const response = await fetch(apiUrl);

        if (!response.ok) throw new Error("Location not found");

        const data = await response.json();
        return data; // Return data instead of displaying it here
    } catch (error) {
        alert(error.message);
        return null;
    }
};

// Get city suggestions
export const fetchCitySuggestions = async (query) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`);
        return response.ok ? await response.json() : [];
    } catch (error) {
        console.error("Error fetching cities:", error);
        return [];
    }
};
