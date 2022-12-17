import styled from 'styled-components'

export const ProductListContainer = styled.div`
  padding: 3.2rem 16rem;
`

export const ProductListingHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
  margin-bottom: 38px;
`

export const FiltersContainer = styled.aside`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Filter = styled.button`
  background: transparent;
  padding: 6px 12px;
  gap: 8px;

  border: 1px solid ${(props) => props.theme['yellow-500']};
  border-radius: 100px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-700']};

  cursor: pointer;
`

export const ProductContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 32px;
`
