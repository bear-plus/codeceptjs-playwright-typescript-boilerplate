Feature('Bear Plus')

Scenario('Renders and asserts Bear Plus home page', async ({
  I,
  HomePage,
}) => {
  // I.replayFromHAR(process.env.HAR_PATH)

  I.amOnPage('/')

  HomePage.assert()

  // I.checkA11y()

  await I.runA11yCheck()
})
