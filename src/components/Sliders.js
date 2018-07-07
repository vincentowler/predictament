import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Slider from "./Slider";

const Sliders = ({ scenario, options, onChange }) => (
  <div>
    <h3>{scenario.topic}</h3>
    <ul style={{ listStyleType: "none", textAlign: "center" }}>
      {options.map(option => {
        return (
          <li key={option.label} style={{ display: "inline-block" }}>
            <Slider
              max={scenario.totalTokens}
              option={option}
              onChange={onChange}
            />
          </li>
        );
      })}
    </ul>
  </div>
);

Sliders.propTypes = {
  scenario: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Sliders;
