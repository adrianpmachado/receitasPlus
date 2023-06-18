import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import Cards from "../../components/Cards"
import "./style.css"

const Ingredientes = () => {
    const navigate = useNavigate();

    return (
        <div class="root">
            <header
                onClick={() => {
                    navigate("/")
                }}    
            > 
                <span>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} />
                </span>
                INGREDIENTES
            </header>
            <div class="buttons-wrapper">
                <Cards text="Base Glicerinada Branca" details="R$0,05/ml"/>
                <Cards text="Essência de Verbena" details="R$0,05/ml"/>
                <Cards text="Extrato Glicolivo de Aloe Vera" details="R$0,05/ml"/>
                <Cards text="Base Glicerinada Branca" details="R$0,05/ml"/>
            </div>
        </div>
    )
}

export default Ingredientes