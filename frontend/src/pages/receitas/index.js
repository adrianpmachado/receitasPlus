import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import CardsReceitas from "../../components/CardsReceitas"

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
                <CardsReceitas 
                    text="Sabão em Barra de Verbena" 
                    materiais="R$10,35" 
                    maoDeObra="R$10,00"
                    custoProd="R$20,35"
                    precoVenda="R$40,70"
                />
            </div>
        </div>
    )
}

export default Receitas