import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import "./style.css"

const CardsReceitas = ({id, text, materiais, maoDeObra, custoProd, precoVenda}) => {
    const navigate = useNavigate();

    return (
        <div class="cardsreceita">
            <div class="cardstitle"
                onClick={() => {
                    navigate("/receitas/receitaShow/" + id)
                }}
            >
                <p class="titulo">{text}</p>
                <FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color: "#ffffff",}} />
            </div>
            <div class="detalhes">
                <div>
                    <span class="detalhes-titulo">Materiais</span>
                    <span class="detalhes-info">R${materiais}</span>
                </div>
                <div>
                    <span class="detalhes-titulo"> Mão de obra</span>
                    <span class="detalhes-info">R${maoDeObra}</span>
                </div>
                <div>
                    <span class="detalhes-titulo">Custo de produção</span>
                    <span class="detalhes-info">R${custoProd}</span>
                </div>
                <div>
                    <span class="detalhes-titulo"> Preço de venda</span>
                    <span class="detalhes-info">R${precoVenda}</span>
                </div>
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