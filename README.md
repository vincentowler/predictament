# Predictament

Prediction tournament app for economic research at Cornell Univsersity

## Technologies

// TODO: Is a JSON DB acceptable?

* Boilerplate: [create-react-app](https://github.com/facebookincubator/create-react-app)
* Components and styling: [React Bootstrap](https://react-bootstrap.github.io)
* Database: [Firebase](https://firebase.google.com/docs/database/) [API](https://firebase.google.com/docs/reference/js/index-all?authuser=0)
  * [Account config instructions](https://github.com/firebase/quickstart-js/blob/master/database/README.md)
* Hosting: [Firebase](https://console.firebase.google.com/project/predictament-f8c2f/hosting/main)
  * [Test environment](https://predictament-f8c2f.firebaseapp.com)

## Commands

**NOTE:** Before deployment, configure Firebase on your machine:

1. Add the Google / Github account to the project's [Firebase admin console]()
2. Run `npm install -g firebase-tools` on the developer's machine.
3. Run `firebase use --add` and select `predictament-f8c2f`. If the project isn't listed, assure the user was properly assigned to the project (step 1)

This project uses [npm scripts](https://www.pluralsight.com/courses/npm-build-tool-introduction) to automate builds and deploys. Use the following commands:

| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `npm start`      | Begin development                      |
| `npm test`       | Run automated tests                    |
| `npm run build`  | Run production build and write to dist |
| `npm run deploy` | Deploy to Firebase                     |
