import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react"
import ReactLoading from 'react-loading'

import "./style.css"
import CardsReceitas from "../../components/CardsReceitas"
import api from "../../service/api"

const Receitas = () => {
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(true)
    const [receitaInfos, setReceitaInfos] = useState([{
        id: 0,
        nome: "",
        tempo_preparo: "",
        rendimento: "",
        lucro_esperado: ""
    }])

    useEffect(() => {
        function resReceitas()
        {
            api
                .get('/receitas')
                .then(response => {
                    setReceitaInfos(response.data)
                    setLoading(false)
                })
        }
        resReceitas()
    }, [])

    return (
        <div class="root-receitas">
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
            {loading ?
                <div class="loading-ingredientes">
                    <ReactLoading type="spin" color="black"/>   
                </div> 
                :
                <div class="buttons-wrapper-receitas">
                    <div 
                        class="add-button-wrapper-receitas" 
                        onClick={() => navigate("/receitas/receitaAdd")}
                    >
                        <div>
                            <FontAwesomeIcon icon={faPlus} size="3x" style={{color: "#ffffff",}} />
                        </div>
                    </div>
                    {receitaInfos.map(data => (
                        <CardsReceitas 
                            key={data.id}
                            id={data.id}
                            text={data.nome} 
                            materiais={data.tempo_preparo} 
                            maoDeObra={data.rendimento}
                            custoProd={data.lucro_esperado}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default Receitas