export {}

declare global {
  interface Window {
    eKYCSDK: {
      init: (options: {
        container?: string
        apiKey: string
      }) => void
      destroy: () => void
    }
  }
}
