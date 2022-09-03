# Welcome to diet-doctor-eat!

This project is based on React Native `0.69.4` and `Typescript`.

# How to run

First clone the project. Then navigate to the source code, then open a terminal and follow these steps:

1.  `yarn install`
2.  `cd ios && pod install && cd ../`
3.  `yarn ios`

# How to run e2e tests

For e2e tests, I use `Detox`. E2E tests are inside `e2e/home.e2e.js` folder. For installation guide please check their [website](https://github.com/wix/Detox). After installing it on your machine, open a terminal, navigate to the root of the project:

1. `yarn detox:ios:build`
2. `yarn detox:ios:test`

# Structure

## `__mock__`

For mocking network requests I use `miragejs` [lib](https://miragejs.com/).

## `e2e`

Inside this folder, you can check my end to end tests.

## `src`

The main folder is `src`. All of my react and js code are here.

### `components`

reusable compoents.

### `hooks`

reusable hooks.

### `interfaces`

reusable interfaces.

### `navigations`

the navigation structures..

### `scenes`

Each scene has a folder. Inside each folder always there are two files: `index.tsx` and `styles.ts`.

### `styles`

some reusable styles are here. For example, `Colors`and `FontSize`.

### `utils`

reusable utilities
