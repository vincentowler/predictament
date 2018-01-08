import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import RadioButtonList from "../RadioButtonList";
import Button from "react-bootstrap/lib/Button";
import { isEmpty } from "../../utils/objectUtils";
import { validateBackground } from "../../utils/validation";
import BackgroundForm from "../BackgroundForm";

class Background extends Component {
  static propTypes = {
    background: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    showPage: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    earningsOptions: PropTypes.array.isRequired,
    satisfactionOptions: PropTypes.array.isRequired
  };

  state = {
    errors: {}
  };

  handleSubmit = event => {
    event.preventDefault();
    const errors = validateBackground(this.props.background);
    this.setState({ errors });
    if (isEmpty(errors)) {
      this.props.showPage(3);
    }
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={this.props.visible ? null : "hidden"}
      >
        <h2>Background</h2>
        <BackgroundForm {...this.props} errors={this.state.errors} />
      </form>
    );
  }
}

export default Background;
