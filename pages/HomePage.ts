const { I } = inject()

export = {
  assert: () => {
    I.seeTitleEquals('Bear Plus | Award Winning Digital Agency')

    I.see('We support worldwide businesses and startups by turning their visions into digital products that drive substantial results.')
  },
}
