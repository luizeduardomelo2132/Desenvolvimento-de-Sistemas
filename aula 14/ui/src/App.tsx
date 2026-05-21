import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ListaProdutos from './pages/ListaProdutos'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/produtos' element={<ListaProdutos />} />
    </Routes>
  )
}

export default App
