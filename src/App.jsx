import React from 'react'
import LandingPageScreens from './components/screens/LandingPageScreens'
import {Route, Routes} from 'react-router-dom';
import ContactScreen from './components/screens/ContactScreen';
import Header from './components/Header/Header';
import AboutScreen from './components/screens/AboutScreen';
import ServiceScreen from './components/screens/ServiceScreen';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
<div>
   <Header /> 
   <Routes>
    <Route path="/" element={<LandingPageScreens/>} />
    <Route path="/ContactScreen" element={<ContactScreen/>} />
    <Route path="/AboutScreen" element={<AboutScreen/>} />
    <Route path="/ServiceScreen" element={<ServiceScreen/>} />
   </Routes>

  <Footer />
   

  


  </div>
  )
}

export default App
