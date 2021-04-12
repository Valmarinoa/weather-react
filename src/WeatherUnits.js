import React, { useState } from "react";

export default function WeatherUnits(props) {
  return (
    <div className="WeatherUnits">
      <span id="temp">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
