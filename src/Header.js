import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  let headerData = {
    date: "Friday 11:34",
    comment: "Clear skies",
  };
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`${city}`);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Header">
      <div class="animate__animated animate__slideInDown">
        <form onSubmit={handleSubmit}>
          <input
            id="search-input"
            type="text"
            placeholder="city"
            autofocus="on"
            onChange={updateCity}
          />
          <button type="button">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </form>
      </div>
      <h1> {message} </h1>
      <il>{headerData.date}</il>
      <div className="Comment">{headerData.comment}</div>
    </div>
  );
}
