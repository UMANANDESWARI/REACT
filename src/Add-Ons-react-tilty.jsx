import React from "react";
import Tilty from "react-tilty";
import image from "./assets/react.svg"
import './card.css'
function AddOn_tilty() {
    return(
        <>
            <Tilty>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontsize:'40px' }}>
                    <img src={image} alt="image"/>
                </div>
            </Tilty>
        </>
    )
}

export default AddOn_tilty