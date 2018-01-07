import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import RadioButtonList from "../RadioButtonList";
import Button from "react-bootstrap/lib/Button";
import { isEmpty } from "../../utils/objectUtils";

class Background extends Component {
  static propTypes = {
    background: PropTypes.object.isRequired
  };

  state = {
    errors: {}
  };

  // TODO: Which are required?
  handleSubmit = event => {
    event.preventDefault();
    const { background } = this.props;
    const errors = {};
    if (!background.age) {
      errors.age = "Please enter your age.";
    }

    if (background.age < 18 || background.age > 80) {
      errors.age = "Sorry, you need to be between 18 and 80 to participate.";
    }

    if (!background.race) {
      errors.race = "Please select your race.";
    }

    if (!background.ethnicity) {
      errors.ethnicity = "Please select your ethnicity.";
    }

    if (!background.gender) {
      errors.gender = "Please select your gender.";
    }

    if (!background.education) {
      errors.education = "Please select your education.";
    }

    // TODO: Should this only be allowed to be a number?
    if (!background.income) {
      errors.income = "Please enter your annual income.";
    }

    // TODO: Should these be dropdowns? Single input?
    if (!background.industry) {
      errors.industry = "Please enter the industry in which you work.";
    }

    if (
      !background.yearsJobExperience ||
      background.yearsJobExperience < 0 ||
      background.yearsJobExperience > 80
    ) {
      errors.yearsJobExperience =
        "Please enter the number of years of experience you have in your current job.";
    }

    if (background.yearsJobExperience > background.age) {
      errors.yearsJobExperience =
        "Your years of job experience cannot exceed your age.";
    }

    // TODO: Require entering three?
    if (!background.earningsDesiredData1) {
      errors.earningsDesiredData1 = "Please enter the most important factor.";
    }

    if (!background.earningsDesiredData2) {
      errors.earningsDesiredData2 =
        "Please enter the second most important factor.";
    }

    if (!background.earningsDesiredData3) {
      errors.earningsDesiredData3 =
        "Please enter the third most important factor.";
    }

    // TODO: Require entering three?
    if (!background.satisfactionDesiredData1) {
      errors.satisfactionDesiredData1 =
        "Please enter the most important factor.";
    }

    if (!background.satisfactionDesiredData2) {
      errors.satisfactionDesiredData2 =
        "Please enter the second most important factor.";
    }

    if (!background.satisfactionDesiredData3) {
      errors.satisfactionDesiredData3 =
        "Please enter the third most important factor.";
    }

    this.setState({ errors });

    if (isEmpty(errors)) {
      this.props.showPage(3);
    }
  };

  render() {
    const {
      background,
      race,
      ethnicity,
      education,
      gender,
      satisfactionOptions,
      earningsOptions,
      onChange
    } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Background</h2>
          <ol>
            <li>
              <TextInput
                label="What is your age?"
                id="age"
                name="age"
                type="number"
                value={background.age}
                onChange={onChange}
                error={errors.age}
              />
            </li>
            <li>
              <RadioButtonList
                value={race}
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
            <li>
              <RadioButtonList
                value={ethnicity}
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
            <li>
              <RadioButtonList
                value={gender}
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
            <li>
              <RadioButtonList
                value={education}
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
            <li>
              <TextInput
                label="What is your total annual income?"
                id="income"
                name="income"
                type="text"
                value={background.income}
                onChange={onChange}
                error={errors.income}
              />
            </li>
            <li>
              <TextInput
                label="What is your current industry and occupation?"
                id="industry"
                name="industry"
                type="text"
                value={background.industry}
                onChange={onChange}
                error={errors.industry}
              />
            </li>
            <li>
              <TextInput
                label="How many years of experience do you have in your current job?"
                id="yearsJobExperience"
                name="yearsJobExperience"
                type="number"
                value={background.yearsJobExperience}
                onChange={onChange}
                error={errors.yearsJobExperience}
              />
            </li>
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
                  options={earningsOptions}
                  displayLabel={false}
                  id="earningsDesiredData1"
                  name="earningsDesiredData1"
                  error={errors.earningsDesiredData1}
                  value={background.earningsDesiredData1}
                  onChange={onChange}
                  placeholder="Most important factor"
                />
                <br />
                <SelectInput
                  options={earningsOptions}
                  displayLabel={false}
                  id="earningsDesiredData2"
                  name="earningsDesiredData2"
                  error={errors.earningsDesiredData2}
                  value={background.earningsDesiredData2}
                  onChange={onChange}
                  placeholder="Second most important factor"
                />
                <br />
                <SelectInput
                  options={earningsOptions}
                  displayLabel={false}
                  id="earningsDesiredData3"
                  name="earningsDesiredData3"
                  error={errors.earningsDesiredData3}
                  value={background.earningsDesiredData3}
                  onChange={onChange}
                  placeholder="Third most important factor"
                />
              </div>
              {errors.earningsDesiredData && (
                <span className="help-block">{errors.earningsDesiredData}</span>
              )}
            </li>
            <li>
              <label htmlFor="satisfactionDesiredData">
                Suppose you are asked to predict the overall life satisfaction
                of another person. What 3 things would you want to know about
                them to make the best guess possible?
              </label>
              <br />
              <SelectInput
                options={satisfactionOptions}
                displayLabel={false}
                id="satisfactionDesiredData1"
                name="satisfactionDesiredData1"
                error={errors.satisfactionDesiredData1}
                value={background.satisfactionDesiredData1}
                onChange={onChange}
                placeholder="Most important factor"
              />
              <br />
              <SelectInput
                options={satisfactionOptions}
                displayLabel={false}
                id="satisfactionDesiredData2"
                name="satisfactionDesiredData2"
                error={errors.satisfactionDesiredData2}
                value={background.satisfactionDesiredData2}
                onChange={onChange}
                placeholder="Second most important factor"
              />
              <br />
              <SelectInput
                options={satisfactionOptions}
                displayLabel={false}
                id="satisfactionDesiredData3"
                name="satisfactionDesiredData3"
                error={errors.satisfactionDesiredData3}
                value={background.satisfactionDesiredData3}
                onChange={onChange}
                placeholder="Third most important factor"
              />
              {errors.satisfactionDesiredData && (
                <span className="help-block">
                  {errors.satisfactionDesiredData}
                </span>
              )}
            </li>
          </ol>
          <div>
            {/* // TODO: Provide a previous button too? */}
            <Button
              className="btn btn-primary center-block"
              bsSize="lg"
              type="submit"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Background;
