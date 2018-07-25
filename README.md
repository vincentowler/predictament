# Predictament

Prediction tournament app for economic research at Cornell Univsersity

## Quick Start for development

```
npm install
npm start
```

This will install dependencies and run the app on your local machine. Every time you hit save, the app will reload your changes in the browser automatically.

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
