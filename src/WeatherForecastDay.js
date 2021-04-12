import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="Forecast">
      <div className="row weather-forecast" id="forecast-row">
        <div className="col-12 col-md-2">
          <div class="card">
            <div className="card-body">
              <h5 className="card-title">{props.data.dt}</h5>
              <h6>
                <WeatherIcon code={props.data.weather[0].icon} size={32} />
              </h6>
              <p className="card-text">
                {maxTemperature()}°| {minTemperature()}°
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
