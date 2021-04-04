import React from "react";
import "./Section.css";
import Header from "./Header";
import Repository from "./Repository";

export default function Section() {
  return (
    <div className="Section">
      <div className="container">
        <Header defaultCity="Paris" />
        <Repository />
      </div>
    </div>
  );
}
