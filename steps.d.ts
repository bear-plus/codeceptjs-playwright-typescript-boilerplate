/// <reference types='codeceptjs' />
type CustomStepsType = typeof import('./CustomSteps')
type HomePageType = typeof import('./pages/HomePage')

declare namespace CodeceptJS {
  interface SupportObject {
    current: any
    I: I
    HomePage: HomePageType
  }
  interface Methods extends Playwright {}
  interface I extends ReturnType<CustomStepsType> {}
  namespace Translation {
    interface Actions {}
  }
}
