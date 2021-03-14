import React from "react";
import ReactDOM from "react-dom";
import Section from "./Section";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Section />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
