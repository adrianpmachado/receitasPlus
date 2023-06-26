import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import CardsReceitas from "../../components/CardsReceitas"

const Receitas = () => {
    const navigate = useNavigate();
    return (
        <div class="root">
            <header
                    class="header-receitas"
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
                <div 
                    class="add-button-wrapper" 
                    onClick={() => navigate("/receitas/receitaAdd")}
                >
                    <div>
                        <FontAwesomeIcon icon={faPlus} size="3x" style={{color: "#ffffff",}} />
                    </div>
                </div>
                <CardsReceitas 
                    id={12312}
                    text="Sabão em Barra de Verbena" 
                    materiais={10.3} 
                    maoDeObra={30.0}
                    custoProd={20.3}
                    precoVenda={40.70}
                />
                <CardsReceitas 
                    id={12312}
                    text="Sabão em Barra de Verbena" 
                    materiais={10.35} 
                    maoDeObra={10.3}
                    custoProd={20.35}
                    precoVenda={40.70}
                />
                <CardsReceitas 
                    id={123123}
                    text="Sabão em Barra de Verbena" 
                    materiais={10.35} 
                    maoDeObra={10.3}
                    custoProd={20.35}
                    precoVenda={40.70}
                />
            </div>
        </div>
    )
}

export default Receitas