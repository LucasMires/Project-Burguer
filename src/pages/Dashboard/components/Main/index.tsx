import { useContext, useEffect } from "react"
import { Card } from "../../../../components/CardProducts"
import { ProductsContext } from "../../../../contexts/ProductsContext"
import { StyledMain } from "./style"
import EmptyBag from "../../../../Assets/sorry-item-not-found.webp"

export const MainDashboard = () => {
    const { filteredProducts, GettingProducts } = useContext(ProductsContext)

    useEffect(() => {
        GettingProducts()
    },[])

    return (
        <StyledMain>
            <ul>
                {   
                    filteredProducts.length != 0 ?
                    (
                        filteredProducts.map((product, index) => {
                            return <Card key={index} product={ product }/>
                        }) 
                    )
                    :
                    (
                        <section>
                            <img src={ EmptyBag } alt="Item não encontrado" />
                            <h2>Produto não encontrado</h2>
                        </section>
                    )
                }
            </ul>
        </StyledMain>
    )
}