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
  - [Prod environment](https://predictament.com/)

TODO: Set up test environment. For now, testing is local only.

## Writes to Netlify

- Data is written to Netlify forms, but as noted above, Data is only written to forms when hosted on Netlify. When you run the app locally, no data will be written to Netlify.
- Each form has special Netlify attributes. See the comments in netlify.js for relevant links to docs.
- Each person who interacts with the tournament creates multiple writes to Netlify:
  - Each user (with background) writes a row to the user form. When the user clicks next on the background page, both the user and background data are written to a single row.
  - Each wager writes single row to the wager form.
  - Note that when in non-prod Netlify environments, data is written to `testuser` and `testwager` as described under testing below.

## Testing

To test work before moving to production:

1.  Commit your work to the `test` branch. Each commit triggers an auto deploy to the test URL: [http://test--predictament.netlify.com](http://test--predictament.netlify.com). You can [monitor deploy status here](https://app.netlify.com/sites/predictament/deploys)

Alternatively, you can create a pull request of any branch, and it will be available at a URL like this:
http://deploy-preview-42--predictament.netlify.com. The 42 represents the pull request number. You can easily access any of these by clicking on the deploy in the [list of deploys](https://app.netlify.com/sites/predictament/deploys).

2.  All non-prod URLs write data to `testuser` and `testwager` instead. This avoids polluting production data when testing.

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

### How to add new background questions

1.  Add validation logic to `validation.js`. Otherwise, the questions answers will be unvalidated.
2.  Manually add the question JSX to `Background.js` in the render function.
3.  Add configuration data to data.js to specify which scenarios the background question applies to.
4.  Add the question to state in `index.js`.
5.  Make sure the new question's data writes successfully to Netlify when you submit a new background record.
