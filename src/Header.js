import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";
import "./Header.css";

export default function Header(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "512154c45d8dece1e43e4befea864fb6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
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
          <WeatherInfo data={weatherData} />
        </h1>
        <il>
          <span className="date-icon">
            <WeatherIcon
              code={weatherData.icon}
              alt={weatherData.description}
            />
            <FormattedDate date={weatherData.date} />
          </span>
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
    search();
    return "loading..";
  }
}
