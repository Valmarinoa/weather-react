import React from "react";
import "./Section.css";
import Header from "./Header";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Repository from "./Repository";

export default function Section() {
  return (
    <div className="Section">
      <div className="container">
        <Header />
        <Temperature />
        <br />
        <Forecast />
        <Repository />
      </div>
    </div>
  );
}
