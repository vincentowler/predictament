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
        <TextInput
          label="Eye color"
          name="eyeColor"
          autocomplete="off"
          id="eyeColor"
          value="brown"
          onChange={onChange}
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
                <Modal.Title>
                  Consent to Participate in an Online Research Study
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>
                  <strong>
                    <h2>Project Title: Cornell Expectations Study</h2>
                  </strong>
                </p>
                <p>
                  We are asking you to participate in an academic not-for-profit
                  research study. This form is designed to give you information
                  about this study. We will describe this study to you and
                  answer any of your questions.
                </p>
                <p>
                  What the study is about: The purpose of this study is to learn
                  about people’s expectations regarding education, the labor
                  market, and quality of life. What we will ask you to do: This
                  study involves responding to a background survey (5 minutes)
                  participating making 30 predictions about anonymous workers in
                  the labor force. This study should take about 30 minutes to
                  complete.
                </p>
                <h4>Risks and discomfort:</h4> The primary risk associated with
                this study is a possible invasion of your privacy. Though every
                reasonable effort has been taken, confidentiality during actual
                Internet communication procedures cannot be guaranteed.
                <h4>Benefits:</h4> You may find participation in the prediction
                tournament a useful introspective exercise.
                <h4>Compensation:</h4> You will receive $0.50 for completing the
                background survey and prediction tournament. You will also
                receive up to $0.05 for each of the 30 profiles you are asked to
                make predictions about, based on the accuracy of your
                predictions. You will receive at least $0.50 for completing the
                study and could earn up to $1.50 in bonus payments.
                <h4>Your information will be confidential:</h4> We will make
                every reasonable effort to keep your information private. We
                will not collect or share any identifying information about you
                including your name, phone number, email, or any other
                information that will make it possible to identify you. However,
                no guarantees can be made regarding the interception of data
                sent via the Internet by any third parties.
                <h4>Taking part is voluntary:</h4> Taking part in this study is
                completely voluntary. You may skip any questions that you do not
                want to answer on the quiz or survey. If you choose to skip
                survey and quiz questions or discontinue the lecture, it will
                not affect your current or future relationship with Cornell
                University. If you decide to take part, you are free to withdraw
                at any time. However, you will only be compensated once you have
                fully completed the survey and prediction tournament questions.
                <h4>If you have questions:</h4> The researchers conducting this
                study is Jeffrey Swigert and Mike Lovenheim. Please direct any
                questions to Jeff Swigert at jms858@cornell.edu or 435-865-8239.
                If you have any questions or concerns regarding your rights as a
                subject in this study, you may contact the Institutional Review
                Board (IRB) at 607-255-5138 or access their website at
                http://www.irb.cornell.edu. You may also report your concerns or
                complaints anonymously through www.hotline.cornell.edu or by
                calling toll free at 1-866-293-3077. Ethicspoint is an
                independent organization that serves as a liaison between the
                University and the person bringing the complaint so that
                anonymity can be ensured.
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
