export interface IProductsProviderProps {
  children: React.ReactNode
}

export interface IProductsContextValue {
  GettingProducts: () => Promise<void>
  productsData: IRequestProductsData[]
  filteredProducts: IRequestProductsData[]
  setFilteredProducts: React.Dispatch<React.SetStateAction<IRequestProductsData[]>>
  cart: ICartData[]
  setCart: React.Dispatch<React.SetStateAction<ICartData[]>>
  showCart: boolean
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IRequestProductsData {
  category: string
  id: number
  img: string
  name: string
  price: number
}

export interface ICartData {
  category: string
  id: number
  img: string
  name: string
  price: number
}