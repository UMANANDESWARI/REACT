import React from "react";
import { Link } from "react-router-dom";
const Home = () =>{
    return(
        <>
            <h1>Hello! You're in Home page</h1>
            <Link to= "/Services" >Click Me</Link>
        </>
    )
}
export default Home