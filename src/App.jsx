import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'
import FirstName from './FirstName'
import LastName from './LastName'
import Email from './Email'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}
      <FirstName/>
      <LastName />
      <Email />
    </>
  )
}

export default App
