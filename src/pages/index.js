import React, { Component } from "react";
import "../utils/polyfills";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "../components/pages/Login";
import Background from "../components/pages/Background";
import Tournament from "../components/pages/Tournament";
import TournamentInstructions from "../components/pages/TournamentInstructions";
import Thanks from "../components/pages/Thanks";
import { validateLogin, validateBackground } from "../utils/validation";
import { isEmpty } from "../utils/objectUtils";
import { sendDataToNetlify } from "../utils/netlify";
import { generateUUID } from "../utils/uuid";
import { getQuerystring } from "../utils/querystring";
import ErrorBoundary from "../components/ErrorBoundary";
import { scenarios, profiles } from "../data";
import PageNotFound from "../components/pages/PageNotFound";

class IndexPage extends Component {
  state = {
    userId: generateUUID(),
    scenario: null,
    profiles: [],
    errors: {},
    page: "login",
    workerId: "",
    email: "",
    acceptedTerms: false,
    background: {
      age: "",
      race: "",
      ethnicity: "",
      gender: "",
      education: "",
      income: "",
      industry: "",
      occupation: "",
      yearsJobExperience: "",
      earningsDesiredData1: "",
      earningsDesiredData2: "",
      earningsDesiredData3: "",
      satisfactionDesiredData1: "",
      satisfactionDesiredData2: "",
      satisfactionDesiredData3: ""
    },
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

  // Get the relevant scenario (and associated profiles) based on the querystring.
  getScenario() {
    const querystring = getQuerystring();
    if (!querystring.scenarioId) return this.handleInvalidScenarioId();

    const scenario = scenarios.find(s => {
      return s.scenarioId === parseInt(querystring.scenarioId);
    });
    if (!scenario) return this.handleInvalidScenarioId();
    this.setState({
      scenario,
      profiles: this.getProfilesForScenario(scenario.scenarioId)
    });
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
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  handleBackgroundChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const background = { ...this.state.background };
    background[target.name] = value;
    this.setState({ background });
  };

  showPage = page => {
    this.setState({ page });
    window.scrollTo(0, 0);
  };

  handleLoginSubmit = () => {
    const errors = validateLogin(
      this.state.workerId,
      this.state.email,
      this.state.acceptedTerms
    );
    this.setState({ errors });

    if (isEmpty(errors)) {
      this.showPage("background");
    }
  };

  handleBackgroundSubmit = () => {
    const errors = validateBackground(this.state.background);
    this.setState({ errors });

    if (isEmpty(errors)) {
      const user = {
        userId: this.state.userId,
        workerId: this.state.workerId,
        email: this.state.email,
        ...this.state.background
      };

      sendDataToNetlify("user", user);
      this.showPage("instructions");
    } else {
      window.scrollTo(0, 0);
    }
  };

  handleUserSubmit = event => {
    event.preventDefault();
    switch (this.state.page) {
      case "login":
        this.handleLoginSubmit();
        break;
      case "background":
        this.handleBackgroundSubmit();
        break;
      default:
        alert("unknown page:" + this.state.page);
        break;
    }
  };

  render() {
    const {
      page,
      email,
      errors,
      userId,
      workerId,
      scenario,
      profiles,
      acceptedTerms,
      background,
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
            name="user"
            method="post"
            onSubmit={this.handleUserSubmit}
          >
            <Login
              onChange={this.handleLoginChange}
              workerId={workerId}
              userId={userId}
              errors={errors}
              email={email}
              acceptedTerms={acceptedTerms}
              showPage={this.showPage}
              visible={page === "login"}
            />
            <Background
              background={background}
              errors={errors}
              onChange={this.handleBackgroundChange}
              showPage={this.showPage}
              earningsOptions={earningsOptions}
              satisfactionOptions={satisfactionOptions}
              visible={page === "background"}
            />
          </form>
          {page === "instructions" && (
            <TournamentInstructions showPage={this.showPage} />
          )}
          {/* checking for scenario to avoid tournament crashing when a bogus URL lacking a valid scenarioId is requested. */}
          {scenario && (
            <Tournament
              userId={userId}
              scenario={scenario}
              workerId={workerId}
              email={email}
              visible={page === "tournament"}
              profiles={profiles}
              background={background}
              showPage={this.showPage}
              earningsOptions={earningsOptions}
              satisfactionOptions={satisfactionOptions}
            />
          )}
          {page === "thanks" && <Thanks email={email} />}
          {/* TODO: Display progress bar? State # of steps? */}
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
