import { useNavigate } from "react-router-dom"
import "./style.css"

const Home = () => {
    const navigate = useNavigate()
    
    return (
        <div class="root">
            <header>PAGINA INICIAL</header>
            <div class="buttons-wrapper">
                <div 
                    onClick={() => {
                        navigate("/receitas")
                    }} 
                    class="button-box">
                    <p>RECEITAS</p>
                </div>
                <div 
                    onClick={() => {
                        navigate("/ingredientes")
                    }} 
                    class="button-box">
                    <p>INGREDIENTES</p>
                </div>
                <div 
                    onClick={() => {
                        navigate("/configuracoes")
                    }} 
                    class="button-box">
                    <p>CONFIGURAÇÕES</p>
                </div>
            </div>
        </div>
    )
}

export default Home