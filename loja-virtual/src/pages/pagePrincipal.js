import { useState, useCallback, useMemo } from "react";
import { Link } from 'react-router-dom';
import './pagePrincipal.css';

function Itens() {
    const [contador, setContador] = useState(0)
    const produtos = [
        { id: 1, nome: 'One Piece', preco: 80.00 },
        { id: 2, nome: 'Berserk', preco: 30.00 },
        { id: 3, nome: 'Jojo', preco: 60.00 },
        { id: 4, nome: 'Sword Art Online', preco: 40.00 },
        { id: 5, nome: 'Death Note', preco: 40.00 },
        { id: 6, nome: 'Hunter X Hunter', preco: 20.00 },
        { id: 7, nome: 'Jujutsu Kaisen', preco: 70.00 },
    ]

    
    const click = useCallback(() => { setContador(contador + 1) }, [contador])
    const filtItens = useMemo(() => { return itens.filter(item => item.preco > 21) }, [itens])
    return (
        <div className="container">
            <div className="arrumar">
                <p id="botaoOne">{contador}</p>
                <button id="botaoTwo" onClick={click}>Adicionar</button>
                <div className="coisas">
                    {filtItens.map(item => (<li key={item.id}>{item.nome}</li>))}
                </div>
                <button id="botaoTree" type="submit"><Link to='/carrinho'> Carrinho </Link></button>
            </div>
        </div>
    )
}

export default Itens;