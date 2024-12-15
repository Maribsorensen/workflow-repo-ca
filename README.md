# Workflow repo

## Project Overview

This project demonstrates the setup and configuration of development workflows, including linting, formatting, unit testing, and end-to-end testing. The repository is a simple venue application provided for this purpose.

### Installing

1. Clone the repo:

```bash
git clone https://github.com/Maribsorensen/workflow-repo-ca.git
```

2. Install the dependencies:

```bash
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Development Tools Setup

This project uses the following tools to maintain code quality:

- **ESLint**: Ensures consistent JavaScript code standards.
- **Prettier**: Automatically formats code.
- **Husky**: Sets up pre-commit hooks to lint and format staged files before committing.

## Testing Prerequisites

Before running tests, ensure the following:

1. Create a `.env` file in the root of your project, using `.env.example` as a template.
2. Provide valid values for the following environment variables:
   - `TEST_USER_EMAIL`: The email address of a test user.
   - `TEST_USER_PASSWORD`: The password for the test user.

## Testing Stories

### Unit Tests (Vitest)

The following functions are tested using Vitest:

#### isActivePath

1. Returns true when current path matches href exactly
2. Returns true for root path ("/") when path is "/" or "/index.html"
3. Returns true when current path includes the href
4. Returns false when paths don't match

#### getUserName

1. Test that it returns the name from the user object in storage
2. Test that it returns null when no user exists in storage

To run unit testing with vitest use the following:

```bash
npm run test:unit
```

### End-to-End Tests (Playwright)

The following functionality is tested using Playwright:

#### Login

1. User can successfully log in with valid credentials from environment variables.
2. User sees an error message with invalid credentials

#### Navigation

1. Navigates to the home page
2. Waits for the venue list to load
3. Clicks the first venue
4. Verifies that when the venue details page load there are the words "Venue details" in the heading

To run E2E tests run:

```bash
npm run test:e2e
```

## Environment Variables

This project uses variables that needs to be added to a `.env` file

- `TEST_USER_EMAIL`
- `TEST_USER_PASSWORD`

Project has an added `.env.example` file that shows this. `.env` is ignored for security reasons

## Available Scripts

- `npm run start`: Starts the development server.
- `npm run test:unit`: Runs unit tests using Vitest.
- `npm run test:e2e`: Runs end-to-end tests using Playwright.
- `npx eslint`: Checks all JavaScript code for issues with ESLint.
- `npx prettier . --write`: Runs Prettier on the entire project.
