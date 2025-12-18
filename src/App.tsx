import './App.css'

export default function App({ apiKey }: { apiKey: string }) {

  return (
    <div style={{ border: '1px solid #ddd', padding: 16 }}>
      <h3>My SDK</h3>
      <p>API KEY: {apiKey}</p>
    </div>
  )
}

