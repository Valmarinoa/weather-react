import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      ` The weather in ${response.data.name} is ${response.data.main.temp}C`
    );
  }
  let apiKey = "512154c45d8dece1e43e4befea864fb6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
      <h2>Helloooooo {props.city}</h2>
    </div>
  );
}
