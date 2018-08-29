import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Checkbox from "react-bootstrap/lib/Checkbox";

class Login extends React.Component {
  static propTypes = {
    userId: PropTypes.string.isRequired,
    workerId: PropTypes.string,
    email: PropTypes.string.isRequired,
    acceptedTerms: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  };

  state = {
    showTerms: false
  };

  toggleTerms = e => {
    e.preventDefault();
    this.setState(state => {
      return { showTerms: !state.showTerms };
    });
  };

  render() {
    const {
      userId,
      workerId,
      errors,
      email,
      onChange,
      acceptedTerms,
      visible
    } = this.props;
    const { showTerms } = this.state;
    return (
      <div className={visible ? null : "hidden"}>
        <h1>Cornell University Expectations Study</h1>
        {errors.login && <p style={{ color: "#a94442" }}>{errors.login}</p>}
        {/* TODO: Can I look this up to validate? */}
        <TextInput
          label="MTurk Worker ID"
          name="workerId"
          id="workerId"
          value={workerId}
          autocomplete="off"
          onChange={onChange}
          error={errors.workerId}
        />
        <TextInput
          label="Email address"
          name="email"
          autocomplete="off"
          id="email"
          value={email}
          onChange={onChange}
          helpBlock="Don't worry. No spam. We'll send your results here."
          error={errors.email}
        />
        {/* This is here so we can send it to Netlify */}
        <TextInput
          label="User ID"
          name="userId"
          id="userId"
          value={userId}
          onChange={() => {}}
          className="hidden"
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
            <a href="#terms-and-conditions" onClick={this.toggleTerms}>
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Modal.Body>

              <Modal.Footer>
                <Button bsStyle="primary" onClick={this.toggleTerms}>
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
        </div>
      </div>
    );
  }
}

export default Login;
