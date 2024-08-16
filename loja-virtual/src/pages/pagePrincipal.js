import {useState , useCallback , useMemo} from "react";
import {Link} from 'react-router-dom';
import './pageProdutos.css';

function Itens (){
    const [contador, setContador] = useState(0)
    const [itens, setItens] = useState([
        {id:1, nome:'Produto A', preco:10},
        {id:2, nome:'Produto B', preco:20},
        {id:3, nome:'Produto C', preco:30},
        {id:4, nome:'Produto D', preco:40},
        {id:5, nome:'Produto E', preco:50},
        {id:6, nome:'Produto F', preco:60},
        {id:7, nome:'Produto G', preco:70},
    ])
    const click = useCallback(()=>{setContador(contador+1)}, [contador])
    const filtItens = useMemo(()=>{return itens.filter(item=>item.preco>21)}, [itens])
    return(
        <div className="centralizar">
            <p id="contador">{contador}</p>
            <button onClick={click}>Adicionar</button>
            <ul>
                {filtItens.map(item=>(<li key={item.id}>{item.nome}</li>))}
            </ul>
            <Link to='/carrinho'> Carrinho </Link>
        </div>
    )
}

export default Itens;