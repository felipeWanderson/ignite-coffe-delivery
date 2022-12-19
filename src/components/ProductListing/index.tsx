import { useContext } from 'react'
import { ProductListingContext } from '../../contexts/ProductListingContext'
import { Product } from '../Product'
import {
  Filter,
  FiltersContainer,
  ProductContainer,
  ProductListContainer,
  ProductListingHeader,
} from './styles'

export function ProductListing() {
  const { products, filters, handleSetSelectedFilter, selectedFilter } =
    useContext(ProductListingContext)

  return (
    <ProductListContainer>
      <ProductListingHeader>
        <h3>Nossos Café</h3>

        <FiltersContainer>
          <Filter
            onClick={() => handleSetSelectedFilter('all')}
            active={selectedFilter === 'all'}
          >
            Todos
          </Filter>
          {filters.map((filter) => (
            <Filter
              key={filter.id}
              onClick={() => handleSetSelectedFilter(filter.name)}
              active={selectedFilter === filter.name}
            >
              {filter.name}
            </Filter>
          ))}
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
