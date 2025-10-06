import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import PageNotFound from "./PageNotFound";
const Routing = () =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<Home />} />
                    <Route path="/Services" element= {<Services />} />
                    <Route path="*" element= {<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing