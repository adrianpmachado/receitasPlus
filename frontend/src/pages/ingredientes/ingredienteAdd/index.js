import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import { useState } from "react"

const IngredienteAdd = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [unidade, setUnidade] = useState("g");

    function addIngrediente(e) {
        e.preventDefault()
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ nome, unidade_medida: unidade, preco })
        } 
        fetch('/ingredientes', requestOptions)
        .then(() => {
            navigate("/ingredientes")
        })
    }

    return (
        <div class="root-ingrediente-add">
            <header
                class="header-ingrediente-add"
                onClick={() => {
                    navigate("/ingredientes")
                }}    
            > 
                <span>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} />
                </span>
                NOVO  INGREDIENTE
            </header>
            <div class="buttons-wrapper-ingrediente-add">
                <form
                    class="ingrediente-add-form"
                    onSubmit={addIngrediente}
                >
                    <div>
                        <label>
                            <span>NOME DO INGREDIENTE</span>
                            <input value={nome} onChange={(e) => setNome(e.target.value)}></input>                        
                        </label>
                        <label>
                            <span>PREÇO</span>
                            <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)}></input>                        
                        </label>
                        <label>
                            <span>UNIDADE</span>
                            <select 
                                name="unidades" 
                                id="unidades"
                                value={unidade}
                                onChange={(e) => setUnidade(e.target.value)}
                            >
                                <option value="g">gramas (g)</option>
                                <option value="mg">Miligramas (mg)</option>
                                <option value="ml">Mililitros (ml)</option>
                                <option value="un">Unidades (un)</option>
                            </select>
                        </label>
                    </div>
                    <button type="submit">ADICIONAR</button>
                </form>
            </div>
        </div>
    )
}

export default IngredienteAdd