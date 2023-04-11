import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";


// aos
import AOS from 'aos'
import 'aos/dist/aos.css'

// components
import Nav from "../components/Nav/Nav";
import Contact from '../components/Contact/Contact'
import Home from '../components/Home/Home'
import Offer from '../components/Offer/Offer'
import Realizations from '../components/Realizations/Realizations'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'
import AlertPrivacy from '../UI/AlertPrivacy/AlertPrivacy'
import Footer from "../components/Footer/Footer"


const App = () => {

  // aos init
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/realizations' element={<Realizations />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <AlertPrivacy />
      <Footer />
    </BrowserRouter >
  );
}

export default App;
