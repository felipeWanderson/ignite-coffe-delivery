import { Product } from '../Product'
import {
  Filter,
  FiltersContainer,
  ProductContainer,
  ProductListContainer,
  ProductListingHeader,
} from './styles'

interface ProductProps {
  id: string
  image_url: string
  tags: string[]
  title: string
  description: string
  price: number
  stock: number
}

interface ProductListingProps {
  products: ProductProps[]
}

export function ProductListing({ products }: ProductListingProps) {
  return (
    <ProductListContainer>
      <ProductListingHeader>
        <h3>Nossos Café</h3>

        <FiltersContainer>
          <Filter>Tradicional</Filter>
          <Filter>Especial</Filter>
          <Filter>Com Leite</Filter>
          <Filter>Alcoólico</Filter>
          <Filter>Gelado</Filter>
        </FiltersContainer>
      </ProductListingHeader>
      <ProductContainer>
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </ProductContainer>
    </ProductListContainer>
  )
}
