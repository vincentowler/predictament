import React from "react";
import Button from "react-bootstrap/lib/Button";
import TextInput from "./TextInput";
import ItemList from "./ItemList";
import Profile from "./Profile";
import BackgroundForm from "./BackgroundForm";
import LoginForm from "./LoginForm";

const TournamentForm = props => {
  const {
    visible,
    scenario,
    profile,
    numProfiles,
    options,
    wagerSubmitted,
    tokensLeft,
    wagerDistribution,
    bonusQuestionValue,
    onAddClick,
    onRemoveClick,
    onBonusChange,
    onSubmit
  } = props;
  return (
    <form
      className={visible ? "" : "hidden"}
      name="tournament"
      onSubmit={onSubmit}
      method="post"
      data-netlify="true"
    >
      <h2>What is this person's income?</h2>
      <p>Click the -/+ signs below to place wagers on this person's income.</p>
      <p>You have {scenario.totalTokens} tokens to assign.</p>
      <div className="token-wrapper">
        <h3>
          Profile ({profile.profileNumber} of {numProfiles})
        </h3>
        <Profile profile={profile} />
        <ItemList
          topic={scenario.topic}
          options={options}
          tokensLeft={tokensLeft}
          onAddClick={onAddClick}
          onRemoveClick={onRemoveClick}
        />
        <p>You have {tokensLeft} tokens left.</p>

        {!wagerSubmitted && (
          <Button
            className="btn btn-primary center-block"
            bsSize="lg"
            type="submit"
            disabled={tokensLeft > 0}
            title={`You must assign all ${
              scenario.totalTokens
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
            onChange={onBonusChange}
            label={`For an additional bonus, ${scenario.bonusQuestion}`}
            value={bonusQuestionValue}
          />
          <Button
            className="btn btn-primary center-block"
            bsSize="lg"
            type="submit"
          >
            {/* The saveWagerButtonLabel property is an optional override that can be provided in data.js. 
            If it's not provided, the default label will be utilized for that profile. */}
            {profile.saveWagerButtonLabel || "Save Wager"}
          </Button>
        </div>
      </div>
      {/* All the fields below are rendered, but hidden so Netlify will save them upon form submission. */}
      <TextInput
        id="tournamentWagerDistribution"
        onChange={() => {}}
        name="wagerDistribution"
        value={wagerDistribution}
        className="hidden"
      />
      <TextInput
        id="profileId"
        onChange={() => {}}
        name="profileId"
        value={profile.profileId}
        className="hidden"
      />
      <TextInput
        id="scenarioId"
        onChange={() => {}}
        name="scenarioId"
        value={scenario.scenarioId}
        className="hidden"
      />
      <LoginForm
        errors={{}}
        acceptedTerms={true}
        {...props}
        visible={false}
        onChange={() => {}}
      />
      <BackgroundForm
        {...props}
        visible={false}
        onChange={() => {}}
        errors={{}}
      />
    </form>
  );
};

export default TournamentForm;
