import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import "./style.css"

const CardsReceitas = ({text, materiais, maoDeObra, custoProd, precoVenda}) => {
    return (
        <div class="cardsreceita">
            <div class="cardstitle">
                <p class="titulo">{text}</p>
                <FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color: "#ffffff",}} />
            </div>
            <div class="detalhes">
                <p>Materiais: {materiais}</p>
                <p>Mao de obra: {maoDeObra}</p>
                <p>Custo produção: {custoProd}</p>
                <p>Preço de venda: {precoVenda}</p>
            </div>    
            <div class="produzir">
                <div class="roundedbar">
                    <div class="minus"> - </div>
                    <div class="tituloprod"> Produzir + </div>
                    <div class="vezes"> 2 </div>
                </div>
            </div>    
        </div>
    )
}

export default CardsReceitas