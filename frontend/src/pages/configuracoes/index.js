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
            <div class="buttons-wrapper-configuracoes">
                <form
                    class="configuracoes-form"
                    onSubmit={salvarConfiguracoes}
                >
                    <div>
                        <label>
                            <span>CUSTO DE TRABALHO</span>
                            <input defaultValue={100 + " R$/hr"}></input>                        
                        </label>
                        <label>
                            <span>LUCRO PADRAO (R$)</span>
                            <input type="number" defaultValue={10.0}></input>                        
                        </label>
                    </div>
                    <button type="submit">SALVAR</button>
                </form>
            </div>
        </div>
    )
}

export default Configuracoes;
