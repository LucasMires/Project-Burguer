import { useContext } from "react"
import { ProductsContext } from "../../../contexts/ProductsContext"
import { Button } from "../../Button"
import { CartProduct } from "../CartProduct"
import { StyledAside } from "./style"

export const CartAside = () => {

    const { cart, setCart, setShowCart, showCart } = useContext(ProductsContext)

    const CleanCart = () => {
        setCart([])
    }
    const CloseAside = () => {
        setShowCart(!showCart)
    }

    const CartTotal = () => {
        const result = cart.reduce((first, second) => {
            return first + second.price
        }, 0).toFixed(2)
        return result
    }

    return (
        <StyledAside>
            <div className="CartTitle">
                <h2>Carrinho de Compras</h2>
                <Button
                    type="button"
                    onClick={() => CloseAside()}
                >
                    X
                </Button>
            </div>

            <ul>
                {
                    cart.length !== 0 ? 
                    (
                        cart.map((product, index) => {
                            return (
                                <CartProduct key={ index } product={ product } />
                            )
                        })
                    )
                    :
                    (
                        <div>
                            <h2>Sua sacola está vazia</h2>
                            <p>Adicione itens</p>
                        </div>
                    )
                }
            </ul>
            {
                cart.length !== 0 &&
                    <div className="CartResults">
                        <div>
                            <p>Total</p>
                            <span>R$ {CartTotal()}</span>
                        </div>
                        <Button
                            type="button"
                            className="OrdinaryButton"
                            onClick={() => CleanCart()}
                        >
                            Remover Todos
                        </Button>
                    </div>
            }
        </StyledAside>
    )
}