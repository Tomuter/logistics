import React from 'react'
import { Routes, Route} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
const App = () => {
  return (
    
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/home' exact element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/gallery' element={<Gallery />} />
    </Routes>  
  )
}

export default App