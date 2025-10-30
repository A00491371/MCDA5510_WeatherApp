# 🌦️ Weather App – Soundarya Venkataraman

---

Website Link: https://soundarya-weatherapp.netlify.app/

---

## Overview
A React-based Weather App with two pages:
- **About Me:** Introduction and background.
- **My Town:** Displays real-time weather data for Halifax using the OpenWeatherMap API.

---

## Features

| Feature | Description |
|----------|-------------|
| Live Weather Data | Fetches current weather from OpenWeatherMap API |
| Temperature Toggle | Switch between Celsius (°C) and Fahrenheit (°F) |
| Dynamic Weather Icons | Displays `cold.png`, `mild.png`, or `sunny.png` |
| Routing | Uses `react-router-dom` for navigation |
| Responsive UI | CSS Flexbox for modern layout |

---

## Technologies Used

| Category | Tools |
|-----------|--------|
| **Frontend Framework** | React.js |
| **API Handling** | Axios |
| **Routing** | React Router DOM |
| **API Source** | OpenWeatherMap |
| **Styling** | CSS3 |
| **Hosting** | Netlify |

---

## API Configuration

The app uses OpenWeatherMap API for weather data.

Go to https://openweathermap.org/api

Sign up and generate your API key

Open src/components/MyTown.js and replace the existing key:
 
```bash
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY`;
```

---

## Weather Icon Logic

Weather icons are dynamically selected based on the Celsius temperature:

| Temperature (°C) | Icon Displayed |
|------------------|----------------|
| ≤ 10°C | 🧣 cold.png |
| 11°C – 19°C |	🌤️ mild.png |
| ≥ 20°C | ☀️ sunny.png |

🔁 When switching to Fahrenheit, the same image is displayed as it represents the same real-world temperature.

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <your-repo-link>
   cd my-app
   ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the app:
    ```bash
    npm start
    ```

Visit http://localhost:3000
 in your browser.

 ---

## Deployment

Build and deploy:

```bash
npm run build
```

---

## Author

Name: Soundarya Venkataraman

A# Number: A00491371

Saint Mary's University

----
