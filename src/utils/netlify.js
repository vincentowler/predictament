// These functions are useful for sending data to Netlify.
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

// Send data to Netlify to store in their form feature
// More info at https://www.netlify.com/docs/form-handling/
// Example: https://github.com/imorente/gatsby-netlify-form-example
export function sendDataToNetlify(formName, data) {
  // In non-prod environments, write to forms that begin with the word test to avoid polluting prod data.
  const envFormName =
    process.env.GATSBY_ENV === "production" ? formName : "test" + formName;
  fetch("https://predictament.netlify.com", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": envFormName, ...data })
  })
    .then(() => console.log("saving " + envFormName, data))
    .catch(error => alert(error));
}
