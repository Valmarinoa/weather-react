import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="clearfix weather-temperature">
        <ul id="temperatureMain">
          <il>
            <span id="temp">{props.temperature}</span>
            <span className="units">
              <a href="/" id="centigrados">
                °C{" "}
              </a>
              |
              <a href="/" id="fahrenheit">
                °F
              </a>
            </span>

            <ul>
              <span className="Extras">
                <il>
                  <div className="humidity">
                    <i class="fas fa-tint"></i>
                    <span id="humidity-input"> {props.humidity} %</span>
                  </div>
                </il>
                <il>
                  <div className="wind">
                    <i className="fas fa-wind"></i>
                    <span id="wind-input"> {Math.round(props.wind)} km/h</span>
                  </div>
                </il>
              </span>
            </ul>
          </il>
        </ul>
      </div>
    </div>
  );
}
