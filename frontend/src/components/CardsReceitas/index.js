import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import "./style.css"

const CardsReceitas = ({id, text, materiais, maoDeObra, custoProd}) => {
    const navigate = useNavigate();

    return (
        <div class="cardsreceita">
            <div class="cardstitle-receita">
                <div 
                    class="titulo-receita"
                    onClick={() => {
                        navigate("/receitas/receitaShow/" + id)
                    }}
                >{text}</div>
                <div 
                    style={{ width:"120px", zIndex: 10 }} 
                    onClick={() => {
                        navigate("/receitas/receitaAdd")
                    }}
                >
                    <FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color: "#ffffff",}} />
                </div>
            </div>
            <div class="detalhes-receita">
                <div>
                    <div class="detalhes-titulo-receita">Tempo de preparo</div>
                    <div class="detalhes-info-receita">{materiais} min</div>
                </div>
                <div>
                    <div class="detalhes-titulo-receita">Rendimento</div>
                    <div class="detalhes-info-receita">{maoDeObra}x</div>
                </div>
                <div>
                    <div class="detalhes-titulo-receita">Lucro esperado</div>
                    <div class="detalhes-info-receita">R${custoProd}</div>
                </div>
            </div>    
            <div class="produzir-receita ">
                <div class="roundedbar-receita ">
                    <div class="minus-receita "> - </div>
                    <div class="tituloprod-receita "> Produzir + </div>
                    <div class="vezes-receita "> 2 </div>
                </div>
            </div>    
        </div>
    )
}

export default CardsReceitas