import React from "react";
import ReactDOM from "react-dom";
import { Icon } from "./iconDocs/icon";
import { Text } from "./text";
import { App } from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <nav className="navbar">
      <div className="brand-title">
        <Text size="1.75rem"> MONOPOLY COUNTER </Text>
        <Icon name="dice" size="2rem" color="white" />
      </div>
    </nav>
    <App />
  </React.StrictMode>,
  rootElement
);
