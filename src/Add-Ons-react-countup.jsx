import React from "react";
import CountUp from "react-countup";
function AddOn_countup() {
    return(
        <>
            <h1><CountUp
                end={3000}
                duration={5}
            /></h1>
        </>
    )
}

export default AddOn_countup