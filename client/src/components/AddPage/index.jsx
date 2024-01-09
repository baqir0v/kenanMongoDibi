import React, { useState } from 'react'
import axios from "axios"

function AddPage() {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState(0)
    const handleAdd = async () => {
        const resp = await axios.post("http://localhost:5000/api/product",{
            "title":title,
            "image":image,
            "price":price
        })
        setTitle("")
        setImage("")
        setPrice(0)
    }
    return (
        <div>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/>
            <br />
            <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} placeholder='Image'/>
            <br />
            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='price'/>
            <br />
            <button onClick={()=>handleAdd()}>Add</button>
        </div>
    )
}

export default AddPage
