import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import { useEffect } from "react"
import api from "../../service/api"

const ListaIngredientes = ({receita_id, ingrediente_id, text, details}) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        api
            .get("/receitaIngredientes")
    }, [])

    return (
        <div class="cards-lista-ingredientes">
            <div class="cards-texts-lista-ingredientes">
                <div class="titulo-lista-ingredientes">{text}</div>
                <FontAwesomeIcon 
                    onClick={() => {
                        navigate("/ingredientes/ingredienteEdit/")
                    }}
                    icon={faPenToSquare} 
                    size="lg" 
                    style={{color: "#ffffff", width: '10%'}} />
            </div>
            <div class="detalhes-lista-ingredientes">
                {details}
            </div>
        </div>
    )
}

export default ListaIngredientes