import React from "react";
import IMG from "./assets/react.svg"
import "./Card.css";

function ProductCards(){
    const Data = [
        {
            ID : 1,
            image: IMG,
            Price: 200,
            Brand: "USPA"
        },
        {
            ID : 2,
            image: IMG,
            Price: 20050,
            Brand: "USTA"
        },
        {
            ID : 3,
            image: IMG,
            Price: 2000,
            Brand: "USP"
        },
        {
            ID : 4,
            image: IMG,
            Price: 20000,
            Brand: "US"
        }
    ]

    return (
        <>
        
            <div className="parent">
                { 
                    Data.map((ele) => {
                        return(
                            
                            <div className="card" onClick={()=>window.location.href=`/ProductInfo/${ele.ID}`}>
                                <div className="logo">
                                    <img src={ele.image} />
                                </div>
                                <div className="info">
                                    <div>{ele.Brand}</div>
                                    <div>{ele.Price}</div>
                                </div>
                            </div>
                        )    
                    })
                }
            </div>
        </>
    );

}

export default ProductCards