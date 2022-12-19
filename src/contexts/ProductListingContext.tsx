import { createContext, ReactNode, useMemo, useState } from 'react'
import { products, filters } from '../data'

type Product = {
  id: string
  image_url: string
  tags: string[]
  title: string
  description: string
  price: number
  stock: number
}

type Filters = {
  id: string
  name: string
}

interface ProductListingContextType {
  products: Product[]
  filters: Filters[]
  selectedFilter: string
  handleSetSelectedFilter: (filters: string) => void
}

export const ProductListingContext = createContext(
  {} as ProductListingContextType,
)

interface ProductListingContextProviderProps {
  children: ReactNode
}

export function ProductListingContextProvider({
  children,
}: ProductListingContextProviderProps) {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const productsData = useMemo(() => {
    const filtredProduct: Product[] = []

    if (selectedFilter === 'all') {
      return products
    }

    products.forEach((product) => {
      if (product.tags.includes(selectedFilter)) {
        filtredProduct.push(product)
      }
    })

    return filtredProduct
  }, [selectedFilter])

  const handleSetSelectedFilter = (filter: string) => {
    setSelectedFilter(filter)
  }

  return (
    <ProductListingContext.Provider
      value={{
        products: productsData,
        filters,
        selectedFilter,
        handleSetSelectedFilter,
      }}
    >
      {children}
    </ProductListingContext.Provider>
  )
}
