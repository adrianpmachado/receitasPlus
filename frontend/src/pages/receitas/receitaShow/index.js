import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import { useEffect, useState } from "react"

const ReceitaShow = () => {
    const navigate = useNavigate();

    const id = window.location.pathname.split("/")[3]
    const [receita, setReceita] = useState([{
        nome: "",
        tempo_preparo: "",
        rendimento: "",
        modo_preparo: "",
        lucro_esperado: 0
    }])

    function editRendimento(times) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ rendimento: parseInt(receita.rendimento) + times })
        } 
        fetch('/receitas/' + id, requestOptions)
    }

    useEffect(() => {
        function resReceita()
        {
            fetch('/receitas/' + id)
                .then(res => res.json())
                .then(data => {
                    setReceita(data)
                })
        }
        resReceita()
    }, [receita])

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