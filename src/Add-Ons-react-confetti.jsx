import React from "react";
import Confetti from "react-confetti"
function AddOn_confetti(){
    return(
        <>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontsize:'40px' }}>
            <h1>Uma Nandeswari</h1>
        </div>
        <Confetti
            // numberOfPieces={100}
            // colors= {["green", "red", "pink"]}
        />
        </>
    )
}
export default AddOn_confetti