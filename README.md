# CodeceptJS Playwright Typescript Boilerplate

## About the Project
Modern E2E Test Automation suite that supports cross-browser testing, parallel execution, HAR routing and accessibility testing.

## Tech stack
- [CodeceptJS](https://codecept.io)
- [Playwright](https://playwright.dev)
- [Deque Axe](https://www.deque.com/axe)
- [Typescript](https://www.typescriptlang.org)

## Features
- ✅ Cross-browser testing (Chrome, Firefox, Safari)
- ✅ Headless and headful modes
- ✅ Parallel execution
- ✅ Screenshot and video recording
- ✅ Playwright tracing
- ✅ HTTP Archive (HAR) files generation and replay
- ✅ Accessibility testing with Axe
- ✅ Reporting with Allure Report

## Installation

### Install npm dependencies:

```sh
npm install
```

### Install Playwright

```sh
npx playwright install
```

## Usage

### Prepare the environment

Rename `.env.default` file into `.env` and update the values to match your environment.

```sh
# website url
BASE_URL=https://www.bear.plus
# run headless (no browser) or headful (with browser) mode
HEADLESS=false
# run accessibility tests
ACCESSIBILITY=false
# keep 1 for most monitors
# set to 2 for MacBook Pro screen to avoid flickering
DEVICE_SCALE_FACTOR=1
# Reports, traces, screenshots, videos output path
OUTPUT_PATH=output
# Generate HTTP Archive (HAR) file from test scenario
RECORD_HAR=false
# HAR file path
HAR_PATH=output/har/requests.har
```

### Run test scenarios by browser
```sh
npm run test:chrome
npm run test:firefox
npm run test:safari
```

## Run a specific scenario
```sh
npx codeceptjs run tests/bear-plus.spec.ts --steps
```

## Pipeline

[![Pipeline](https://github.com/bear-plus/codeceptjs-playwright-typescript-boilerplate/actions/workflows/e2e-test-automation.yml/badge.svg)](https://github.com/bear-plus/codeceptjs-playwright-typescript-boilerplate/actions/workflows/e2e-test-automation.yml)
