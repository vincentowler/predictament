import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import RadioButtonList from "../RadioButtonList";
import Button from "react-bootstrap/lib/Button";
import { isEmpty } from "../../utils/objectUtils";

class Background extends Component {
  static propTypes = {
    background: PropTypes.object.isRequired,
    backgroundQuestionIds: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    showPage: PropTypes.func.isRequired,
    earningsOptions: PropTypes.array.isRequired,
    satisfactionOptions: PropTypes.array.isRequired
  };

  // Filter out any options selected in the sibling dropdowns
  // so the user can only select a given option once.
  getFilteredEarningsOptions(optionNumber) {
    let options = [...this.props.earningsOptions];
    const { background } = this.props;
    if (background.earningsDesiredData1 && optionNumber !== 1) {
      options = options.filter(
        o => o.value !== background.earningsDesiredData1
      );
    }
    if (background.earningsDesiredData2 && optionNumber !== 2) {
      options = options.filter(
        o => o.value !== background.earningsDesiredData2
      );
    }
    if (background.earningsDesiredData3 && optionNumber !== 3) {
      options = options.filter(
        o => o.value !== background.earningsDesiredData3
      );
    }
    return options;
  }

  // Filter out any options selected in the sibling dropdowns
  // so the user can only select a given option once.
  getFilteredSatisfactionOptions(optionNumber) {
    let options = [...this.props.earningsOptions];
    const { background } = this.props;
    if (background.satisfactionDesiredData1 && optionNumber !== 1) {
      options = options.filter(
        o => o.value !== background.satisfactionDesiredData1
      );
    }
    if (background.satisfactionDesiredData2 && optionNumber !== 2) {
      options = options.filter(
        o => o.value !== background.satisfactionDesiredData2
      );
    }
    if (background.satisfactionDesiredData3 && optionNumber !== 3) {
      options = options.filter(
        o => o.value !== background.satisfactionDesiredData3
      );
    }
    return options;
  }

  questionEnabled = questionId => {
    return this.props.backgroundQuestionIds.includes(questionId);
  };

  render() {
    const { background, onChange, errorsExist, errors, visible } = this.props;
    return (
      <div>
        <h2>Background</h2>
        {!isEmpty(errors) && (
          <p style={{ color: "#a94442" }}>Please correct the errors below.</p>
        )}
        <div>
          {errorsExist && <p>Please correct the errors below.</p>}
          <ol>
            {this.questionEnabled(1) && (
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
            )}
            {this.questionEnabled(2) && (
              <li>
                <RadioButtonList
                  selectedValue={background.race}
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
                  selectedValue={background.ethnicity}
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
                  selectedValue={background.gender}
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
                  selectedValue={background.education}
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
                  value={background.income}
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
                  value={background.industry}
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
                  value={background.yearsJobExperience}
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
                    Suppose you are asked to predict the total annual earnings
                    (in U.S. $) of another person. What 3 things would you want
                    to know about them to make the best guess possible?
                  </label>
                  <br />
                  <SelectInput
                    options={this.getFilteredEarningsOptions(1)}
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
                    options={this.getFilteredEarningsOptions(2)}
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
                    options={this.getFilteredEarningsOptions(3)}
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
                  <span className="help-block">
                    {errors.earningsDesiredData}
                  </span>
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
                  value={background.satisfactionDesiredData1}
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
                  value={background.satisfactionDesiredData2}
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
            )}
          </ol>
          <div>
            {/* // TODO: Provide a previous button too? Nope for now per Jeff. */}
            <Button
              className="btn btn-primary center-block"
              bsSize="lg"
              type="submit"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
