# ForeCastly - Weather Application

ForeCastly is a modern, responsive weather application built with vanilla JavaScript that provides real-time weather information using the OpenWeather API. The application features a clean, glassmorphic UI design with city search autocomplete functionality.

![ForeCastly Weather App](./assets/images/weather-app.png)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [How It Works](#how-it-works)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Contributing](#contributing)

## Features
- Real-time weather data display
- City search with autocomplete suggestions
- Responsive glassmorphic design
- Temperature display in Celsius
- Weather condition descriptions
- Weather icons based on current conditions
- Debounced search for optimal performance

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Tailwind CSS
- OpenWeather API
- Google Fonts (Poppins)

## Project Structure
```
weather-app/
├── assets/
│   └── images/
│       └── weather-app.png
├── css/
│   ├── input.css
│   ├── output.css
│   └── styles.css
├── js/
│   ├── events.js
│   ├── main.js
│   ├── ui.js
│   └── weather.js
└── index.html
```

## Setup and Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-app
```

2. Set up your API key:
   - Sign up at [OpenWeather](https://openweathermap.org/api)
   - Get your API key
   - Replace the `apiKey` in `js/weather.js` with your key:
```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

3. Install dependencies (if using Tailwind CSS):
```bash
npm install
```

4. Run the project:
   - Use a local development server (e.g., Live Server in VS Code)
   - Open `index.html` in your browser

## How It Works

### Core Functionality

1. **City Search and Suggestions**
   - Users can type a city name in the search input
   - The app provides autocomplete suggestions using the OpenWeather Geocoding API
   - Suggestions are debounced (300ms) to prevent excessive API calls

2. **Weather Data Retrieval**
   - Once a city is selected, the app fetches weather data using latitude and longitude
   - Displays temperature, weather conditions, and corresponding weather icons

3. **UI Updates**
   - Weather information is displayed in a separate card view
   - Smooth transitions between search and results views
   - Responsive design that works on all device sizes

### Code Structure

1. **main.js**
   - Entry point of the application
   - Imports and initializes event handlers

2. **events.js**
   - Handles all event listeners
   - Manages user interactions
   - Controls the flow between UI and data operations

3. **weather.js**
   - Contains API integration logic
   - Handles weather data fetching
   - Provides temperature conversion utilities

4. **ui.js**
   - Manages DOM updates
   - Controls the display of weather information
   - Handles suggestion list rendering

## API Integration

The app uses two main OpenWeather API endpoints:

1. **Geocoding API**
```javascript
https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}
```

2. **Weather API**
```javascript
https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}
```

## Styling

The application uses a combination of Tailwind CSS and custom CSS:

1. **Glassmorphic Effect**
   - Implemented using backdrop-filter and rgba backgrounds
   - Provides a modern, translucent appearance

2. **Responsive Design**
   - Flexbox layout
   - Mobile-first approach
   - Adaptive sizing using viewport units

3. **Custom Variables**
   - Color scheme defined in CSS variables
   - Easy theme customization

## Assets Credits

- <a href="https://www.flaticon.com/free-icons/weather-app" title="weather app icons">Weather app icons created by Edi Prast - Flaticon</a>


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

For any additional questions or concerns, please open an issue in the repository.