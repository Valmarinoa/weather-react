import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import axios from "axios";

export default function CurrentLocation() {
  const [loaded, setLoaded] = useState({ ready: false });

  function showTemp(response) {
    setLoaded({
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

  function showMyPosition(position) {
    let lat = position.coord.latitude;
    let lon = position.coord.longitude;
    let apiKey = "53f42d95adc1fddd6c6ecaa1958901d0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }

  function currentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showMyPosition);
  }

  if (loaded.ready) {
    return (
      <div>
        <h1>
          <WeatherInfo data={loaded} />
        </h1>
        <il>
          <span>
            <FormattedDate date={loaded.date} />
          </span>
        </il>
        <div className="Comment">{loaded.description}</div>
        <Temperature
          temperature={Math.round(loaded.temperature)}
          wind={loaded.wind}
          humidity={loaded.humidity}
        />
        <Forecast coordinates={loaded.coordinates} />
      </div>
    );
  } else {
    return (
      <div className="currentLocButton">
        <button type="button" onClick={currentPosition}>
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </div>
    );
  }
}
