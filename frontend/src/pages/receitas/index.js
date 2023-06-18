import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import "./style.css"

const Receitas = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <header
                    onClick={() => {
                        navigate("/")
                    }}    
                > 
                    <span>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} />
                    </span>
                RECEITAS
            </header>
            <div class="buttons-wrapper">
            </div>
        </div>
    )
}

export default Receitas