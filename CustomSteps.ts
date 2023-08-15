// in this file you can append custom step methods to 'I' object
import { injectAxe, checkA11y } from 'axe-playwright'

export = function() {
  return actor({
    checkA11y: function () {
      if (process.env.ACCESSIBILITY === 'true') {
        this.usePlaywrightTo('Run accessability tests', async ({ page }) => {
          await injectAxe(page)
          await checkA11y(page)
        })
      }
    },
    replayFromHAR: function (harPath: string) {
      this.usePlaywrightTo('Route from HAR', async ({ page }) => {
        await page.routeFromHAR(
          harPath,
          { notFound: 'abort' }
        )
      })
    },
  })
}
