import React from "react";
import "./Forecast.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

export default function Forecast() {
  let forecastIcons = {
    icon: <i className="fas fa-cloud-sun"></i>,
    time: "12:00",
    minTemp: 20,
    maxTemp: 25,
  };
  return (
    <div className="Forecast">
      <div className="row weather-forecast" id="forecast-row">
        <div className="col-12 col-md-2">
          <div class="card">
            <div className="card-body">
              <h5 className="card-title">{forecastIcons.time}</h5>
              <h6>{forecastIcons.icon}</h6>
              <p className="card-text">
                {forecastIcons.minTemp}°| {forecastIcons.maxTemp}°
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
