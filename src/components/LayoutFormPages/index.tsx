import { StyledSection } from "./style"
import bag from "../../Assets/iconsDashboard/shopping-bag.png"
import circles from "../../Assets/cicles_layout.svg"

export const LayoutFormPages = () => {
    return (
        <StyledSection>
            <h1>
                Burguer <p>Kenzie</p>
            </h1>
            <article>
                <figure>
                    <img src={bag} alt="Sacola" />
                </figure>
                <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
            </article>
            <img src={ circles } alt="Circle image" />
        </StyledSection>
    )
}