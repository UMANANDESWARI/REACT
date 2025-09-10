import React from "react";
import "./Card.css";
import MyImage from "./assets/react.svg";
const Cards = () =>{

    const MyCards = [
    {
      image: MyImage,
      Price: 200,
      Brand: "USPA"
    },
    {
       image: MyImage,
      Price: 20050,
      Brand: "USTA"
    },
    {
        image: MyImage,
      Price: 2000,
      Brand: "USP"
    },
    {
       image: MyImage,
      Price: 20000,
      Brand: "US"
    }
  ];
  
  return (
    <>
      <div className="parent">
        { 
          MyCards.map((ele) => (
              <div className="card">
              <div className="logo">
                  <img src={ele.image} />
              </div>
              <div className="info">
                  <div>{ele.Brand}</div>
                  <div>{ele.Price}</div>
              </div>
              </div>
          ))
        }
      </div>
    </>
  );
};

export default Cards;