import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./Header.css";

export default function Header(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
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
    const apiKey = "53f42d95adc1fddd6c6ecaa1958901d0";
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
        <div className="animate__animated animate__slideInDown">
          <form onSubmit={handleSubmit}>
            <input
              id="search-input"
              type="text"
              placeholder="city"
              autofocus="on"
              onChange={updateCity}
            />
          </form>
        </div>
        <h1>
          <WeatherInfo data={weatherData} />
        </h1>
        <il>
          <span>
            <FormattedDate date={weatherData.date} />
          </span>
        </il>
        <div className="Comment">{weatherData.description}</div>
        <Temperature
          temperature={Math.round(weatherData.temperature)}
          wind={weatherData.wind}
          humidity={weatherData.humidity}
        />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "loading..";
  }
}
