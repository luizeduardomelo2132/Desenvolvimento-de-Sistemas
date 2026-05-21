import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/home'
import Products from './pages/products'

import NavBar from './components/navBar'
import SideBar from './components/sideBar'

function App() {

  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <>
      {sideBarOpen && <SideBar setSideBarOpen={setSideBarOpen} />}
      <NavBar  
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="products/" element={<Products/>}></Route>
      </Routes>
    </>
  )
}

export default App
