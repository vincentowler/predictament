import React from "react";
import TournamentForm from "../TournamentForm";
import { sendDataToNetlify, formNames } from "../../utils/netlify";

class Tournament extends React.Component {
  state = {
    profileNumber: 1,
    profile: this.props.profiles[0], // begin with the first profile passed.
    options: [],
    bonusQuestionValue: "",
    wagerSubmitted: false
  };

  componentDidMount() {
    this.setState({ wagerSubmitted: false, options: this.getOptions() });
  }

  getOptions() {
    if (this.props.scenario.options.length === 0) return [];
    return this.props.scenario.options.map(option => {
      return { label: option, tokens: 0 };
    });
  }

  getTokensLeft = () => {
    if (this.state.options.length === 0) return 0;
    return (
      this.props.scenario.totalTokens -
      this.state.options
        .map(option => option.tokens)
        .reduce((acc, curr) => acc + curr)
    );
  };

  handleWagerChange = (event, item) => {
    event.preventDefault();
    const outOfTokens = this.getTokensLeft() < 1;
    const increasingWager = event.target.value > item.tokens;
    if (outOfTokens && increasingWager) return; // Don't allow people to wager more tokens than the limit.
    const updatedItem = { ...item, tokens: parseInt(event.target.value, 10) };
    this.updateState(updatedItem);
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
      bonusQuestionValue,
      profileNumber
    } = this.state;

    if (wagerSubmitted) {
      const data = {
        workerId: this.props.user.workerId,
        email: this.props.user.email,
        userId: this.props.user.userId,
        profileId: profile.profileId,
        scenarioId: this.props.scenario.scenarioId,
        wagerDistribution: this.wagerDistribution(),
        bonusQuestion: bonusQuestionValue
      };

      sendDataToNetlify(formNames.wager, data);
      const anotherProfileExists = this.props.profiles[profileNumber];
      anotherProfileExists
        ? this.showNextProfile()
        : this.props.showPage("thanks");
    } else {
      this.setState({ wagerSubmitted: true });
    }
  };

  showNextProfile = () => {
    this.setState(state => {
      return {
        profileNumber: state.profileNumber + 1,
        profile: this.props.profiles[state.profileNumber],
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
        user={this.props.user}
        topic={topic}
        tokensLeft={this.getTokensLeft()}
        background={this.props.background}
        profile={{ ...profile, profileNumber }}
        numProfiles={this.props.profiles.length}
        scenario={scenario}
        options={options}
        bonusQuestionValue={bonusQuestionValue}
        wagerSubmitted={wagerSubmitted}
        wagerDistribution={this.wagerDistribution()}
        onWagerChange={this.handleWagerChange}
        onBonusChange={this.handleBonusChange}
        onSubmit={this.handleSubmit}
        {...this.props}
      />
    );
  }
}

export default Tournament;
