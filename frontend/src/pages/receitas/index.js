import { useNavigate } from "react-router-dom"
import "./style.css"

const Receitas = () => {
    const navigate = useNavigate();

    return (
        <div class="root">
            <header>RECEITAS</header>
            <div class="buttons-wrapper">
            </div>
        </div>
    )
}

export default Receitas