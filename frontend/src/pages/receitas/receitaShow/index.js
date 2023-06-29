import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import { useEffect, useState } from "react"
import api from "../../../service/api"

const ReceitaShow = () => {
    const navigate = useNavigate();

    const id = window.location.pathname.split("/")[3]
    const [receita, setReceita] = useState([{
        nome: "",
        tempo_preparo: "",
        rendimento: "",
        modo_preparo: "",
        lucro_esperado: ""
    }])

    function editRendimento(times) {
        api
            .put("/receitas/" + id, {
                rendimento: parseInt(receita.rendimento) + times
            })
    }

    useEffect(() => {
        function resReceitas()
        {
            api
                .get('/receitas/' + id)
                .then(response => {
                    setReceita(response.data)
                })
        }
        resReceitas()
    }, [editRendimento, navigate])

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
                RECEITA
            </header>
            <div class="buttons-wrapper">
                <form
                    class="receita-show-form"
                    onSubmit={(e) => {console.log("oi")}}
                >
                    <div>
                        <label>
                            <span>NOME DO PRODUTO</span>
                            <input defaultValue={receita.nome} readOnly></input>                        
                        </label>
                        <label>
                            <span>TEMPO DE PREPARO (min)</span>
                            <input defaultValue={receita.tempo_preparo} readOnly></input>                        
                        </label>
                        <label>
                            <span>MULTIPLICADOR DE LUCRO (vezes)</span>
                            <input defaultValue={receita.rendimento} readOnly></input>                        
                        </label>
                        <label>
                            <span>MODO DE PREPARO</span>
                            <textarea defaultValue={receita.modo_preparo} readOnly></textarea>                        
                        </label>
                        <button type="button" class="show-ingrediente" >MOSTRAR INGREDIENTES</button>
                    </div>
                </form>
            </div>
            <footer
                class="footer-receita-show"
            >
                <div>TOTAL</div>
                <div class="producao">
                    <div
                        onClick={() => {editRendimento(-1)}}
                        class="reduzir">-</div>
                    <div class="vezess">{receita.rendimento}</div>
                    <div 
                        onClick={() => {editRendimento(1)}}
                        class="aumentar">+</div>
                </div>
                <div class="resultado">R${receita.lucro_esperado}</div>
            </footer>
        </div>
    )
}

export default ReceitaShow