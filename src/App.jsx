import { use, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
}
//searching data
    // const [data, setData] = useState([
    //   {
    //     RollNo : "23P31A0526"
    //   },
    //   {
    //     RollNo : "23A91A0596"
    //   },
    //   {
    //     RollNo : "23MH1A0556"
    //   },
    //   {
    //     RollNo : "23P31A05H4"
    //   },
    //   {
    //     RollNo : "23P31A1228"
    //   },
    //   {
    //     RollNo : "23P31A56G7"
    //   }
    // ])

    // const [QueryResult,setQueryResult] = useState(data);

    // const [UserQuery, setUserQuery] = useState("");

    // const Capture = (event) => {
    //   setUserQuery(event.target.value);
    // };

    // useEffect(() => {
    //   if (UserQuery === "") {
    //     setQueryResult(data); 
    //   } 
    //   else {
    //     const arr = data.filter((item) =>
    //       item.RollNo.toLowerCase().includes(UserQuery.toLowerCase())
    //     );
    //     setQueryResult(arr);
    //   }
    // }, [UserQuery, data]); 

    //         return (
    //         <>
    //         <div className="parent">
    //         <input type="text" placeholder="Search..." onChange={Capture} />
    //         {QueryResult.map((ele, index) => (
    //             <div key={index} className="card">
    //               {ele.RollNo}
    //             </div>
    //         ))}
    //          </div>
    //         </>
    //     );



// creating cards by using user entered data
  // const fun = () =>{
  //   //console.log(userdata);
  //   setData([...data, userdata])
  //   userdata = {
  //   firstname : "",
  //   lastname : "",
  //   email : ""
  // }
  // }

  // var userdata = {
  //   firstname : "",
  //   lastname : "",
  //   email : ""
  // }

  // const [data, setData] = useState([{
  //   "firstname" : "uma",
  //   "lastname" : "nandeswari",
  //   "email" : "umanandeswarik@gmail.com"
  // }])

  // const GetData = (key, event) =>{
  //   //console.log(event.target.value);
  //   userdata[key] = event.target.value
  // }
  // return(
  //   <>
  //     <form>
  //       <div>
  //         <label>First Name: </label>
  //         <input type="text" onChange={(event) => GetData("firstname",event)}/>
  //       </div>
  //       <div>
  //         <label>Last Name: </label>
  //         <input type="text" onChange={(event) => GetData("lastname",event)}/>
  //       </div>
  //       <div>
  //         <label>Email: </label>
  //         <input type="email" onChange={(event) => GetData("email",event)}/>
  //       </div>
        
  //     </form>
  //     <button onClick={fun}>Add Data</button>

  //     <div className="parent">
  //       {
  //         data.map((ele,index) => {
  //           return(
  //             <div className="child">
  //               <div>First Name : {ele.firstname} </div>
  //               <div>Last Name : {ele.lastname} </div>
  //               <div>Email : {ele.email} </div>
  //             </div>
  //           )
  //         })
  //       }
  //     </div>
  //   </>
  // )



  // const [data, setData] = useState([1,2,3,4,5])
  // const change= () =>{
  //   setData([...data,100])
  // }
  // return (
  //   <>
  //       { 
  //         data.map ((ele) => {
  //             return <h1>{ele}</h1>;
  //         })
  //       }
  //       <button onClick={change}>update me</button>
  //   </>
  // )



  // const [data, setData] = useState([1,2,3])
  // const change = () =>{
  //   setData([4,5,6,7,8])
  // }
  // return (
  //   <>
  //       { 
  //         data.map ((ele) => {
  //             return <h1>{ele}</h1>;
  //         })
  //       }
  //       <button onClick={change}>update me</button>
  //   </>
  // )



  // HOOK - useState
  // const [data, setData] = useState(0)
  // const change = () =>{
  //   if(data == true){
  //     setData(false)
  //   }
  //   else{
  //     setData(true)
  //   }
  // }
  // return(
  //   <>
  //     <center>
  //       {data == true ? <h1>HELLO</h1> : <h1>BYE</h1>}
  //       <button onClick={change}>Change State</button>
  //     </center>
  //   </>
  // )



  // const data = [
  //   {
  //     "name" : "Aditya",
  //     varient : "green"
  //   },
  //   {
  //     "name" : "THUB",
  //     varient : "red"
  //   },
  //   {
  //     "name" : "Pragati",
  //     varient : "red"
  //   }
  // ];
  // return (
  //   <>
  //     <div className="parent">
  //       { 
  //         data.map ((ele) => (
  //             <div className= {ele.varient == "green" ? "card bg-green" : "card bg-red" } > {ele.name} </div>
  //         ))
  //       }
  //     </div>
  //   </>
  // )



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
