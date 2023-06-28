import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import { useEffect, useState } from "react"

const IngredienteEdit = () => {
    const navigate = useNavigate();
    const id = window.location.pathname.split("/")[3]

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [unidade, setUnidade] = useState("");

    function editIngrediente(e) {
        e.preventDefault()
        
        // TODO: UPDATE no banco
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ nome, unidade_medida: unidade, preco })
        } 
        fetch('/ingredientes/' + id, requestOptions)
        .then(() => {
            navigate("/ingredientes")
        })
        navigate("/ingredientes")
    }

    function removeIngrediente() {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
        } 
        fetch('/ingredientes/' + id, requestOptions)
        .then(() => {
            navigate("/ingredientes")
        })
    }

    useEffect(() => {
        // TODO: GET no banco para pegar as infos do url
        function resIngredientes()
        {
            fetch('/ingredientes/' + id)
                .then(res => res.json())
                .then(data => {
                    setNome(data.nome);
                    setPreco(data.preco);
                    setUnidade(data.unidade_medida);
                })
        }
        resIngredientes()
    }, [])

    return (
        <div class="root-ingrediente-edit">
            <header
                class="header-ingrediente-edit"
                onClick={() => {
                    navigate("/ingredientes")
                }}    
            > 
                <span>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} />
                </span>
                  EDITAR INGREDIENTE
            </header>
            <div class="buttons-wrapper-ingrediente-edit">
                <form
                    class="ingrediente-edit-form"
                    onSubmit={editIngrediente}
                >
                    <div>
                        <label>
                            <span>NOME DO INGREDIENTE</span>
                            <input value={nome} onChange={(e) => setNome(e.target.value)}></input>                        
                        </label>
                        <label>
                            <span>PREÇO</span>
                            <input value={preco} onChange={(e) => setPreco(e.target.value)}></input>                        
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
                    <div>
                        <button 
                            type="button" 
                            style={{background: "#C81919"}}
                            onClick={() => removeIngrediente()}
                        >
                            EXCLUIR
                            <FontAwesomeIcon icon={faTrash} style={{marginLeft: "10px",color: "#ffffff",}} />
                        </button>
                        <button type="submit">ATUALIZAR</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default IngredienteEdit