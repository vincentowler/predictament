import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Checkbox from "react-bootstrap/lib/Checkbox";
import { isEmpty } from "../../utils/objectUtils";
import LoginForm from "../LoginForm";
import { validateLogin } from "../../utils/validation";

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
    const errors = validateLogin(workerId, acceptedTerms);
    this.setState({ errors });

    if (isEmpty(errors)) {
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
        <form name="login" onSubmit={this.handleSubmit} method="post">
          <LoginForm {...this.props} />
        </form>
      </div>
    );
  }
}

export default Login;
