import React from "react";
import TournamentForm from "../TournamentForm";
import { sendDataToNetlify } from "../../utils/netlify";
import { profiles } from "../../data";

class Tournament extends React.Component {
  state = {
    profileNumber: 1,
    profile: profiles[0],
    options: this.getOptions(),
    bonusQuestionValue: "",
    wagerSubmitted: false
  };

  componentDidMount() {
    this.setState({ wagerSubmitted: false });
  }

  getOptions() {
    return this.props.scenario.options.map(option => {
      return { label: option, tokens: 0 };
    });
  }

  getTokensLeft = () => {
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
      scenario,
      bonusQuestionValue,
      profileNumber
    } = this.state;

    if (wagerSubmitted) {
      const data = {
        workerId: this.props.workerId,
        email: this.props.email,
        userId: this.props.userId,
        profileId: profile.profileId,
        scenarioId: scenario.scenarioId,
        wagerDistribution: this.wagerDistribution(),
        bonusQuestion: bonusQuestionValue
      };

      sendDataToNetlify("wager", data);
      // Show next profile if another exists. Otherwise, redirect to thanks page.
      if (profiles[profileNumber]) {
        this.showNextProfile();
      } else {
        this.props.showPage("thanks");
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
        userId={this.props.userId}
        workerId={this.props.workerId}
        email={this.props.email}
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
        onWagerChange={this.handleWagerChange}
        onBonusChange={this.handleBonusChange}
        onSubmit={this.handleSubmit}
        {...this.props}
      />
    );
  }
}

export default Tournament;
