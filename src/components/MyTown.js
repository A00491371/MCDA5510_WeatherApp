import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyTown.css";

function MyTown() {
  const [weather, setWeather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const city = "Halifax";

  useEffect(() => {
    const lat = 44.6313869;
    const lon = -63.5781727;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4085756f61efae390947e172719ddccf`;
    axios
      .get(apiUrl)
      .then((res) => setWeather(res.data))
      .catch((err) => console.error(err));
  }, []);

  const getTemperature = (celsius) => {
    if (weather) {
            const tempKelvin = weather.main.temp;
            if (isCelsius) {
                const tempCelsius = tempKelvin - 273.15;
                return tempCelsius.toFixed(2);
            }
            else {
                const tempFahrenheit = ((tempKelvin - 273.15) * 9 / 5) + 32;
                return tempFahrenheit.toFixed(2);
            }
        }
  };

  const getWeatherImage = (temp) => {
     if (!weather) return;
      const tempCelsius = weather.main.temp - 273.15;
      if (tempCelsius <= 10) return 'cold.png';
      else if (tempCelsius > 10 && tempCelsius <= 19) return 'mild.png';
      else return 'sunny.png';
  };

  const temp = getTemperature(isCelsius);

  return (
    <div className="weather-container">
    <div className="town-title">My Town - Halifax, NS</div>
    <div className="town-subtitle">The City of Trees and Ocean Breezes</div>
    <div className="town-images">
      <img src="/halifax.jpg" alt="Halifax" className="town-img" />
      <img src="/halifaxnight.jpg" alt="Halifax" className="town-img" />
    </div>
      {weather ? (
        <div>
          <h1>
            I currently live in {city}, located on the beautiful Atlantic coast
            of North America.
          </h1>

          <div className="temp-display">
            <img
              src={getWeatherImage(temp)}
              alt="Weather Icon"
              className="weather-icon"
            />
            <span className="temperature">{temp}</span>
            <div className="unit-toggle">
              <span
                className={`unit ${isCelsius ? "active" : ""}`}
                onClick={() => setIsCelsius(true)}
              >
                °C
              </span>
              <span
                className={`unit ${!isCelsius ? "active" : ""}`}
                onClick={() => setIsCelsius(false)}
              >
                °F
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default MyTown;