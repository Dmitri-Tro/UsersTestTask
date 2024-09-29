# React + TypeScript + Vite


This project was bootstrapped with [Vite](https://vitejs.dev/guide/)


## Available Scripts

In the project directory, you can run:

### `npm ci`

To install project dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Runs the TypeScript compiler to check types and generate JavaScript files,\
builds the project, creating optimized files for production

### `npm run preview`

Runs the production mode of the built application.\
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.

### `npm run lint`

Runs linting on project code (all files and folders) using ESLint,\
reports unused eslint-disable directives. \
ESLint will exit with an error if there are any warnings

### `npm run lint:fix`

Runs the previously defined script and automatically fix problems\
that can be fixed.

## Project dependencies:

All the following dependencies have been applied to the project\
to make it easily extensible.

### [Redux Toolkit](https://redux-toolkit.js.org/)

The official, opinionated, batteries-included toolset for efficient\
Redux development.\
Redux a JS library for predictable and maintainable global state management.

This is the library I chose for its undeniable pluses:
- proven quality and stability over time and a huge number of projects,
- excellent support of the code base and documentation,
- functional oriented,
- relative ease of use,
- popularity among companies and developers

### [React-redux](https://react-redux.js.org/)

React bindings for Redux.

### [Redux thunk](https://github.com/reduxjs/redux-thunk)

Standard middleware for writing async logic in Redux apps.

### [React router](https://reactrouter.com/en/main)

React Router enables "client side routing".

Client side routing allows your app to update the URL from a link\
click without making another request for another document from the server.\
Instead, your app can immediately render some new UI and make data\
requests with fetch to update the page with new information.

This library is considered the standard solution for routing in React\
applications. Reliable, time-tested, and flexible in use

### [Axios](https://axios-http.com/)

Axios is a promise-based HTTP Client for node.js and the browser.\
It is isomorphic (it can run in the browser and nodejs with the same codebase).\
On the server-side it uses the native node.js http module,\
while on the client (browser) it uses XMLHttpRequests.

This library is also one of the most popular solutions for making http requests.\
Its quality and reliability is proven.\
In addition, this library allows you to intercept requests and responses\
from the server to perform necessary actions, such as headers configuration\
or error handling.