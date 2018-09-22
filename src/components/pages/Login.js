import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Checkbox from "react-bootstrap/lib/Checkbox";
import RadioButtonList from "../RadioButtonList";
import SelectInput from "../SelectInput";

class Login extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    backgroundQuestionIds: PropTypes.array.isRequired,
    showPage: PropTypes.func.isRequired,
    earningsOptions: PropTypes.array.isRequired,
    satisfactionOptions: PropTypes.array.isRequired
  };

  state = {
    showTerms: false
  };

  // Filter out any options selected in the sibling dropdowns
  // so the user can only select a given option once.
  getFilteredEarningsOptions(optionNumber) {
    let options = [...this.props.earningsOptions];
    const { user } = this.props;
    if (user.earningsDesiredData1 && optionNumber !== 1) {
      options = options.filter(o => o.value !== user.earningsDesiredData1);
    }
    if (user.earningsDesiredData2 && optionNumber !== 2) {
      options = options.filter(o => o.value !== user.earningsDesiredData2);
    }
    if (user.earningsDesiredData3 && optionNumber !== 3) {
      options = options.filter(o => o.value !== user.earningsDesiredData3);
    }
    return options;
  }

  // Filter out any options selected in the sibling dropdowns
  // so the user can only select a given option once.
  getFilteredSatisfactionOptions(optionNumber) {
    let options = [...this.props.earningsOptions];
    const { user } = this.props;
    if (user.satisfactionDesiredData1 && optionNumber !== 1) {
      options = options.filter(o => o.value !== user.satisfactionDesiredData1);
    }
    if (user.satisfactionDesiredData2 && optionNumber !== 2) {
      options = options.filter(o => o.value !== user.satisfactionDesiredData2);
    }
    if (user.satisfactionDesiredData3 && optionNumber !== 3) {
      options = options.filter(o => o.value !== user.satisfactionDesiredData3);
    }
    return options;
  }

  questionEnabled = questionId => {
    return this.props.backgroundQuestionIds.includes(questionId);
  };

  toggleTerms = e => {
    e.preventDefault();
    this.setState(state => {
      return { showTerms: !state.showTerms };
    });
  };

  render() {
    const { user, errors, onChange, visible } = this.props;
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
          value={user.workerId}
          autocomplete="off"
          onChange={onChange}
          error={errors.workerId}
        />
        <TextInput
          label="Email address"
          name="email"
          autocomplete="off"
          id="email"
          value={user.email}
          onChange={onChange}
          helpBlock="Don't worry. No spam. We'll send your results here."
          error={errors.email}
        />
        {/* This is here so we can send it to Netlify */}
        <TextInput
          label="User ID"
          name="userId"
          id="userId"
          value={user.userId}
          onChange={() => {}}
          className="hidden"
        />

        {/* These hidden fields are necessary so Netlify can see the form fields to submit */}
        <TextInput
          label="What is your age?"
          id="hiddenage"
          name="age"
          type="number"
          value={user.age}
          onChange={onChange}
          error={errors.age}
          className="hidden"
        />

        <h2>Background</h2>
        <ol>
          {this.questionEnabled(1) && (
            <li>
              <TextInput
                label="What is your age?"
                id="age"
                name="age"
                type="number"
                value={user.age}
                onChange={onChange}
                error={errors.age}
              />
            </li>
          )}

          {this.questionEnabled(2) && (
            <li>
              <RadioButtonList
                selectedValue={user.race}
                label="What is your race?"
                name="race"
                options={[
                  { value: "Black", label: "Black" },
                  { value: "White", label: "White" },
                  { value: "Asian", label: "Asian" },
                  { value: "Other", label: "Other" }
                ]}
                onChange={onChange}
                error={errors.race}
              />
            </li>
          )}
          {this.questionEnabled(3) && (
            <li>
              <RadioButtonList
                selectedValue={user.ethnicity}
                label="What is your ethnicity?"
                name="ethnicity"
                options={[
                  { value: "Hispanic", label: "Hispanic" },
                  { value: "Non-Hispanic", label: "Non-Hispanic" }
                ]}
                onChange={onChange}
                error={errors.ethnicity}
              />
            </li>
          )}
          {this.questionEnabled(4) && (
            <li>
              <RadioButtonList
                selectedValue={user.gender}
                label="What is your gender?"
                name="gender"
                options={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" }
                ]}
                onChange={onChange}
                error={errors.gender}
              />
            </li>
          )}
          {this.questionEnabled(5) && (
            <li>
              <RadioButtonList
                selectedValue={user.education}
                label="What is your highest level of education completed?"
                name="education"
                options={[
                  { value: "High School", label: "High School" },
                  { value: "Bachelors", label: "Bachelors" },
                  { value: "Masters", label: "Masters" },
                  { value: "Doctorate", label: "Doctorate" }
                ]}
                onChange={onChange}
                error={errors.education}
              />
            </li>
          )}
          {this.questionEnabled(6) && (
            <li>
              <TextInput
                label="What is your total annual income in dollars, rounded to the nearest thousand?"
                id="income"
                name="income"
                type="text"
                value={user.income}
                onChange={onChange}
                error={errors.income}
              />
            </li>
          )}
          {this.questionEnabled(7) && (
            <li>
              <TextInput
                label="What is your current industry and occupation?"
                id="industry"
                name="industry"
                type="text"
                value={user.industry}
                onChange={onChange}
                error={errors.industry}
              />
            </li>
          )}
          {this.questionEnabled(8) && (
            <li>
              <TextInput
                label="How many years of experience do you have in your current job?"
                id="yearsJobExperience"
                name="yearsJobExperience"
                type="number"
                value={user.yearsJobExperience}
                onChange={onChange}
                error={errors.yearsJobExperience}
              />
            </li>
          )}
          {this.questionEnabled(9) && (
            <li>
              <div
                style={{ paddingBottom: 20 }}
                className={
                  errors.earningsDesiredData ? "field has-error" : "field"
                }
              >
                <label htmlFor="earningsDesiredData">
                  Suppose you are asked to predict the total annual earnings (in
                  U.S. $) of another person. What 3 things would you want to
                  know about them to make the best guess possible?
                </label>
                <br />
                <SelectInput
                  options={this.getFilteredEarningsOptions(1)}
                  displayLabel={false}
                  id="earningsDesiredData1"
                  name="earningsDesiredData1"
                  error={errors.earningsDesiredData1}
                  value={user.earningsDesiredData1}
                  onChange={onChange}
                  placeholder="Most important factor"
                />
                <br />
                <SelectInput
                  options={this.getFilteredEarningsOptions(2)}
                  displayLabel={false}
                  id="earningsDesiredData2"
                  name="earningsDesiredData2"
                  error={errors.earningsDesiredData2}
                  value={user.earningsDesiredData2}
                  onChange={onChange}
                  placeholder="Second most important factor"
                />
                <br />
                <SelectInput
                  options={this.getFilteredEarningsOptions(3)}
                  displayLabel={false}
                  id="earningsDesiredData3"
                  name="earningsDesiredData3"
                  error={errors.earningsDesiredData3}
                  value={user.earningsDesiredData3}
                  onChange={onChange}
                  placeholder="Third most important factor"
                />
              </div>
              {errors.earningsDesiredData && (
                <span className="help-block">{errors.earningsDesiredData}</span>
              )}
            </li>
          )}
          {this.questionEnabled(10) && (
            <li>
              <label htmlFor="satisfactionDesiredData">
                Suppose you are asked to predict the overall life satisfaction
                of another person. What 3 things would you want to know about
                them to make the best guess possible?
              </label>
              <br />
              <SelectInput
                options={this.getFilteredSatisfactionOptions(1)}
                displayLabel={false}
                id="satisfactionDesiredData1"
                name="satisfactionDesiredData1"
                error={errors.satisfactionDesiredData1}
                value={user.satisfactionDesiredData1}
                onChange={onChange}
                placeholder="Most important factor"
              />
              <br />
              <SelectInput
                options={this.getFilteredSatisfactionOptions(2)}
                displayLabel={false}
                id="satisfactionDesiredData2"
                name="satisfactionDesiredData2"
                error={errors.satisfactionDesiredData2}
                value={user.satisfactionDesiredData2}
                onChange={onChange}
                placeholder="Second most important factor"
              />
              <br />
              <SelectInput
                options={this.getFilteredSatisfactionOptions(3)}
                displayLabel={false}
                id="satisfactionDesiredData3"
                name="satisfactionDesiredData3"
                error={errors.satisfactionDesiredData3}
                value={user.satisfactionDesiredData3}
                onChange={onChange}
                placeholder="Third most important factor"
              />
              {errors.satisfactionDesiredData && (
                <span className="help-block">
                  {errors.satisfactionDesiredData}
                </span>
              )}
            </li>
          )}
        </ol>
        {/* This is here so we can send it to Netlify */}
        <TextInput
          label="User ID"
          name="userId"
          id="userId"
          value={user.userId}
          onChange={() => {}}
          className="hidden"
        />
        <div className={errors.acceptedTerms ? "field has-error" : "field"}>
          <Checkbox
            id="acceptedTerms"
            onChange={onChange}
            name="acceptedTerms"
            checked={user.acceptedTerms}
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
                <Modal.Title>head</Modal.Title>
              </Modal.Header>
              <Modal.Body>test</Modal.Body>
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
