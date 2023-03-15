import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"

import { toast } from "react-toastify"
import { Button } from "../Button"
import { StyledCard } from "./style"

interface ICardProps{
    product : {
        category: string
        id: number
        img: string
        name: string
        price: number
    }
}

export const Card = ({ product }:ICardProps) => {

    const { cart, setCart } = useContext(ProductsContext)

    const addToCart = () => {
        if (!cart.includes(product)) {
            setCart([...cart, product])
            toast.success("Produto Adicionado")
        } else {
            toast.info("Produto já foi Adicionado!")
        }
    }

    return (
        <StyledCard>
             <figure>
                <img src={ product.img } alt={ product.name } />
             </figure>
             <div>
                <h2>{ product.name }</h2>
                <span>{ product.category }</span>
                <p>R$ { product.price.toFixed(2) }</p>

                <Button
                    type="button"
                    className="CardButton"
                    onClick={() => addToCart()}
                >
                    Adicionar
                </Button>
             </div>
        </StyledCard>
    )
}