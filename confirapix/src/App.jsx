import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer';
import Index from './pages/Index';



const App = () => {
  return (
    <BrowserRouter>
      <Header />

      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/Index' element={<Index />}/>
      </Routes>
      <Footer />
  
    </BrowserRouter>
  )
}

export default App