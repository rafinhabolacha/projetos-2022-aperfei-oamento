import React from 'react'
import { Link } from "react-router-dom";
import '../Nav/navegacao.css'
function Navegacao() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Listar</Link>
                    </li>
                     <li>
                        <Link to="/contatos">Cadastrar</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}



export default Navegacao;