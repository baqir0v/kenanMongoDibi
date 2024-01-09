import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

const Homepage = () => {
  const [data, setData] = useState([])
  const { id } = useParams()

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/product")
    const jsonData = await res.json()
    setData(jsonData)
  }

  useEffect(() => {
    fetchData()
  }, []);

  const handleDelete = async (_id) => {
    try {
      const resp = await axios.delete(`http://localhost:5000/api/product/${_id}`)
      fetchData()
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }
  return (
    <div>
      {data && data.map((item) => (
        <ul key={item._id}>
          <img style={{ width: "200px" }} src={item.image} alt="" />
          <li>{item.title}</li>
          <li>${item.price}</li>
          <Link to={`/${item._id}`}>See Details</Link>
          <br />
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </ul>
      ))}
    </div>
  )
}

export default Homepage
