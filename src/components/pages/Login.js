import React from "react";
import PropTypes from "prop-types";
import { sendDataToNetlify } from "../../utils/netlify";
import TextInput from "../TextInput";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Checkbox from "react-bootstrap/lib/Checkbox";
import { isEmpty } from "../../utils/objectUtils";
import LoginForm from "../LoginForm";
import { validateLogin } from "../../utils/validation";

class Login extends React.Component {
  static propTypes = {
    workerId: PropTypes.string,
    email: PropTypes.string.isRequired,
    acceptedTerms: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  };

  state = {
    showTerms: false,
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = validateLogin(workerId, acceptedTerms);
    this.setState({ errors });

    if (isEmpty(errors)) {
      const data = {
        workerId: this.props.workerId,
        acceptedTerms: true,
        email: this.props.email
      };

      sendDataToNetlify(data);
      this.props.showPage(2);
    }
  };

  toggleTerms = e => {
    e.preventDefault();
    this.setState(state => {
      return { showTerms: !state.showTerms };
    });
  };

  render() {
    return (
      <div>
        <h1>Cornell University Expectations Study</h1>
        <form
          name="tournament"
          method="post"
          data-netlify="true"
          onSubmit={this.handleSubmit}
        >
          <LoginForm
            toggleTerms={this.toggleTerms}
            {...this.props}
            {...this.state}
          />
        </form>
      </div>
    );
  }
}

export default Login;
