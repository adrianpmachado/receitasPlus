import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import { useEffect, useState } from "react"

const IngredienteEdit = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [unidade, setUnidade] = useState("");

    function editIngrediente(e) {
        e.preventDefault()
        
        // TODO: UPDATE no banco
        console.log(nome)
        console.log(preco)
        console.log(unidade)

        navigate("/ingredientes")
    }

    useEffect(() => {
        // TODO: GET no banco para pegar as infos do url

        setNome();
        setPreco();
        setUnidade();
    }, [])

    return (
        <div class="root">
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
            <div class="buttons-wrapper">
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
                        <button type="submit" style={{background: "#C81919"}}>
                            EXCLUIR
                            <FontAwesomeIcon icon={faTrash} style={{marginLeft: "10px",color: "#ffffff",}} />
                        </button>
                        <button type="submit">ADICIONAR</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default IngredienteEdit