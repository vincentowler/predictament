import React from "react";

const Thanks = ({ email, userId }) => (
  <div>
    <h1>Thanks for participating!</h1>
    Your responses have been saved so you can safely close your browser. We
    appreciate your input. 😃
    <h3>
      Here is your completion code:
      <br />
      <strong>{userId}</strong>
      Copy this code and paste it into the Amazon MTurk form to complete the
      HIT.
    </h3>
  </div>
);

export default Thanks;
