import './index.css'
import './sdk'

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.eKYCSDK.init({
      apiKey: 'xxx',
      container: '#my-sdk'
    })
  })
} else {
  window.eKYCSDK.init({
    apiKey: 'xxx',
    container: '#my-sdk'
  })
}