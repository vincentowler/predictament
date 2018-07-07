import React from "react";
import "./Slider.css";

const Slider = ({ max, label, value, onChange }) => (
  <div>
    <input
      type="range"
      className="slider"
      onInput={onChange}
      step="1"
      orient="vertical"
      min="0"
      value={value}
      max={max}
    />
    {label}
  </div>
);

export default Slider;
