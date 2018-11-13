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
    satisfactionOptions: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired
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
                <Modal.Title>
                  Consent to Participate in an Online Research Study
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h2>Project Title: Cornell Expectations Study</h2>
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
                <h4>Risks and discomfort:</h4>
                <p>
                  The primary risk associated with this study is a possible
                  invasion of your privacy. Though every reasonable effort has
                  been taken, confidentiality during actual Internet
                  communication procedures cannot be guaranteed.
                </p>
                <h4>Benefits:</h4>
                <p>
                  You may find participation in the prediction tournament a
                  useful introspective exercise.
                </p>
                <h4>Compensation:</h4>
                <p>
                  You will receive $0.50 for completing the background survey
                  and prediction tournament. You will also receive up to $0.05
                  for each of the 30 profiles you are asked to make predictions
                  about, based on the accuracy of your predictions. You will
                  receive at least $0.50 for completing the study and could earn
                  up to $1.50 in bonus payments.
                </p>
                <h4>Your information will be confidential:</h4>
                <p>
                  We will make every reasonable effort to keep your information
                  private. We will not collect or share any identifying
                  information about you including your name, phone number,
                  email, or any other information that will make it possible to
                  identify you. However, no guarantees can be made regarding the
                  interception of data sent via the Internet by any third
                  parties.
                </p>
                <h4>Taking part is voluntary:</h4>{" "}
                <p>
                  Taking part in this study is completely voluntary. You may
                  skip any questions that you do not want to answer on the quiz
                  or survey. If you choose to skip survey and quiz questions or
                  discontinue the lecture, it will not affect your current or
                  future relationship with Cornell University. If you decide to
                  take part, you are free to withdraw at any time. However, you
                  will only be compensated once you have fully completed the
                  survey and prediction tournament questions.
                </p>
                <h4>If you have questions:</h4>
                <p>
                  The researchers conducting this study are Jeffrey Swigert and
                  Mike Lovenheim. Please direct any questions to Jeff Swigert at
                  jms858@cornell.edu or 435-865-8239. If you have any questions
                  or concerns regarding your rights as a subject in this study,
                  you may contact the Institutional Review Board (IRB) at
                  607-255-5138 or access their website at
                  http://www.irb.cornell.edu. You may also report your concerns
                  or complaints anonymously through www.hotline.cornell.edu or
                  by calling toll free at 1-866-293-3077. Ethicspoint is an
                  independent organization that serves as a liaison between the
                  University and the person bringing the complaint so that
                  anonymity can be ensured.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button bsStyle="primary" onClick={this.toggleTerms}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

        {/* These hidden fields are necessary since we're selectively rendering background questions based on scenario. Netlify must see all the field on page load or they won't submit. */}
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

        <RadioButtonList
          label="What is your race?"
          name="race"
          options={[
            { value: "Black", label: "Black" },
            { value: "White", label: "White" },
            { value: "Asian", label: "Asian" },
            { value: "Other", label: "Other" }
          ]}
          onChange={() => {}}
          error={errors.race}
          className="hidden"
        />

        <RadioButtonList
          label="What is your ethnicity?"
          name="ethnicity"
          options={[
            { value: "Hispanic", label: "Hispanic" },
            { value: "Non-Hispanic", label: "Non-Hispanic" }
          ]}
          onChange={() => {}}
          error={errors.ethnicity}
          className="hidden"
        />

        <RadioButtonList
          label="What is your gender?"
          name="gender"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" }
          ]}
          onChange={() => {}}
          error={errors.gender}
          className="hidden"
        />

        <RadioButtonList
          label="What is your highest level of education completed?"
          name="education"
          options={[
            { value: "High School", label: "High School" },
            { value: "Bachelors", label: "Bachelors" },
            { value: "Masters", label: "Masters" },
            { value: "Doctorate", label: "Doctorate" }
          ]}
          onChange={() => {}}
          error={errors.education}
          className="hidden"
        />

        <TextInput
          label="What is your total annual income in dollars, rounded to the nearest thousand?"
          id="hiddenincome"
          name="income"
          type="text"
          value={user.income}
          onChange={onChange}
          error={errors.income}
          className="hidden"
        />

        <TextInput
          label="What is your current industry and occupation?"
          id="hiddenindustry"
          name="industry"
          type="text"
          value={user.industry}
          onChange={onChange}
          error={errors.industry}
          className="hidden"
        />

        <TextInput
          label="How many years of experience do you have in your current job?"
          id="hiddenyearsJobExperience"
          name="yearsJobExperience"
          type="number"
          value={user.yearsJobExperience}
          onChange={onChange}
          error={errors.yearsJobExperience}
          className="hidden"
        />

        <SelectInput
          options={this.getFilteredEarningsOptions(1)}
          displayLabel={false}
          id="hiddenearningsDesiredData1"
          name="earningsDesiredData1"
          error={errors.earningsDesiredData1}
          value={user.earningsDesiredData1}
          onChange={onChange}
          placeholder="Most important factor"
          className="hidden"
        />

        <SelectInput
          options={this.getFilteredEarningsOptions(2)}
          displayLabel={false}
          id="hiddenearningsDesiredData2"
          name="earningsDesiredData2"
          error={errors.earningsDesiredData2}
          value={user.earningsDesiredData2}
          onChange={onChange}
          placeholder="Second most important factor"
          className="hidden"
        />

        <SelectInput
          options={this.getFilteredEarningsOptions(3)}
          displayLabel={false}
          id="hiddenearningsDesiredData3"
          name="earningsDesiredData3"
          error={errors.earningsDesiredData3}
          value={user.earningsDesiredData3}
          onChange={onChange}
          placeholder="Third most important factor"
          className="hidden"
        />

        <SelectInput
          options={this.getFilteredSatisfactionOptions(1)}
          displayLabel={false}
          id="hiddensatisfactionDesiredData1"
          name="satisfactionDesiredData1"
          error={errors.satisfactionDesiredData1}
          value={user.satisfactionDesiredData1}
          onChange={onChange}
          placeholder="Most important factor"
          className="hidden"
        />

        <SelectInput
          options={this.getFilteredSatisfactionOptions(2)}
          displayLabel={false}
          id="hiddensatisfactionDesiredData2"
          name="satisfactionDesiredData2"
          error={errors.satisfactionDesiredData2}
          value={user.satisfactionDesiredData2}
          onChange={onChange}
          placeholder="Second most important factor"
          className="hidden"
        />

        <SelectInput
          options={this.getFilteredSatisfactionOptions(3)}
          displayLabel={false}
          id="hiddensatisfactionDesiredData3"
          name="satisfactionDesiredData3"
          error={errors.satisfactionDesiredData3}
          value={user.satisfactionDesiredData3}
          onChange={onChange}
          placeholder="Third most important factor"
          className="hidden"
        />

        <TextInput
          label="What is your own level of well being?"
          id="hiddenwellbeing"
          name="wellbeing"
          type="number"
          value={user.wellbeing}
          onChange={onChange}
          error={errors.wellbeing}
          className="hidden"
        />

        <TextInput
          label="On a scale of 1-100, how healthy are you?"
          id="hiddenhealth"
          name="health"
          type="number"
          value={user.health}
          onChange={onChange}
          error={errors.health}
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
                  {
                    value: "Less than High School",
                    label: "Less than High School"
                  },
                  { value: "Some High School", label: "Some High School" },
                  {
                    value: "High School Graduate (Diploma or Equivalent)",
                    label: "High School Graduate (Diploma or Equivalent)"
                  },

                  {
                    value: "Some College (2-yr. Associates Degree or less)",
                    label: "Some College (2-yr. Associates Degree or less)"
                  },
                  {
                    value: "Bachelor's Degree (4-yr. College Graduate)",
                    label: "Bachelor's Degree (4-yr. College Graduate)"
                  },
                  {
                    value:
                      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)",
                    label:
                      "Professional school degree or doctorate (for example: MD, DDS, DVM, LLB, JD, PHD, etc.)"
                  },
                  {
                    value:
                      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)",
                    label:
                      "Master's degree (for example: MA,MS,MENG,MED,MSW,MBA,MSN, etc.)"
                  }
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
          {this.questionEnabled(11) && (
            <li>
              <TextInput
                label="On a scale of 0 (extremely unhappy) to 100 (highest possible happiness), what would you say your current overall level of well-being is?"
                id="wellbeing"
                name="wellbeing"
                type="number"
                value={user.wellbeing}
                onChange={onChange}
                error={errors.wellbeing}
              />
            </li>
          )}
          {this.questionEnabled(12) && (
            <li>
              <TextInput
                label="On a scale of 0 (extremely unhealthy) to 100 (best possible health level), what would you say your level of overall health is?"
                id="health"
                name="health"
                type="number"
                value={user.health}
                onChange={onChange}
                error={errors.health}
              />
            </li>
          )}
        </ol>
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
