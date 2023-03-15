import { useContext } from "react"
import { ProductsContext } from "../../../contexts/ProductsContext"
import { Button } from "../../Button" 
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

export const CartProduct = ({ product }: ICardProps) => {

    const { cart, setCart } = useContext(ProductsContext)

    const removeItem = () => {
        const newCart = cart.filter((elt) => {
            if (elt !== product) {
                return elt
            }
        })
        setCart(newCart)
    }

    return (
        <StyledCard>
            <img src={ product.img } alt={ product.name } />
            <div>
                <h2> { product.name }</h2>
            </div>
            <Button
                type="button"
                className="TrashButton"
                onClick={() => removeItem()}>
            </Button>
        </StyledCard>
    )
}