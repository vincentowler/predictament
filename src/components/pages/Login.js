import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Checkbox from "react-bootstrap/lib/Checkbox";
import { isEmpty } from "../../utils/objectUtils";
import { sendDataToNetlify } from "../../utils/netlify";

class Login extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    workerId: PropTypes.string,
    email: PropTypes.string.isRequired,
    acceptedTerms: PropTypes.bool.isRequired
  };

  state = {
    showTerms: false,
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = {};

    if (!this.props.workerId) {
      errors.workerId = "Please enter your MTurk Worker ID.";
    }

    if (!this.props.acceptedTerms) {
      errors.acceptedTerms = "Please accept the terms to continue.";
    }

    this.setState({ errors });

    if (isEmpty(errors)) {
      sendDataToNetlify("login", {
        workerId: this.props.workerId,
        email: this.props.email
      });
      this.props.showPage(2);
    }
  };

  toggleTerms = () => {
    this.setState(state => {
      return { showTerms: !state.showTerms };
    });
  };

  render() {
    return (
      <div className={this.props.visible ? "" : "hidden"}>
        <h1>Cornell University Expectations Study</h1>
        {/* TODO: Add honeypot for anti-spam? */}
        <form
          name="login"
          onSubmit={this.handleSubmit}
          method="post"
          data-netlify="true"
        >
          {/* TODO: Can I look this up to validate? */}
          <TextInput
            label="MTurk Worker ID"
            name="workerId"
            id="workerId"
            value={this.props.workerId}
            onChange={this.props.onChange}
            error={this.state.errors.workerId}
            required
          />
          <TextInput
            label="Email address"
            name="email"
            id="email"
            value={this.props.email}
            onChange={this.props.onChange}
            helpBlock="Optional. Enter if you want a report with your results. No spam."
            error={this.state.errors.email}
          />

          <div
            className={
              this.state.errors.acceptedTerms ? "field has-error" : "field"
            }
          >
            <Checkbox
              id="acceptedTerms"
              onChange={this.props.onChange}
              name="acceptedTerms"
              checked={this.props.acceptedTerms}
            >
              {" "}
              I accept the{" "}
              <a href="#terms-and-conditions" onClick={this.toggleTerms}>
                terms and conditions
              </a>
            </Checkbox>
            {this.state.errors.acceptedTerms && (
              <span className="help-block">
                You must accept the terms to continue.
              </span>
            )}
            <div className="static-modal">
              <Modal show={this.state.showTerms}>
                <Modal.Header>
                  <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
        </form>
      </div>
    );
  }
}

export default Login;
