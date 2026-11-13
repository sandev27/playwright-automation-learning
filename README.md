# Playwright Automation Learning

A hands-on UI test automation project using **Playwright, TypeScript and JavaScript**, developed as part of my journey from manual QA testing into test automation.

## Project Overview

This repository demonstrates my practical learning and experimentation with Playwright for web application testing.

## Technologies Used

- Playwright Test
- TypeScript
- Node.js and npm
- Git and GitHub
- Visual Studio Code

## Test Scenarios

- **Login Testing:** Practising successful login validation using SauceDemo.
- **Page Validation:** Verifying page titles and URLs.
- **Shopping Cart Testing:** Practising product selection and cart verification.
- **Form Testing:** Interacting with input fields, buttons and form elements.
- **Locators:** Exploring CSS selectors, text, roles, labels, placeholders and test IDs.
- **Cross-Browser Testing:** Running tests using Chromium, Firefox and WebKit.

## Applications Used

- [SauceDemo](https://www.saucedemo.com/)
- [Bondar Academy Playground](https://playground.bondaracademy.com/)

## Running the Tests

Install the dependencies:

```bash
npm install
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run tests in Chromium:

```bash
npx playwright test --project=chromium
```

View the HTML test report:

```bash
npx playwright show-report
```

## Current Progress

- [x] Playwright project setup
- [x] Basic UI automation scripts
- [x] Locators and form interactions
- [x] Cross-browser test execution
- [x] HTML test reporting
- [x] Git and GitHub integration
- [ ] Page Object Model (POM)
- [ ] Data-driven testing
- [ ] GitHub Actions CI/CD integration

## Learning Goals

My goal is to strengthen my automation testing skills by building maintainable test scripts, learning automation framework design and incorporating automated testing into CI/CD workflows.

This is an ongoing learning project, and I will continue updating the repository as I develop new skills.
