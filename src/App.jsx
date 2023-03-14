import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Productos from './components/Productos'
import Index from './components/Index'
import Redes from './components/Redes'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Index />} />
        <Route path='/productos' element={<Productos />} />
      </Routes>
      <Redes />
    </>
  )
}

export default App