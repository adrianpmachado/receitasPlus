import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import "./style.css";
import { useState } from "react";

const Configuracoes = () => {
    const navigate = useNavigate();

    const [custoTrabalho, setCustoTrabalho] = useState("");
    const [lucroPadrao, setLucroPadrao] = useState("");

    function salvarConfiguracoes(e) {
        e.preventDefault();
        
        // TODO: Salvar as configurações no banco de dados
        console.log(custoTrabalho);
        console.log(lucroPadrao);

        navigate("/"); // Redirecionar para a página inicial
    }

    return (
        <div className="root-configuracoes">
            <header
                className="header-configuracoes"
                onClick={() => {
                    navigate("/");
                }}    
            > 
                <span>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} />
                </span>
                CONFIGURAÇÕES
            </header>
            <div className="buttons-wrapper">
                <form
                    className="configuracoes-form"
                    onSubmit={salvarConfiguracoes}
                >
                    <div>
                        <label>
                            <span>CUSTO DE TRABALHO</span>
                            <input value={custoTrabalho} onChange={(e) => setCustoTrabalho(e.target.value)}></input>                        
                        </label>
                        <label>
                            <span>LUCRO PADRÃO</span>
                            <input value={lucroPadrao} onChange={(e) => setLucroPadrao(e.target.value)}></input>                        
                        </label>
                    </div>
                    <button type="submit">SALVAR</button>
                </form>
            </div>
        </div>
    )
}

export default Configuracoes;
