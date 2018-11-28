import React, { Component } from "react";
import "../utils/polyfills";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Tournament from "../components/pages/Tournament";
import TournamentInstructions from "../components/pages/TournamentInstructions";
import Thanks from "../components/pages/Thanks";
import { validateLogin } from "../utils/validation";
import { isEmpty } from "../utils/objectUtils";
import { sendDataToNetlify, formNames } from "../utils/netlify";
import { generateUUID } from "../utils/uuid";
import { getQuerystring } from "../utils/querystring";
import ErrorBoundary from "../components/ErrorBoundary";
import { scenarios, profiles, backgroundQuestions } from "../data";
import PageNotFound from "../components/pages/PageNotFound";

class IndexPage extends Component {
  state = {
    user: {
      userId: generateUUID(),
      workerId: "",
      email: "",
      acceptedTerms: false,
      age: "",
      race: "",
      ethnicity: "",
      gender: "",
      education: "",
      momEducation: "",
      dadEducation: "",
      job: "",
      industry: "",
      yearsJobExperience: "",
      wellbeing: "",
      health: "",
      act: "",
      gpa: "",
      sat: "",
      income: "",
      houseIncome: "",
      parentHouseIncome: "",
      occupation: "",
      earningsDesiredData1: "",
      earningsDesiredData2: "",
      earningsDesiredData3: "",
      satisfactionDesiredData1: "",
      satisfactionDesiredData2: "",
      satisfactionDesiredData3: ""
    },
    // Necessary default since scenario is only available when provided in querystring.
    scenario: {
      scenarioId: 0,
      totalTokens: 0,
      options: []
    },
    profiles: [],
    backgroundQuestionIds: [],
    errors: {},
    page: "home",
    earningsOptions: [
      {
        label: "Education",
        value: "Education"
      },
      { label: "Gender", value: "Gender" },
      { label: "Race", value: "Race" }
    ],
    satisfactionOptions: [
      { label: "Education", value: "Education" },
      { label: "Gender", value: "Gender" },
      { label: "Race", value: "Race" }
    ]
  };

  componentDidMount() {
    this.getScenario();
  }

  // Get the relevant scenario (and associated profiles) based on the querystring (if provided).
  getScenario() {
    const querystring = getQuerystring();
    if (!querystring.scenarioId) return;

    const scenario = scenarios.find(s => {
      return s.scenarioId === parseInt(querystring.scenarioId);
    });
    if (!scenario) return this.handleInvalidScenarioId();
    this.setState({
      page: "login", // when a scenarioId is provided, skip the home page and go straight to login.
      scenario,
      profiles: this.getProfilesForScenario(scenario.scenarioId),
      backgroundQuestionIds: this.getBackgroundQuestionsForScenario(
        scenario.scenarioId
      )
    });
  }

  getBackgroundQuestionsForScenario(scenarioId) {
    return backgroundQuestions
      .filter(q => q.scenarioIds.includes(scenarioId))
      .map(p => p.id);
  }

  getProfilesForScenario(scenarioId) {
    return profiles.filter(
      p => p.scenarioIds && p.scenarioIds.includes(scenarioId)
    );
  }

  handleInvalidScenarioId = () => {
    alert(
      "You must provide a valid scenarioId in the URL querystring to begin."
    );
    return this.setState({ page: "notfound" });
  };

  handleLoginChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const user = { ...this.state.user };
    user[target.name] = value;
    this.setState({ user });
  };

  showPage = page => {
    this.setState({ page });
    window.scrollTo(0, 0);
  };

  handleUserSubmit = event => {
    event.preventDefault();
    const errors = validateLogin(
      this.state.user,
      this.state.backgroundQuestionIds
    );
    this.setState({ errors });

    if (isEmpty(errors)) {
      sendDataToNetlify(formNames.user, this.state.user);
      this.showPage("instructions");
    } else {
      window.scrollTo(0, 0);
    }
  };

  render() {
    const {
      page,
      errors,
      user,
      scenario,
      profiles,
      backgroundQuestionIds,
      earningsOptions,
      satisfactionOptions
    } = this.state;

    return (
      <ErrorBoundary>
        <div
          className={`App center ${page !== "tournament" ? "formPage" : null}`}
        >
          <form
            data-netlify="true"
            name={formNames.user}
            method="post"
            onSubmit={this.handleUserSubmit}
          >
            {process.env.GATSBY_ENV !== "production" && (
              <h2 style={{ backgroundColor: "yellow" }}>TESTING SITE</h2>
            )}
            <input type="hidden" name="form-name" value={formNames.user} />
            {page === "home" && <Home scenarios={scenarios} />}
            <Login
              onChange={this.handleLoginChange}
              user={user}
              errors={errors}
              earningsOptions={earningsOptions}
              satisfactionOptions={satisfactionOptions}
              backgroundQuestionIds={backgroundQuestionIds}
              showPage={this.showPage}
              onSubmit={this.handleUserSubmit}
              visible={page === "login"}
            />
          </form>
          {page === "instructions" && (
            <TournamentInstructions showPage={this.showPage} />
          )}
          {/* Setting key to scenarioId so it remounts when scenarioId changes, which therefore calls componentDidMount again */}
          <Tournament
            key={scenario.scenarioId}
            user={user}
            scenario={scenario}
            visible={page === "tournament"}
            profiles={profiles}
            showPage={this.showPage}
            earningsOptions={earningsOptions}
            satisfactionOptions={satisfactionOptions}
          />

          {page === "thanks" && <Thanks email={email} userId={user.userId} />}

          {page === "notfound" && <PageNotFound />}
          <footer>
            <hr />&copy; 2018 Cornell University
            <img
              style={{ float: "right" }}
              src="cornell-seal.png"
              alt="Cornell Seal"
            />
          </footer>
        </div>
      </ErrorBoundary>
    );
  }
}

export default IndexPage;
