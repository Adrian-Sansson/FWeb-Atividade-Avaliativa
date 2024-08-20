import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cadastro from './pages/pageLogin';
import Produtos from './pages/pagePrincipal';
import Carrinho from './pages/pageProdutos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Cadastro/>}/>
      <Route path='/Produtos' element={<Produtos/>}/>
      <Route path='/Carrinho' element={<Carrinho/>}/>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
