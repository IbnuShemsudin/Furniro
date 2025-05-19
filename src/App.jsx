import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Browse from './Components/Browse/Browse'
import Products from './Components/Products/Products'
import Explore from './Components/Explore/Explore'
import Furniture from './Components/Furniture/Furniture'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Browse />
      <Products />
      <Explore />
      <Furniture />
      <Footer />
    </>
  )
}

export default App
