import React from "react";

const Home = ({ scenarios }) => (
  <div>
    <h1>Cornell University Expectations Study - test</h1>

    <p>Select a tournament.</p>
    <ul>
      {scenarios.map(scenario => (
        <li key={scenario.scenarioId}>
          <a href={`/?scenarioId=${scenario.scenarioId}`}>{scenario.topic}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
