import { useNavigate } from "react-router-dom"
import "./style.css"

const Configuracoes = () => {
    const navigate = useNavigate();

    return (
        <div class="root">
            <header>CONFIGURAÇÕES</header>
            <div class="buttons-wrapper">
            </div>
        </div>
    )
}

export default Configuracoes