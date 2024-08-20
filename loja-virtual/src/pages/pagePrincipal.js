import { useState, useCallback, useMemo } from "react";
import { Link } from 'react-router-dom';
import './pagePrincipal.css';

function Produtos() {
    const [idFiltro, setIdFiltro] = useState(0)
    const produtos = [
        { id: 1, nome: '1 - One Piece', preco: 80.00 },
        { id: 2, nome: '2 - Berserk', preco: 30.00 },
        { id: 3, nome: '3 - Jojo', preco: 60.00 },
        { id: 4, nome: '4 - Sword Art Online', preco: 40.00 },
        { id: 5, nome: '5 - Death Note', preco: 40.00 },
        { id: 6, nome: '6 - Hunter X Hunter', preco: 20.00 },
        { id: 7, nome: '7 - Jujutsu Kaisen', preco: 70.00 },
    ]

    const buscarNomePorId = (id) => {
        const produto = produtos.find(item => item.id === id);
        return produto ? produto.nome : '';
    }

    const filtItens = useMemo(() => produtos.filter(item => item.id > idFiltro), [idFiltro, produtos]);

    return (
        <div className="container">
            <div className="arrumar">
                <div className="coisas">
                    <input id="input" type="text" value={idFiltro} onChange={(e) => setIdFiltro(Number(e.target.value))} placeholder="Digite o numero do produto que deseja:" />
                    <p>Mangá Selecionado: {buscarNomePorId(idFiltro)}</p>
                    <ul>
                        {filtItens.map(itens => (<li key={itens.id}>{itens.nome}</li>))}
                    </ul>
                </div>
                <button id="botao" type="submit"><Link to='/carrinho'> Carrinho </Link></button>
            </div>
        </div>
    );
}

export default Produtos;