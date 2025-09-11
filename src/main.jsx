import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Component1 from './Component1'
// import './index.css'
import App from './App.jsx'
// import CLASS from './Cards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <CLASS /> */}
  </StrictMode>,
)
