import { Product } from '../Product'
import {
  Filter,
  FiltersContainer,
  ProductContainer,
  ProductListContainer,
  ProductListingHeader,
} from './styles'

export function ProductListing() {
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
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductContainer>
    </ProductListContainer>
  )
}
