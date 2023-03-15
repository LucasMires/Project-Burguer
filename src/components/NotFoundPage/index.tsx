import { Link } from "react-router-dom"
import { StyledMain } from "./style"
import notFoundGif from "../../Assets/Page-Not-Found.gif"

export const NotFoundPage = () => {
    return (
        <StyledMain>
            <Link to="/login">
                <img src={ notFoundGif } alt="Página não encontrada Gif" />
                <h2>Página não encontrada!</h2>
                <p>Voltar para página de Login?</p>
            </Link>
        </StyledMain>
    )
}