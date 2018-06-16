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
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": formName, ...data })
  })
    .then(() => alert("Saved to Netlify. 👍"))
    .catch(error => alert(error));
}
