import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import { useEffect, useState } from "react"
import api from "../../../service/api"
import ListaIngredientes from "../../../components/ListaIngredientes"

const ReceitaEdit = () => {
    const navigate = useNavigate();

    const id = window.location.pathname.split("/")[3]
    const [nome, setNome] = useState("");
    const [tempo, setTempo] = useState(0);
    const [modoPreparo, setModoPreparo] = useState("");
    const [rendimento, setRendimento] = useState("");

    function editReceita(e) {
        e.preventDefault()
        api
            .put("/receitas/" + id, {
                nome, tempo_preparo: tempo, rendimento: rendimento, usuarioId: 1, 
                modo_preparo: modoPreparo
            })
            .then(() => {
                navigate("/receitas")
            })
    }

    function deleteReceita() {
        api
            .delete("/receitas/" + id)
            .then(() => {
                window.location.pathname = "/receitas"
            })
    }

    useEffect(() => {
        function resReceita()
        {
            api
                .get('/receitas/' + id)
                .then(response => {
                    const {nome, tempo_preparo, rendimento, modo_preparo} = response.data
                    setNome(nome)
                    setTempo(tempo_preparo)
                    setModoPreparo(modo_preparo)
                    setRendimento(rendimento)
                })
        }
        resReceita()
    }, [navigate])

    return (
        <div class="root-receita-edit">
            <header
                class="header-receita-edit"
                onClick={() => {
                    navigate("/receitas")
                }}    
            > 
                <span>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} />
                </span>
                EDITAR RECEITA
                <div onClick={deleteReceita} class="trash-edit-receita">
                    <FontAwesomeIcon icon={faTrash} size="lg" style={{color: "#ffffff",}} />
                </div>
            </header>
            <div class="buttons-wrapper">
                <form
                    class="receita-edit-form"
                    onSubmit={editReceita}
                >
                    <div>
                        <label>
                            <span>NOME DO PRODUTO</span>
                            <input value={nome} onChange={(e) => setNome(e.target.value)}></input>                        
                        </label>
                        <label>
                            <span>TEMPO DE PREPARO (min)</span>
                            <input type="number" value={tempo} onChange={(e) => setTempo(e.target.value)}></input>                        
                        </label>
                        <label>
                            <span>MULTIPLICADOR DE LUCRO (vezes)</span>
                            <input value={rendimento} onChange={(e) => setRendimento(e.target.value)}></input>                        
                        </label>
                        <label>
                            <span>MODO DE PREPARO</span>
                            <textarea value={modoPreparo} onChange={(e) => setModoPreparo(e.target.value)}></textarea>                        
                        </label>
                        <button type="button" class="show-ingrediente" >ADICIONAR INGREDIENTES</button>
                        <button type="submit" class="show-ingrediente" >SALVAR</button>
                    </div>
                </form>
            </div>
            <footer
                class="footer-receita-edit"
            >
            </footer>
        </div>
    )
}

export default ReceitaEdit