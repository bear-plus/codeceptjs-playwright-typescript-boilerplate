import 'dotenv/config'
import { setHeadlessWhen, setWindowSize } from '@codeceptjs/configure'

setHeadlessWhen(process.env.HEADLESS === 'true')
setWindowSize(1600, 1200)

export const config: CodeceptJS.MainConfig = {
  name: 'codeceptjs-playwright-typescript-boilerplate',
  tests: './tests/**/**.spec.ts',
  output: process.env.OUTPUT_PATH,
  helpers: {
    Playwright: {
      url: process.env.BASE_URL,
      show: process.env.HEADLESS === 'false',
      video: true,
      trace: true,
      browser: 'chromium',
      ignoreHTTPSErrors: true,
      emulate: {
        deviceScaleFactor: process.env.DEVICE_SCALE_FACTOR ? parseInt(process.env.DEVICE_SCALE_FACTOR) : 1,
        recordHar: process.env.RECORD_HAR === 'true' ? {
          path: `${process.env.OUTPUT_PATH}/har/requests.har`,
          mode: 'full',
        } : undefined,
      },
      waitForTimeout: 45_000,
      waitForNavigation: 'load',
      keepVideoForPassedTests: false,
      keepTraceForPassedTests: true,
    },
    A11yHelper: {
      require: 'codeceptjs-a11y-helper',
    },
  },
  include: {
    I: './CustomSteps',
    HomePage: './pages/HomePage',
  },
  multiple: {
    desktop: {
      browsers: [
        { browser: 'chromium' },
        { browser: 'firefox' },
        { browser: 'webkit' }
      ]
    },
  },
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    stepByStepReport: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: 'allure-codeceptjs',
      outputDir: `${process.env.OUTPUT_PATH}/allure`,
    },
  }
}