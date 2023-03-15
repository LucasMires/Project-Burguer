import { useContext } from "react"
import { CartAside } from "../../components/Cart/CartAside"
import { CartModal } from "../../components/Cart/CartModal"
import { ProductsContext } from "../../contexts/ProductsContext"
import { HeaderDashboard } from "./components/Header"
import { MainDashboard } from "./components/Main"

export const DashboardPage = () => {

    const { showCart } = useContext(ProductsContext)

    return (
        <>  
            {
                showCart &&
                 <CartModal>
                     <CartAside />
                 </CartModal>
            }
            <HeaderDashboard/>
            <MainDashboard />
        </>
    )   
}