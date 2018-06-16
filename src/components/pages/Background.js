import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "../../utils/objectUtils";
import { validateBackground } from "../../utils/validation";
import BackgroundForm from "../BackgroundForm";
import { sendDataToNetlify } from "../../utils/netlify";
import LoginForm from "../LoginForm";

class Background extends Component {
  static propTypes = {
    background: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    showPage: PropTypes.func.isRequired,
    earningsOptions: PropTypes.array.isRequired,
    satisfactionOptions: PropTypes.array.isRequired,
    workerId: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  };

  state = {
    errors: {}
  };

  handleSubmit = event => {
    event.preventDefault();
    const errors = validateBackground(this.props.background);
    this.setState({ errors });
    if (isEmpty(errors)) {
      const data = {
        workerId: this.props.workerId,
        acceptedTerms: true,
        complete: "N",
        email: this.props.email,
        ...this.props.background
      };
      debugger;

      sendDataToNetlify(data);
      this.props.showPage(3);
    } else {
      window.scrollTo(0, 0);
    }
  };

  render() {
    return (
      <form
        method="post"
        name="tournament"
        data-netlify="true"
        onSubmit={this.handleSubmit}
      >
        <h2>Background</h2>
        <BackgroundForm
          {...this.props}
          errors={this.state.errors}
          errorsExist={!isEmpty(this.state.errors)}
        />
        {/* Only here so the data will be sent to Netlify */}
        <LoginForm
          errors={{}}
          acceptedTerms={true}
          {...this.props}
          visible={false}
          onChange={() => {}}
        />
      </form>
    );
  }
}

export default Background;
