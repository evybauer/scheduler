# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```



React
Webpack, Babel
Axios, WebSockets
Axios
Storybook, Webpack Dev Server, Jest, Testing Library
The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

single page application (SPA) called Interview Scheduler, built using React.
Data is persisted by the API server using a PostgreSQL database.
The client application communicates with an API server over HTTP, using the JSON format.
Jest tests are used through the development of the project.
Run the <Link scheduler-api server > using the npm run error script.
ERROR_SAVE and ERROR_DELETE Modes



# Interview Scheduler Project

<!-- TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly). -->

## Final Product

!["Screenshot of Appointment page"](https://github.com/evybauer/)
!["Screenshot of Appointment Form page"](https://github.com/evybauer/)
!["Screenshot of Login page"](https://github.com/evybauer/)
!["Screenshot of Create New URL page"](https://github.com/evybauer/)
!["Screenshot of Edit URL page"](https://github.com/evybauer/)

## Dependencies

<!-- - Node.js
- Express
- EJS
- bcrypt
- body-parser
- cookie-session -->

## Setup
Install dependencies with npm install.

### Running Webpack Development Server
npm start

### Running Jest Test Framework
npm test

### Running Storybook Visual Testbed
npm run storybook

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `node express_server.js` command.
<!-- - To acces all the URLs created, access the link My URLs (make sure you're logged in) -->
- To edit or delete appointments, acces the buttons 'Edit' or 'Delete' that are available on the appointment's form

dependencies 
    "axios": "^0.19.1",
    "classnames": "^2.2.6",
    "normalize.css": "^8.0.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "^3.3.0"

  devdependencies
    "devDependencies": {
    "@babel/core": "^7.4.3",
    "@storybook/addon-actions": "^5.0.10",
    "@storybook/addon-backgrounds": "^5.0.10",
    "@storybook/addon-links": "^5.0.10",
    "@storybook/addons": "^5.0.10",
    "@storybook/react": "^5.0.10",
    "@testing-library/jest-dom": "^4.0.0",
    "@testing-library/react": "^8.0.7",
    "@testing-library/react-hooks": "^3.2.1",
    "babel-loader": "^8.0.5",
    "node-sass": "^4.13.1",
    "prop-types": "^15.7.2",
    "react-test-renderer": "^16.9.0"