import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import "./style.css"

const Cards = ({text, details}) => {
    return (
        <div class="cards">
            <div class="cards-texts">
                <p class="titulo">{text}</p>
                <FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color: "#ffffff",}} />
            </div>
            <div class="detalhes">
                <p >{details}</p>
            </div>
        </div>
    )
}

export default Cards