import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Component1 from './Component1'
// import './index.css'
import App from './App.jsx'
// import CLASS from './Cards.jsx'
import Routing from './Routing.jsx'
import ProductCards from './ProductCards.jsx'
import ImagePaths from './ImagePaths.jsx'
import ImagePaths2 from './ImagePaths2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Routing />
    {/* < ImagePaths/> */}
    {/* <ImagePaths2 /> */}
    {/* <CLASS /> */}
  </StrictMode>,
)
