import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Products from './pages/products'

import NavBar from './components/navBar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    
    </>
  )
}

export default App