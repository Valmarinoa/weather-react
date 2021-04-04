import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./Header.css";

export default function Header() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`${city}`);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      cityName: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Header">
        <div class="animate__animated animate__slideInDown">
          <form onSubmit={handleSubmit}>
            <input
              id="search-input"
              type="text"
              placeholder="city"
              autofocus="on"
              onChange={updateCity}
            />
            <button type="button">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </form>
        </div>
        <h1>
          {" "}
          {message} {weatherData.cityName}
        </h1>
        <il>
          <FormattedDate date={weatherData.date} />
        </il>
        <div className="Comment">{weatherData.description}</div>
        <Temperature
          temperature={Math.round(weatherData.temperature)}
          wind={weatherData.wind}
          humidity={weatherData.humidity}
        />
        <br />
        <Forecast />
      </div>
    );
  } else {
    let city = "Medellin";
    const apiKey = "512154c45d8dece1e43e4befea864fb6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading..";
  }
}
