import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const [detail, setDetail] = useState()
    const { id } = useParams()
    console.log(detail);
    const fetchDetails = async () => {
        const res = await fetch(`http://localhost:5000/api/product/${id}`)
        const jsonData = await res.json()
        setDetail(jsonData)
    }
    useEffect(() => {
        fetchDetails()
    }, []);

    return (
        <div>
            {detail ? <>
                <div>
                    <ul>
                        <img src={detail.image} alt="" style={{width:"300px"}}/>
                        <li>{detail.title}</li>
                        <li>${detail.price}</li>
                    </ul>
                </div>
            </>
                : ""
            }
        </div>
    )
}

export default DetailPage
