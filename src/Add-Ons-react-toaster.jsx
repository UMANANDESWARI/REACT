import React from "react";
import { ToastContainer, toast } from "react-toastify";
function AddOn_toaster() {
    const gettoast=()=>{
        toast("hello! Welcome to toastify page")
    }
    return(
        <>
        <button onClick={gettoast}>Click Me!</button>
        <ToastContainer />
        </>
    )
}
export default AddOn_toaster