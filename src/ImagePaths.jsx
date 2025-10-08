import React from "react";
import { useState } from "react";
function ImagePaths(){
    const [ImagePath, setImagePath] = useState(null)
    const GetData = (event) => {
        const file = event.target.files[0]
        const path = URL.createObjectURL(file)
        console.log(path)
        setImagePath(path)
    }

    return (
        <>
            <input type="file" onChange={(event) => GetData(event)} />
            {
                ImagePath ? <img className="MyImage" src={ImagePath} alt="image not found" /> : <p>No image uploaded</p>
            }
        </>
    )
}

export default ImagePaths