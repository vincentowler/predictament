import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Checkbox from "react-bootstrap/lib/Checkbox";

const LoginForm = ({
  handleSubmit,
  workerId,
  email,
  onChange,
  showTerms,
  acceptedTerms,
  toggleTerms,
  errors,
  visible
}) => (
  <div className={visible ? null : "hidden"}>
    {/* TODO: Can I look this up to validate? */}
    <TextInput
      label="MTurk Worker ID"
      name="workerId"
      id="workerId"
      value={workerId}
      onChange={onChange}
      error={errors.workerId}
      required
    />
    <TextInput
      label="Email address"
      name="email"
      id="email"
      value={email}
      onChange={onChange}
      helpBlock="Optional. Enter if you want a report with your results. No spam."
      error={errors.email}
    />

    <div className={errors.acceptedTerms ? "field has-error" : "field"}>
      <Checkbox
        id="acceptedTerms"
        onChange={onChange}
        name="acceptedTerms"
        checked={acceptedTerms}
      >
        {" "}
        I accept the{" "}
        <a href="#terms-and-conditions" onClick={toggleTerms}>
          terms and conditions
        </a>
      </Checkbox>
      {errors.acceptedTerms && (
        <span className="help-block">
          You must accept the terms to continue.
        </span>
      )}
      <div className="static-modal">
        <Modal show={showTerms}>
          <Modal.Header>
            <Modal.Title>Terms and Conditions</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Modal.Body>

          <Modal.Footer>
            <Button bsStyle="primary" onClick={toggleTerms}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
    <div>
      <Button
        className="btn btn-primary center-block"
        bsSize="lg"
        type="submit"
      >
        Begin
      </Button>
      {/* This field is necessary so we can send a bool to Netlify that is used to filter out incomplete records. */}
      <input type="text" className="hidden" id="complete" name="complete" />
    </div>
  </div>
);

LoginForm.propTypes = {
  visible: PropTypes.bool,
  workerId: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  acceptedTerms: PropTypes.bool,
  showTerms: PropTypes.bool,
  toggleTerms: PropTypes.func
};

LoginForm.defaultProps = {
  visible: true
};

export default LoginForm;
