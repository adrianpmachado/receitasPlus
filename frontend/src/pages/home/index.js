import { useNavigate } from "react-router-dom"
import "./style.css"

const Home = () => {
    const navigate = useNavigate();

    return (
        <div class="root">
            <header>PAGINA INICIAL</header>
            <div class="buttons-wrapper">
                <div 
                    class="button-box"
                    onClick={() => {
                        navigate("/receitas")
                    }}
                >
                    <p>RECEITAS</p>
                </div>
                <div class="button-box">
                    <p>INGREDIENTES</p>
                </div>
                <div class="button-box">
                    <p>CONFIGURAÇÕES</p>
                </div>
            </div>
        </div>
    )
}

export default Home