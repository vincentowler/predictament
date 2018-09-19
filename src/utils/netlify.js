// These functions are useful for sending data to Netlify.
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

// Send data to Netlify to store in their form feature
// More info at https://www.netlify.com/docs/form-handling/
// and https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
// Example: https://github.com/imorente/gatsby-netlify-form-example
export function sendDataToNetlify(formName, data) {
  // In non-prod environments, write to forms that begin with the word test to avoid polluting prod data.
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": formName, ...data })
  })
    .then(() => console.log("saving " + formName, data))
    .catch(error => alert(error));
}

// Returns the relevant form names based on the current environment.
// This way we can write data to test forms in Netlify non-prod environments.
function getEnvironmentFormNames() {
  return process.env.GATSBY_ENV === "production"
    ? { user: "user", wager: "wager" }
    : { user: "testuser", wager: "testwager" };
}

export const formNames = { user: "user", wager: "wager" }; // getEnvironmentFormNames();
