import React from "react";
import "./WeatherInfo.css";

export default function weatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="animate__animated animate__slideInDown">
        <h1>{props.data.city}</h1>
      </div>
    </div>
  );
}
