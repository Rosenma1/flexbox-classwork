import React from 'react'
import LandingPageScreens from './components/screens/LandingPageScreens'
import {Route, Routes} from 'react-router-dom';
import CoursesScreen from './components/screens/CoursesScreen';
import Header from './components/Header/Header';
import AboutScreen from './components/screens/AboutScreen';
import ContactScreen from './components/screens/ContactScreen';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
<div>
   <Header /> 
   <Routes>
    <Route path="/" element={<LandingPageScreens/>} />
    <Route path="/CoursesScreen" element={<CoursesScreen/>} />
    <Route path="/AboutScreen" element={<AboutScreen/>} />
    <Route path="/ContactScreen" element={<ContactScreen/>} />
   </Routes>

  <Footer />
   

  


  </div>
  )
}

export default App
