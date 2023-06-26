import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'

import CardsIngredientes from "../../components/CardsIngredientes"
import "./style.css"

const Ingredientes = () => {
    const navigate = useNavigate();

    
    return (
        <div class="root">
            <header
                class="header-ingredientes"
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
                <div 
                    class="add-button-wrapper" 
                    onClick={() => navigate("/ingredientes/ingredienteAdd")}
                >
                    <div>
                        <FontAwesomeIcon icon={faPlus} size="3x" style={{color: "#ffffff",}} />
                    </div>
                </div>
                <CardsIngredientes id={12} text="Base Glicerinada Branca" details="R$0,05/ml"/>
                <CardsIngredientes id={12} text="Base Glicerinada Branca" details="R$0,05/ml"/>
                <CardsIngredientes id={12} text="Base Glicerinada Branca" details="R$0,05/ml"/>
                <CardsIngredientes id={12} text="Base Glicerinada Branca" details="R$0,05/ml"/>
                <CardsIngredientes id={12} text="Essência de Verbena" details="R$0,05/ml"/>
                <CardsIngredientes id={12} text="Extrato Glicolivo de Aloe Vera" details="R$0,05/ml"/>
                <CardsIngredientes id={12} text="Base Glicerinada Branca" details="R$0,05/ml"/>
            </div>
        </div>
    )
}

export default Ingredientes