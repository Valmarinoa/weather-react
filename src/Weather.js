import React from "react";
import Loader from "react-loader-spinner";

export default function Weather() {
  return (
    <div>
      <Loader
        type="Puff"
        color="#80DED9"
        height={100}
        width={100}
        timeout={3000}
      />
      <h2>Helloooooo {city}</h2>
    </div>
  );
}
