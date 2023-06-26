import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import { useState } from "react"

const ReceitaShow = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [tempo, setTempo] = useState("");
    const [lucro, setLucro] = useState("");
    const [modoPreparo, setModoPreparo] = useState("");

    function addIngrediente(e) {
        e.preventDefault()
        
        // TODO: POST no banco
        console.log(nome)
        console.log(tempo)
        console.log(lucro)
        console.log(modoPreparo)

        navigate("/receitas")
    }

    return (
        <div class="root-receita-show">
            <header
                class="header-receita-show"
                onClick={() => {
                    navigate("/receitas")
                }}    
            > 
                <span>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} />
                </span>
                ADICIONAR RECEITA
            </header>
            <div class="buttons-wrapper">
                <form
                    class="receita-show-form"
                    onSubmit={addIngrediente}
                >
                    <div>
                        <label>
                            <span>NOME DO PRODUTO</span>
                            <input value={nome} readonly></input>                        
                        </label>
                        <label>
                            <span>TEMPO DE PREPARO</span>
                            <input value={tempo} readonly></input>                        
                        </label>
                        <label>
                            <span>MULTIPLICADOR DE LUCRO</span>
                            <input value={lucro} readonly></input>                        
                        </label>
                        <label>
                            <span>MODO DE PREPARO</span>
                            <textarea value={modoPreparo} readonly></textarea>                        
                        </label>
                        <button type="button" class="show-ingrediente" >MOSTRAR INGREDIENTES</button>
                    </div>
                    <button type="submit">ADICIONAR</button>
                </form>
            </div>
            <footer
                class="footer-receita-show"
            >
                <div>TOTAL</div>
                <div class="producao">
                    <div class="reduzir">-</div>
                    <div class="vezess">1/2</div>
                    <div class="aumentar">+</div>
                </div>
                <div class="resultado">R$123,00</div>
            </footer>
        </div>
    )
}

export default ReceitaShow