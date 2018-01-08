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

  render() {
    const {
      page,
      email,
      workerId,
      acceptedTerms,
      background,
      earningsOptions,
      satisfactionOptions
    } = this.state;
    return (
      <div className="App center">
        {page === 1 && (
          <Login
            onChange={this.handleChange}
            workerId={workerId}
            email={email}
            acceptedTerms={acceptedTerms}
            showPage={this.showPage}
          />
        )}
        {page === 1 && (
          <Background
            background={background}
            onChange={this.handleBackgroundChange}
            showPage={this.showPage}
            earningsOptions={earningsOptions}
            satisfactionOptions={satisfactionOptions}
          />
        )}
        {page === 3 && <TournamentInstructions showPage={this.showPage} />}
        {page === 4 && (
          <Tournament
            workerId={workerId}
            email={email}
            background={background}
            showPage={this.showPage}
          />
        )}
        {page === 5 && <Thanks email={email} />}
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
