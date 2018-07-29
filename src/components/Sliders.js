import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Slider from "./Slider";

const Sliders = ({ scenario, options, onChange }) => (
  <div
    style={{
      overflow: "scroll",
      marginLeft: 0
    }}
  >
    <ul
      style={{
        listStyleType: "none",
        textAlign: "center",
        whiteSpace: "nowrap",
        padding: 0
      }}
    >
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
