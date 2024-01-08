import React, { useEffect, useState } from 'react'

const Homepage = () => {
  const [data,setData] = useState([])

  useEffect(() => {
    const fetchData = async ()=>{
      const res = await fetch("http://localhost:5000/api/product")
      const jsonData = await res.json()
      setData(jsonData)
    }
    fetchData()
  },[]);
  return (
    <div>
      {data && data.map((item)=>(
        <ul key={item._id}>
          <img style={{width:"100px"}} src={item.image} alt="" />
          <li>{item.title}</li>
          <li>${item.price}</li>
        </ul>
      ))}
    </div>
  )
}

export default Homepage
