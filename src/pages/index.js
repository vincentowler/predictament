import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "../components/pages/Login";
import Background from "../components/pages/Background";
import Tournament from "../components/pages/Tournament";
import TournamentInstructions from "../components/pages/TournamentInstructions";
import Thanks from "../components/pages/Thanks";

class IndexPage extends Component {
  state = {
    page: 1,
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

  handleChange = ({ target }) => {
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

  showPage = number => {
    this.setState({ page: number });
  };

  getPage() {
    const {
      page,
      email,
      workerId,
      acceptedTerms,
      background,
      earningsOptions,
      satisfactionOptions
    } = this.state;

    switch (page) {
      case 1:
        return (
          <Login
            onChange={this.handleChange}
            workerId={workerId}
            email={email}
            acceptedTerms={acceptedTerms}
            showPage={this.showPage}
          />
        );
      case 2:
        return (
          <Background
            background={background}
            onChange={this.handleBackgroundChange}
            showPage={this.showPage}
            earningsOptions={earningsOptions}
            satisfactionOptions={satisfactionOptions}
            workerId={workerId}
            email={email}
            acceptedTerms={acceptedTerms}
          />
        );
      case 3:
        return <TournamentInstructions showPage={this.showPage} />;
      case 4:
        {
          /* NOTE: Using CSS instead of conditional rendering since 
        DOM elements must exist on load for Netlify to save them to their forms. */
        }
        return (
          <Tournament
            visible={page == 4}
            workerId={workerId}
            email={email}
            background={background}
            showPage={this.showPage}
            earningsOptions={earningsOptions}
            satisfactionOptions={satisfactionOptions}
          />
        );
      case 5:
        return <Thanks email={email} />;
      default:
        throw new Error("Unknown page passed: " + this.state.page);
    }
  }

  render() {
    return (
      <div className="App center">
        {this.getPage()}

        {/* TODO: Display progress bar? State # of steps? */}
        <footer>
          <hr />&copy; 2018 Cornell University
          <img
            style={{ float: "right" }}
            src="cornell-seal.png"
            alt="Cornell Seal"
          />
        </footer>
      </div>
    );
  }
}

export default IndexPage;
