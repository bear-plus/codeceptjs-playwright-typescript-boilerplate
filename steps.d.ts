/// <reference types='codeceptjs' />
type steps_file = typeof import('./CustomSteps');
type HomePage = typeof import('./pages/HomePage');
type A11yHelper = import('codeceptjs-a11y-helper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, HomePage: HomePage }
  interface Methods extends Playwright, A11yHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
