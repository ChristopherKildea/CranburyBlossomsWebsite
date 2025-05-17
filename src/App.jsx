import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Deliveries from './pages/Deliveries'
import { Routes, Route } from 'react-router-dom'






function App() {



  return (



    <>


      <NavBar />
      {/* <Home /> */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deliveries" element={<Deliveries />} />
        </Routes>
      </main>





    </>

  )
}

export default App