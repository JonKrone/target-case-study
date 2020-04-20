# NextTrip tips

> A project to display the Routes and Stops of Minneapolis' transit system

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting the app locally

In the project directory, simply run `yarn start` to build and serve a development version of the application.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running tests

In the project directory, simply run `yarn test` to launch the test runner in an interactive watch mode.

This is a standard CRA / Jest testing setup, so see Facebook's section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Assumptions

- Fetching (and caching) each Route's Directions would not lead me to hitting API limits
- The data exposed by the NextTrip API changes infrequently and updating caches every 24hrs is sufficient
- The application is to be viewed in a Desktop-sized screen
- The application in its toy-project form does not need to be very resiliant to unexpected behavior such as failing requests

## My time with the project

As this mini-project was pretty simple, I took this as an opportunity to try out a few new pieces of technology. In particular, I wanted to use a hook-based `fetch` utility, React's Suspense mechanism, and ReactTestingLibrary.

- use-http (aka useFetch)
  - I've been using Apollo's GraphQL hooks for the past year and wanted to use that pattern for more standard `fetch`ing
- css variables
  - They've been around for a long time and I feel like they can be useful regardless of the Styling pattern a codebase has chosen
- React's Suspense
  - Suspense and ErrorBoundaries, together, can drastically simplify a Component's branches of code flow and I am very excited to adopt them broadly.
- ReactTestingLibrary, and its testing patterns
  - I have heard a lot about RTL but have not had the opportunity to use it very much.
  - It espouses for a very different mental model for testing web applications which, after spending the morning writing some tests, I know I will have to spend more time understanding.
