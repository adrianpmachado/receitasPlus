import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import { useState } from "react"

const ReceitaAdd = () => {
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
        <div class="root-receita-add">
            <header
                class="header-receita-add"
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
                    class="receita-add-form"
                    onSubmit={addIngrediente}
                >
                    <div>
                        <label>
                            <span>NOME DO PRODUTO</span>
                            <input value={nome} onChange={(e) => setNome(e.target.value)}></input>                        
                        </label>
                        <label>
                            <span>TEMPO DE PREPARO</span>
                            <input value={tempo} onChange={(e) => setTempo(e.target.value)}></input>                        
                        </label>
                        <label>
                            <span>MULTIPLICADOR DE LUCRO</span>
                            <input value={lucro} onChange={(e) => setLucro(e.target.value)}></input>                        
                        </label>
                        <label>
                            <span>MODO DE PREPARO</span>
                            <textarea value={modoPreparo} onChange={(e) => setModoPreparo(e.target.value)}></textarea>                        
                        </label>
                        <button type="button" class="show-ingrediente" >MOSTRAR INGREDIENTES</button>
                        <button type="button" class="add-ingrediente" >ADICIONAR INGREDIENTE</button>
                    </div>
                    <button type="submit">ADICIONAR</button>
                </form>
            </div>
        </div>
    )
}

export default ReceitaAdd