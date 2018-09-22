import React from "react";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import HelpBlock from "react-bootstrap/lib/HelpBlock";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

const SelectInput = ({
  id,
  name,
  label,
  options,
  error,
  helpBlock,
  onChange,
  displayLabel,
  placeholder,
  value,
  className
}) => (
  <FormGroup
    controlId={id}
    className={className}
    validationState={error && error.length > 0 ? "error" : null}
  >
    {displayLabel && <ControlLabel>{label}</ControlLabel>}
    <FormControl
      onChange={onChange}
      value={value}
      name={name}
      componentClass="select"
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
      <option value="other">Other</option>
    </FormControl>
    <HelpBlock>{error || helpBlock}</HelpBlock>
  </FormGroup>
);

export default SelectInput;
