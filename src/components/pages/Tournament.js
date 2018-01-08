import React from "react";
import Subject from "../Subject";
import ItemList from "../ItemList";
import Button from "react-bootstrap/lib/Button";
import TextInput from "../TextInput";
import { sendDataToNetlify } from "../../utils/netlify";
import { tournamentScenarios, profiles } from "../../data";
import BackgroundForm from "../BackgroundForm";
import LoginForm from "../LoginForm";

// for now, just hard coding to first scenario and profile.
const initialScenario = tournamentScenarios[0];
const profile = profiles[0];

class Tournament extends React.Component {
  state = {
    profile: profile,
    scenario: initialScenario,
    options: initialScenario.options.map(option => {
      return { label: option, tokens: 0 };
    }),
    bonusQuestionValue: "",
    wagerSubmitted: false
  };

  MAX_TOKENS = 3;

  componentDidMount() {
    this.setState({ wagerSubmitted: false });
  }

  getTokensLeft() {
    return (
      this.MAX_TOKENS -
      this.state.options
        .map(option => option.tokens)
        .reduce((acc, curr) => acc + curr)
    );
  }

  handleAddClick = (item, event) => {
    event.preventDefault();
    item.tokens++;
    this.updateState(item);
  };

  handleRemoveClick = (item, event) => {
    event.preventDefault();
    item.tokens--;
    this.updateState(item);
  };

  updateState = item => {
    // Use map to return a new array, but with the item passed item replaced
    this.setState(state => {
      const options = state.options.map(
        option => (option.label === item.label ? item : option)
      );
      return { options };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.wagerSubmitted) {
      sendDataToNetlify("tournament", {
        workerId: this.props.workerId,
        acceptedTerms: true,
        email: this.props.email,
        ...this.props.background,
        scenarioId: this.state.scenario.id,
        wagerDistribution: this.wagerDistribution(),
        bonusQuestion: this.state.bonusQuestionValue
      });
      this.props.showPage(5);
    } else {
      this.setState({ wagerSubmitted: true });
    }
  };

  handleBonusChange = e => {
    this.setState({ bonusQuestionValue: e.target.value });
  };

  wagerDistribution() {
    return this.state.options.map(option => option.tokens).join(",");
  }

  render() {
    const tokensLeft = this.getTokensLeft();
    const {
      topic,
      profile,
      scenario,
      options,
      bonusQuestionValue,
      wagerSubmitted
    } = this.state;
    return (
      <form
        className={this.props.visible ? "" : "hidden"}
        name="tournament"
        onSubmit={this.handleSubmit}
        method="post"
        data-netlify="true"
      >
        <h2>What is this person's income?</h2>
        <p>
          Click the -/+ signs below to place wagers on this person's income.
        </p>
        <p>You have {this.MAX_TOKENS} tokens to assign.</p>
        <div className="token-wrapper">
          <h3>Profile</h3>
          <Subject profile={profile} />
          <ItemList
            topic={scenario.topic}
            options={options}
            tokensLeft={tokensLeft}
            onAddClick={this.handleAddClick}
            onRemoveClick={this.handleRemoveClick}
          />
          <p>You have {tokensLeft} tokens left.</p>

          {/* hidden since merely for Netlify form */}
          <TextInput
            name="wagerDistribution"
            value={this.wagerDistribution()}
            className="hidden"
          />

          {!wagerSubmitted && (
            <Button
              className="btn btn-primary center-block"
              bsSize="lg"
              type="submit"
              disabled={this.getTokensLeft() > 0}
              title={`You must assign all ${
                this.MAX_TOKENS
              } tokens to continue.`}
            >
              Continue
            </Button>
          )}

          {/* Must use CSS to hide so Netflify can see the form field */}
          <div className={wagerSubmitted ? null : "hidden"}>
            <TextInput
              id="bonusQuestion"
              name="bonusQuestion"
              onChange={this.handleBonusChange}
              label={`For an additional bonus, ${scenario.bonusQuestion}`}
              value={bonusQuestionValue}
            />
            <Button
              className="btn btn-primary center-block"
              bsSize="lg"
              type="submit"
            >
              Save Wager
            </Button>
          </div>
        </div>
        {/* These fields are rendered, but hidden so Netlify will save them upon form submission. */}
        <LoginForm
          errors={{}}
          acceptedTerms={true}
          {...this.props}
          visible={false}
          onChange={() => {}}
        />
        <BackgroundForm
          {...this.props}
          visible={false}
          onChange={() => {}}
          errors={{}}
        />
      </form>
    );
  }
}

export default Tournament;
