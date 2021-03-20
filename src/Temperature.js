import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    temperature: 24,
    wind: 7,
    humidity: 26,
  };
  return (
    <div className="Temperature">
      <div className="clearfix weather-temperature">
        <ul id="temperatureMain">
          <il>
            <span id="temp">{weatherData.temperature}</span>
            <span className="units">
              <a href="/" id="centigrados">
                °C{" "}
              </a>
              |
              <a href="/" id="fahrenheit">
                °F
              </a>
            </span>
          </il>
          <ul className="Extras">
            <il>
              <div className="humidity">
                <i className="fas fa-Coffee"></i>
                <span id="humidity-input">{weatherData.humidity}</span>%
              </div>
            </il>
            <il>
              <div className="wind">
                <i className="fas fa-wind"></i>
                <span id="wind-input">{weatherData.wind}</span>km/h
              </div>
            </il>
          </ul>
        </ul>
      </div>
    </div>
  );
}
