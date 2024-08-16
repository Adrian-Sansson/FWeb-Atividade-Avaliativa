import {useState , useMemo} from "react";
import {Link} from 'react-router-dom';
import './pageLogin.css';

function Cadastro() {
    const [name, setName] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [password, setSenha] = useState('')
    const mudaName = (event) => {
        setName(event.target.value);
    };
    const mudaSenha = (event) => {
        setSenha(event.target.value);
    };
    const clickEnter = (event) => {
        event.preventDefault();
        setMensagem(`${name}`)
    };
    const clickEnter1 = (event) => {
        event.preventDefault();
        setMensagem(`${password}`)
    };
    return (
        <div className="digitar">
            <form onSubmit={clickEnter}>
                <input 
                    type="text"
                    value={name}
                    placeholder="Digite seu E-mail:"
                    onChange={mudaName}
                />
            </form>
            <form onSubmit={clickEnter1}>
                <input 
                    type="text"
                    value={password}
                    placeholder="Digite sua senha:"
                    onChange={mudaSenha}
                />
            </form>
            {<p>{mensagem}</p>}
            <button id="botao" type="submit"><Link to='/Itens'> Logar </Link></button>
        </div>
    );
}

export default Cadastro;