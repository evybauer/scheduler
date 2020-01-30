# Interview Scheduler

Interview Schedulre is a single page application (SPA) that allows the user to create, edit and delete interview appointments.


## Final Product

!["Screenshot of appointment page"](https://github.com/evybauer/scheduler/blob/master/docs/appointment-page.png)
!["Screenshot of Appointment Form page"](https://github.com/evybauer/scheduler/blob/master/docs/appointment-form.png)
!["Screenshot of saving confirmation message"](https://github.com/evybauer/scheduler/blob/master/docs/appointment-saving-message.png)
!["Screenshot of page to edit appointment"](https://github.com/evybauer/scheduler/blob/master/docs/appointment-edit-form.png)
!["Screenshot of delete confirmation page"](https://github.com/evybauer/scheduler/blob/master/docs/appointment-delete-confirmation.png)
!["Screenshot of deleting confirmation message"](https://github.com/evybauer/scheduler/blob/master/docs/appointment-deleting-message.png)


## Dependencies

React
Webpack, 
Babel,
Axios, 
Storybook, 
Webpack Dev Server, 
Jest, 
Cypress,
Testing Library,
Classnames,
Normalize.css,
Node-sass,
Prop-types,
react-test-renderer


## API Server

The client application communicates with an API server over HTTP, using the JSON format.

Express is the basis for the Scheduler API server application (https://github.com/lighthouse-labs/scheduler-api). Data is persisted by the API server using a PostgreSQL database.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

Jest and Cypress tests are used through the development of the project.


## Setup
Install dependencies with npm install.

### Running Webpack Development Server
```sh
npm start
```
### Running Jest Test Framework
```sh
npm test
```

### Running Storybook Visual Testbed
```sh
npm run storybook
```


## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm start` command. It will open the browser page automatically.
- To `create` appointments, click on a weekday from the the navbar, acces the  `+`  button available on the appointment's page, fill out the information required and click on the `save button`.
- To `edit` or `delete` appointments, acces the buttons `Edit` or `Delete` available on the appointment's form.
