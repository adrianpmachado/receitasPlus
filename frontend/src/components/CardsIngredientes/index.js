import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import "./style.css"

const CardsIngredientes = ({id, text, details}) => {
    const navigate = useNavigate();
    
    return (
        <div class="cards">
            <div class="cards-texts">
                <div class="titulo">{text}</div>
                <FontAwesomeIcon 
                    onClick={() => {
                        navigate("/ingredientes/ingredienteEdit/" + id)
                    }}
                    icon={faPenToSquare} 
                    size="lg" 
                    style={{color: "#ffffff", width: '10%'}} />
            </div>
            <div class="detalhes">
                {details}
            </div>
        </div>
    )
}

export default CardsIngredientes