import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';


import './App.css'

function App() {
  return (<>
    <Navbar/>
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="https://snapztick.vercel.app/form" element={<Form />} />
    </Routes>
    </>
          
  )
}

export default App
