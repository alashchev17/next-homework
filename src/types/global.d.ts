export {}

declare global {
  interface Window {
    _: typeof import('lodash')
  }
}
