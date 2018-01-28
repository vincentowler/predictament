import React from "react";
import PropTypes from "prop-types";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import HelpBlock from "react-bootstrap/lib/HelpBlock";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

const TextInput = ({
  label,
  name,
  id,
  type,
  onChange,
  value,
  displayLabel,
  helpBlock,
  placeholder,
  required,
  className,
  error
}) => {
  const labelClass = required ? "control-label--required" : "";

  return (
    <FormGroup
      controlId={id}
      className={className}
      validationState={error && error.length > 0 ? "error" : null}
    >
      {displayLabel && (
        <ControlLabel className={labelClass}>{label}</ControlLabel>
      )}
      <FormControl
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <HelpBlock>{error || helpBlock}</HelpBlock>
    </FormGroup>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  displayLabel: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  description: PropTypes.string
};

TextInput.defaultProps = {
  type: "text",
  displayLabel: true
};

export default TextInput;
