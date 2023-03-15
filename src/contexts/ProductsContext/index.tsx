import { createContext, useEffect, useState } from "react"
import { api } from "../../services"
import {
  ICartData,
  IProductsContextValue,
  IProductsProviderProps,
  IRequestProductsData,
} from "./types"

export const ProductsContext = createContext({} as IProductsContextValue)

export const ProductsProvider = ({ children }: IProductsProviderProps) => {

  const [productsData, setProductsData] = useState<IRequestProductsData[]>([])
  const [filteredProducts, setFilteredProducts] = useState<IRequestProductsData[]>([])
  const [ cart, setCart ] = useState<ICartData[]>([])
  const [ showCart, setShowCart ] = useState(false)

  const GettingProducts = async () => {
    const Token = localStorage.getItem("@TOKEN")
    try {
      const response = await api.get("/products", {
        headers: {
          authorization: `Bearer ${Token}`,
        },
      })
      setProductsData(response.data)
      setFilteredProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        GettingProducts,
        productsData,
        filteredProducts,
        setFilteredProducts,
        cart, setCart, showCart, setShowCart
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
