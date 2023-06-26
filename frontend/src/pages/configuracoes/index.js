import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import "./style.css"

const Configuracoes = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header
                    class="header-configuracoes"
                    onClick={() => {
                        navigate("/")
                    }}    
                > 
                    <span>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} />
                    </span>
                    CONFIGURAÇÕES
            </header>
            <div class="buttons-wrapper">
            </div>
        </div>
    )
}

export default Configuracoes