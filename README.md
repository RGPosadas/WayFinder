# WayFinder

[![Build Status](https://travis-ci.com/RGPosadas/WayFinder.svg?branch=develop)](https://travis-ci.com/RGPosadas/WayFinder)

- [Team Members](#team-members)
- [Development Guidelines](#development-guidelines)
- [Development Setup](#development-setup)
- [Testing](#testing)
  - [Unit Tests](#unit-tests)
  - [Acceptance Tests](#acceptance-tests)
- [Linting](#linting)
  - [ESLint](#eslint)

## Team Members

- Ritchelle Grace Posadas, @RGPosadas (Team Lead)
- Cristian Aldea, @TheGreatMarkus (Co-Tech Lead)
- Jonathan Hsu, @bit172 (Co-Tech Lead)
- Jimmy Lau, @JimLau49
- Cindy Lo, @cindyslittleplanet
- Omar Sahtout, @osahtout
- Yun Shi Lin, @ys-lin
- Leo Jr. Silao, @leojrsilao
- Ragith Sabapathipillai, @r-saba

## Development Guidelines

- We try our best to adhere to the set of rules and guidelines that we've come up as a team in order to have an efficient workflow.
- To view, refer to our [GitHub Wiki](https://github.com/RGPosadas/WayFinder/wiki).

## Development Setup

To run this react-native application and start development:

1. Clone this repository and navigate to the root folder
   - `git clone https://github.com/RGPosadas/WayFinder.git`
   - `cd WayFinder`
2. Make sure you have npm and expo-cli installed
   - Check npm version: `npm -v`
     - If npm isn't installed, look into how to install it for your OS.
   - Check expo-cli version: `expo -V`
     - If expo isn't installed, run: `npm install -g expo-cli`
3. Install project dependencies
   - `npm install`
4. Run project:

   - `expo r -c`

There you go! You can now connect your phone and start developing and debugging your application!

## Testing

### Unit Tests

- Run Jest/Enzyme unit tests:
  ```
  npm run test
  ```

### Acceptance Tests

At the moment, acceptance tests only run on iOS simulators.

1. Install dependencies by following `Step 1` in the [Detox setup](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md).
2. Setup for iOS:

```
npm run setup-bin
```

3. Run the Detox acceptance tests:

```
expo r --ios -c
npm run e2e
```

## Linting

### ESLint

- `npm run lint`: To start the linter to look for code smells
- `npm run lint-fix`: To allow the linter to fix some of the code smells however some may need to be fixed manually
