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
import Task1 from './Task1.jsx'
import AddOn_countup from './Add-Ons-react-countup.jsx'
import AddOn_tilty from './Add-Ons-react-tilty.jsx'
import AddOn_toaster from './Add-Ons-react-toaster.jsx'
import AddOn_spinner from './Add-Ons-react-spinners.jsx'
import AddOn_confetti from './Add-Ons-react-confetti.jsx'
import Task from './Task.jsx'
import ContextTaskC1 from './ContextTaskC1';
import Typing_Task from './Typing_Task.jsx'
import Dashboard from './Dashboard.jsx'
import Dashboard_Task from './Dashboard_Task.jsx'
import FitnessDashboard from './FitnessDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Routing /> */}
    {/* < ImagePaths/> */}
    {/* <ImagePaths2 /> */}
    {/* <CLASS /> */}
    {/* <Task1 /> */}
    {/* <AddOn_countup /> */}
    {/* <AddOn_tilty /> */}
    {/* <AddOn_toaster /> */}
    {/* <AddOn_spinner /> */}
    {/* <AddOn_confetti /> */}
    {/* <Task /> */}
    {/* <ContextTaskC1 /> */}
    {/* <Typing_Task /> */}
    {/* < Dashboard/> */}
    {/* < Dashboard_Task/> */}
    {/* < FitnessDashboard/> */}
  </StrictMode>,
)
