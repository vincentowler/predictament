# Predictament

Prediction tournament app for economic research at Cornell Univsersity

## Quick Start for development

The commands below will install dependencies and run the app on your local machine. Every time you hit save, the app will reload your changes in the browser automatically.

1.  Install dependencies: `npm install`
2.  Start app: `npm start`
3.  Open `http://localhost:8000` and select the desired scenario

## Technologies

- Boilerplate: [create-react-app](https://github.com/facebookincubator/create-react-app)
- Components and styling: [React Bootstrap](https://react-bootstrap.github.io)
- Database: [Netlify Forms](https://app.netlify.com/sites/predictament-dev/forms) - **Note:** Data is only written to forms when hosted on Netlify. Data is **not** written to Netlify forms when the app is run locally.
- Hosting: Netlify
  // TODO: Set up prod environment and tie to the domain name.
  - Prod environment TBD
  - [Test environment](https://predictament-dev.netlify.com/)

## Commands

This project uses [npm scripts](https://www.pluralsight.com/courses/npm-build-tool-introduction) and Git to automate development. Use the following commands:

| Command                               | Description                                                |
| ------------------------------------- | ---------------------------------------------------------- |
| `npm start`                           | Begin development                                          |
| `npm test`                            | Run automated tests                                        |
| `npm run build`                       | Run production build and write to dist                     |
| `git add .`                           | Stage changed files to git (run before commit below)       |
| `git commit -m "commit message here"` | Commit changes                                             |
| `git push`                            | Push committed changes and automatically deploy to Netlify |

You can confirm deployment succeeded on [the Netlify console](https://app.netlify.com/sites/predictament-dev/deploys)

## Configuration

Configuration data is stored in `data.js`. Inside, you can declare three types of data:

1.  scenario - A tournament
2.  backgroundQuestions - The questions asked on page two. Here each question is assigned to one or more scenarioIds.
3.  profiles - The profiles displayed in the tournament. Here each profile is assigned to one or more scenarios.

### How to add a new scenario

1.  Add the scenario data to `data.js`. Make sure to assign a unique scenarioId (one higher than the previous record).
2.  Request the scenario by adding scenarioId to the querystring: `?scenarioid=newIdHere`.
3.  Assign the relevant background questions to the scenario by adding the new scenarioId to `data.js` in the scenarioIds array in the backgroundQuestions array.
4.  Assign the relevant profile questions to the scenario by adding the new scenarioId to `data.js` in the scenarioIds array for the relevant profile questions.
5.  Submit a test to assure the scenario writes to Netlify successfully.

### How to add a new profile

1.  Add the profile to `data.js` in the profiles array. Set a unique profileId (one higher than the previous record).
2.  Specify the scenarioIds where the profile should display.
3.  Submit a test to assure the profile displays as expected and writes to Netlify as expected.

### How to add new background question

1.  Add validation logic to `validation.js`. Otherwise, the questions answers will be unvalidated.
2.  Manually add the question JSX to `Background.js` in the render function.
3.  Add configuration data to data.js to specify which scenarios the background question applies to.
4.  Add the question to state in `index.js`.
5.  Make sure the new question's data writes successfully to Netlify when you submit a new background record.
