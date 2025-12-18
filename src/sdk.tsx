import { createRoot } from 'react-dom/client'
import App from './App'

let root: any = null

function init(options: {
  container?: string
  apiKey: string
}) {
  let el: Element | null = null
  
  if (options.container) {
    el = document.querySelector(options.container)
    if (!el) {
      // For testing: create the container if it doesn't exist
      const containerId = options.container.startsWith('#') 
        ? options.container.slice(1) 
        : options.container
      el = document.createElement('div')
      el.id = containerId
      document.body.appendChild(el)
    }
  } else {
    // For testing: create a default container if none provided
    el = document.createElement('div')
    el.id = 'ekyc-sdk-default-container'
    document.body.appendChild(el)
  }

  root = createRoot(el)
  root.render(<App apiKey={options.apiKey} />)
}

function destroy() {
  root?.unmount()
}

;(window as any).eKYCSDK = {
  init,
  destroy
}

