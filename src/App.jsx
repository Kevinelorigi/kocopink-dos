import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Galeria from './components/Galeria'
import Index from './components/Index'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={""} />
        <Route path='/index' element={<Index />} />
        <Route path='/galeria' element={<Galeria />} />
      </Routes>
    </>
  )
}

export default App