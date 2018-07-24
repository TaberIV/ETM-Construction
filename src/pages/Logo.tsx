import React, { Component } from "react";

export default class Logo extends Component {
  public render() {
    return (
      <svg viewBox="0 0 240 80" className="logo">
        <text x="0" y="10">
          ETM
        </text>
        <rect
          x="21.1"
          y=".9"
          width="7.2"
          height="8.1"
          fill="black"
          fillOpacity="0.4"
        />
      </svg>
    );
  }
}
