import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import IMG from "./assets/react.svg"

function ProductInfo(){
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

    const RecievedData = useParams();
    console.log(RecievedData)
    const  [myCard, setmyCard] = useState(null)
    useEffect(() => {
        Data.filter(ele => {
            if(ele.ID == parseInt(RecievedData.ID)){
                setmyCard(ele);
            }
        })
    }, [])

     if(!myCard){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Name: {myCard.ID}</h1>
            <img src={IMG} alt={myCard.name} />
            <p>Description: {myCard.Brand}</p>
            <p>Price: {myCard.Price}</p>
        </div>
    );
    
}

export default ProductInfo