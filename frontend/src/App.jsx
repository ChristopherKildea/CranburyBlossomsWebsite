import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Deliveries from './pages/Deliveries'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import SocialContent from './components/SocialContent'
import PurchasePage from './pages/PurchasePage'





function App() {



  return (



    <>


      <NavBar />


      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deliveries" element={<Deliveries />} />
           <Route path="/purchase/:id" element={<PurchasePage />} />
        </Routes>
      </main>



    <SocialContent />

    <Footer />


    </>

  )
}

export default App