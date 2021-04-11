import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");
  function showFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherUnits">
        <span id="temp">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFah} id="fahrenheit">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnits">
        <span id="temp">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCel} id="centigrados">
            °C{" "}
          </a>
          |°F
        </span>
      </div>
    );
  }
}
