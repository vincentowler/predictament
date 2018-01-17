import React from "react";
import Button from "react-bootstrap/lib/Button";
import TextInput from "./TextInput";
import ItemList from "./ItemList";
import Profile from "./Profile";
import BackgroundForm from "./BackgroundForm";
import LoginForm from "./LoginForm";
import Tournament from "./pages/Tournament";

const TournamentForm = props => {
  const {
    visible,
    maxTokens,
    scenario,
    profile,
    numProfiles,
    background,
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
      <p>You have {maxTokens} tokens to assign.</p>
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

        {/* hidden since merely for Netlify form */}
        <TextInput
          id="tournamentWagerDistribution"
          onChange={() => {}}
          name="wagerDistribution"
          value={wagerDistribution}
          className="hidden"
        />

        {!wagerSubmitted && (
          <Button
            className="btn btn-primary center-block"
            bsSize="lg"
            type="submit"
            disabled={tokensLeft > 0}
            title={`You must assign all ${maxTokens} tokens to continue.`}
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
            Save Wager
          </Button>
        </div>
      </div>
      {/* These fields are rendered, but hidden so Netlify will save them upon form submission. */}
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
