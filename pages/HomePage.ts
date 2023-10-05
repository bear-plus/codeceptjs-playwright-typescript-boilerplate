const { I } = inject()

export = {
  assert: () => {
    I.seeTitleEquals('Bear Plus | Award Winning Digital Agency')
  },
}
