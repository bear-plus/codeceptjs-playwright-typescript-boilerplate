import 'dotenv/config'
import { devices } from 'playwright'
import { setHeadlessWhen, setWindowSize } from '@codeceptjs/configure'

setHeadlessWhen(process.env.HEADLESS === 'true')
setWindowSize(1600, 1200)

export const config: CodeceptJS.MainConfig = {
  name: 'codeceptjs-playwright-typescript-boilerplate',
  tests: './tests/**/**.spec.ts',
  output: './output',
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
          path: './output/har/requests.har',
          mode: 'full',
        } : undefined,
      },
      waitForTimeout: 45_000,
      waitForNavigation: 'load',
      keepVideoForPassedTests: false,
      keepTraceForPassedTests: false,
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
  }
}