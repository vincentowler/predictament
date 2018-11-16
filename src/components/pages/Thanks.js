import React from "react";

const Thanks = ({ email, userId }) => (
  <div>
    <h1>Thanks for participating!</h1>
    Your responses have been saved so you can safely close your browser.
    {email && ` We'll send the results to the email you provided soon.`} We
    appreciate your input. 😃
    <h3>
      Here is your compleation code:
      <h4>{userId}</h4>
    </h3>
  </div>
);

export default Thanks;
