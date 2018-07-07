import React from "react";
import "./Slider.css";

const Slider = ({ max, option, onChange }) => {
  return (
    <span>
      <input
        type="range"
        className="slider"
        onChange={event => onChange(event, option)}
        step="1"
        orient="vertical"
        min="0"
        value={option.tokens}
        max={max}
      />
      {option.label}
    </span>
  );
};

export default Slider;
