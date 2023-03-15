import { Input } from "../../../../components/Input" 
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Button } from "../../../../components/Button"
import { ProductsContext } from "../../../../contexts/ProductsContext"
import { Header } from "./style"

export const HeaderDashboard = () => {
    const { productsData, setFilteredProducts, showCart, setShowCart, cart } = useContext(ProductsContext)
    const [ viewInput, setViewInput ] = useState(false)

    const navigate = useNavigate()

    const recevingValues = (data: string) => {
        const newList = productsData.filter((elt) => {
            if (elt.name.toLowerCase().includes(data.toLowerCase())
            || elt.category.toLowerCase().includes(data.toLowerCase()) 
            || elt.price.toString().includes(data)){
                return elt
            }
        })
        setFilteredProducts(newList)
    }

    const logout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USER")
        toast.warning("Encerrando Sessão")

        setTimeout(() => {
            navigate("/login")
        }, 2000)
    }

    const showInput = () => {
        setViewInput(!viewInput)
    }

    const showAside = () => {
        setShowCart(!showCart)
    }

    return (
        <Header>
                
            <div>
                <div className="titleBox">
                    <h1>Burguer</h1>
                    <p>Kenzie</p>
                </div>

                <div className="actionBox">
                    <Input 
                        type="text"
                        placeholder="Digitar Pesquisa"
                        fieldClass={ viewInput ? "ShowInput" : "RemoveInput"}
                        inputClass="SearchInput"
                        onChange={(event) => recevingValues (event.target.value)}
                    />

                    <Button
                        type="button"
                        onClick={() => showInput()}
                        className="SearchButton">
                    </Button>

                    <Button
                        type="button"
                        onClick={() => showAside()}
                        className= { viewInput ? "RemoveInput" : "CartButton"} >
                        <span>{cart.length}</span>
                    </Button>

                    <Button
                        type="button"
                        onClick={() => logout()}
                        className={ viewInput ? "RemoveInput" : "LogoutButton"}>
                    </Button>
                </div>
            </div>
        </Header>
    )
}