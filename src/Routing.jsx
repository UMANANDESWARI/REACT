import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import PageNotFound from "./PageNotFound";
import ProductCards from "./ProductCards";
import ProductInfo from "./ProductInfo";
const Routing = () =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    
                    <Route path="/" element= {<ProductCards />} />
                    <Route path="/ProductInfo/:ID" element= {<ProductInfo />} />
                    <Route path="*" element= {<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing