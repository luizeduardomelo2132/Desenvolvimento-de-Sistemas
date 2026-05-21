import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ListaProdutos from './pages/ListaProdutos'
import NavBar from './components/navBar';
import InserirProduto from './pages/InserirProduto';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<ListaProdutos />} />
        <Route path='/inserir-produto' element={<InserirProduto />} />
      </Routes>
    </>
  )
}
 
export default App
