import React from "react";
import TournamentForm from "../TournamentForm";
import { sendDataToNetlify } from "../../utils/netlify";
import { scenarios, profiles } from "../../data";

class Tournament extends React.Component {
  state = {
    profileNumber: 1,
    profile: profiles[0],
    // TODO: How do we handle different scenarios? For now, just hard coding to first scenario.
    scenario: scenarios[0],
    options: scenarios[0].options.map(option => {
      return { label: option, tokens: 0 };
    }),
    bonusQuestionValue: "",
    wagerSubmitted: false
  };

  componentDidMount() {
    this.setState({ wagerSubmitted: false });
  }

  getTokensLeft = () => {
    return (
      this.state.scenario.totalTokens -
      this.state.options
        .map(option => option.tokens)
        .reduce((acc, curr) => acc + curr)
    );
  };

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

    const {
      wagerSubmitted,
      profile,
      scenario,
      bonusQuestionValue,
      profileNumber
    } = this.state;

    if (wagerSubmitted) {
      const data = {
        workerId: this.props.workerId,
        acceptedTerms: true,
        email: this.props.email,
        complete: "Y",
        ...this.props.background,
        profileId: profile.profileId,
        scenarioId: scenario.scenarioId,
        wagerDistribution: this.wagerDistribution(),
        bonusQuestion: bonusQuestionValue
      };

      sendDataToNetlify("tournament", data);
      // Show next profile if another exists. Otherwise, redirect to thanks page.
      if (profiles[profileNumber]) {
        this.showNextProfile();
      } else {
        this.props.showPage(5);
      }
    } else {
      this.setState({ wagerSubmitted: true });
    }
  };

  showNextProfile = () => {
    this.setState(state => {
      return {
        profileNumber: state.profileNumber + 1,
        profile: profiles[state.profileNumber],
        bonusQuestionValue: "",
        wagerSubmitted: false,
        options: state.options.map(option => {
          return { label: option.label, tokens: 0 };
        })
      };
    });
    window.scrollTo(0, 0);
  };

  handleBonusChange = e => {
    this.setState({ bonusQuestionValue: e.target.value });
  };

  wagerDistribution() {
    return this.state.options.map(option => option.tokens).join(",");
  }

  render() {
    const {
      topic,
      profile,
      profileNumber,
      scenario,
      options,
      bonusQuestionValue,
      wagerSubmitted
    } = this.state;
    return (
      <TournamentForm
        topic={topic}
        tokensLeft={this.getTokensLeft()}
        background={this.props.background}
        profile={{ ...profile, profileNumber }}
        numProfiles={profiles.length}
        scenario={scenario}
        options={options}
        bonusQuestionValue={bonusQuestionValue}
        wagerSubmitted={wagerSubmitted}
        wagerDistribution={this.wagerDistribution()}
        onAddClick={this.handleAddClick}
        onRemoveClick={this.handleRemoveClick}
        onBonusChange={this.handleBonusChange}
        onSubmit={this.handleSubmit}
        {...this.props}
      />
    );
  }
}

export default Tournament;
