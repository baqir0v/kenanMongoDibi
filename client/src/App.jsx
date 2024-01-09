import React from 'react'
import "./App.css"
import {Route, Routes} from "react-router-dom"
import Homepage from './components/Home'
import AddPage from './components/AddPage'
import Navbar from './components/Navbar'
import DetailPage from './components/DetailPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/add' element={<AddPage/>}/>
        <Route path='/:id' element={<DetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App
