import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import ReactLoading from 'react-loading'

import CardsIngredientes from "../../components/CardsIngredientes"
import "./style.css"

const Ingredientes = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [ingredientesList, setIngredientesList] = useState([{}])

    useEffect(() => {
        function resIngredientes()
        {
            fetch('/ingredientes')
                .then(res => res.json())
                .then(data => {
                    setIngredientesList(data)
                    setLoading(false)
                })
        }
        resIngredientes()
    }, [])
    
    return (
        <div class="root-ingredientes">
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
            {loading ?
                <div class="loading-ingredientes">
                    <ReactLoading type="spin" color="black"/>   
                </div> 
                :
                <div class="buttons-wrapper-ingredientes">
                    <div 
                        class="add-button-wrapper-ingredientes" 
                        onClick={() => navigate("/ingredientes/ingredienteAdd")}
                    >
                        <div>
                            <FontAwesomeIcon icon={faPlus} size="3x" style={{color: "#ffffff",}} />
                        </div>
                    </div>
                    { ingredientesList.map(ingrediente => {
                        return (
                            <CardsIngredientes
                                key={ingrediente.id} 
                                id={ingrediente.id}
                                details={"R$" + ingrediente.preco + "/" + ingrediente.unidade_medida}
                                text={ingrediente.nome}
                            />
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Ingredientes