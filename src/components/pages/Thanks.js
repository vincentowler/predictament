import React from "react";

const Thanks = ({ email, userId }) => (
  <div>
    <h1>Thanks for participating!</h1>
    Your responses have been saved so you can safely close your browser.
    {email && ` We'll send the results to the email you provided soon.`} We
    appreciate your input. 😃
  </div>
);

export default Thanks;
