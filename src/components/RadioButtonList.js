import React from "react";
import PropTypes from "prop-types";
import FormGroup from "react-bootstrap/lib/FormGroup";
import Radio from "react-bootstrap/lib/Radio";

const RadioButtonList = ({
  label,
  onChange,
  options,
  name,
  error,
  selectedValue
}) => (
  <div
    style={{ paddingBottom: 20 }}
    className={error ? "field has-error" : "field"}
  >
    <label>{label}</label>

    <FormGroup>
      {options.map(({ label, value }) => {
        return (
          <Radio
            onChange={onChange}
            checked={value === selectedValue}
            key={value}
            name={name}
            value={value}
          >
            {label}
          </Radio>
        );
      })}
    </FormGroup>
    <span className="help-block">{error}</span>
  </div>
);

RadioButtonList.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default RadioButtonList;
