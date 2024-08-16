import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cadastro from './pages/pageLogin';
import Itens from './pages/pagePrincipal';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Cadastro/>}/>
      <Route path='/Itens' element={<Itens/>}/>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
