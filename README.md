# Workflow CA


## Status
[![Automated E2E Testing](https://github.com/Glenn-2k/social-media-client/actions/workflows/e2e-testing.yml/badge.svg?branch=workflow)](https://github.com/Glenn-2k/social-media-client/actions/workflows/e2e-testing.yml) - [![Automated Unit Testing](https://github.com/Glenn-2k/social-media-client/actions/workflows/unit-testing.yml/badge.svg?branch=workflow)](https://github.com/Glenn-2k/social-media-client/actions/workflows/unit-testing.yml)


This project is dedicated to enhancing a software package's quality by employing effective development workflows and applying the expertise gained from our course. It includes the use of web technologies and testing tools to achieve a more efficient and robust development process.

## Description
Throughout the course, we've learned how to streamline the development workflow and emphasize quality through testing and automation. This project serves as a practical application of those principles, where a combination of HTML, Bootstrap, SASS, JavaScript, Jest, and Cypress are used to build and test a web package.

## Technologies Used
* HTML
* Bootstrap
* SASS
* JavaScript
* Jest
* Cypress
* Prettier
* Eslint



## Installation

To set up this project on your local machine for development and testing, just follow the steps outlined below:

* Clone the repo
```bash
git clone https://github.com/Glenn-2k/social-media-client.git
```  

* This command will install all the necessary dependencies required for the project.
```bash
npm install
```

### Usage - bash

Here are some common commands and tasks you can execute to interact with the project:

* To run the application locally:
```bash
  npm start
```

* To compile SASS files into CSS:
```bash
npm run build
```

## Automated Testing on PR
The tests are configured to run automatically on Pull Requests. This ensures that every change proposed goes through a rigorous testing process, catching issues early and maintaining code quality throughout the development cycle.

The E2E tests that the login works as intended. The user will not be able to log in with wrong or unknown credentials, and the user can log out correctly and safely. Cypress tests are found in /cypress/e2e

* To run Cypress tests interactively:
```bash
npm run test-e2e
```

* To run Cypress tests in the command line:
```bash
npm run test-e2e-cli
```

The unit tests that the login function saves the user's JWT token in storage and that it is removed when logging out. Jest unit-tests are located with the files they are testing. In this case /src/js/api/auth/

*  To run Jest tests:
```bash
npm run test
```


### Note for Contributors
As this is a part of a school assignment, it is not open for external contributors, but feedback is always appreciated.

