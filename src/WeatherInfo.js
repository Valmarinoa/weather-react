import React from "react";

export default function weatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
    </div>
  );
}
