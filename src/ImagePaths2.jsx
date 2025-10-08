import React from "react";
import { useState } from "react";
function ImagePaths2(){
    const [ImagePath, setImagePath] = useState(null)
    const GetData = (event) => {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setImagePath(reader.result)
            console.log(reader.result)
        }
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

export default ImagePaths2