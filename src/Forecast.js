import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import React, { useState } from "react";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return <WeatherForecastDay data={forecast[0]} />;
  } else {
    let apiKey = "53f42d95adc1fddd6c6ecaa1958901d0";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
