import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import  './Card.css'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'
import FirstName from './FirstName'
import LastName from './LastName'
import Email from './Email'
import PhoneNumber from './PhoneNumber'
import DOB from './DOB'
import Gender from './Gender'
import FormComponet from './FormComponent'
import Component1 from './Component1'
import Component2 from './Component2'


function App() {
  const [count, setCount] = useState(0)
  const data = [
    {
      "name" : "Aditya",
      varient : "green"
    },
    {
      "name" : "THUB",
      varient : "red"
    },
    {
      "name" : "Pragati",
      varient : "red"
    }
  ];
  return (
    <>
      <div className="parent">
        { 
          data.map ((ele) => (
              <div className= {ele.varient == "green" ? "card bg-green" : "card bg-red" } > {ele.name} </div>
          ))
        }
      </div>
    </>
  )
}


  //ternary operation
  // var x = true;
  // return(
  //   <>
  //     {x == true ? <Component1 /> : <Component2 />}
  //   </>
  // )



  //conditional rendering
  // var x = true;
  // if(x == true){
  //   return(
  //     <>
  //       <Component1 />
  //     </>
  //   )
  // }
  // else{
  //   return(
  //     <>
  //       <Component2 />
  //     </>
  //   )
  // }



  // return (
  //   <>
  //     {/* <ClassComponent /> */}
  //     {/* <FunctionComponent /> */}
  //     {/* <FirstName/>
  //     <LastName />
  //     <Email />
  //     <PhoneNumber />
  //     <DOB />
  //     <Gender /> */}
  //     {/* <FormComponet /> */} 
  //     {/* <Component1 />
  //     <Component2 /> */}
  //   </>
  // )

export default App
