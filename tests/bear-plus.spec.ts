Feature('Bear Plus')

Scenario('Renders and asserts Bear Plus home page', ({
  I,
  HomePage,
}) => {
  // I.replayFromHAR(process.env.HAR_PATH)

  I.amOnPage('/')

  HomePage.assert()

  I.checkA11y()
})
