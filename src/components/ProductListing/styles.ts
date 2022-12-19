import styled, { css } from 'styled-components'

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
    font-size: 3.2rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
  margin-bottom: 3.8rem;
`

export const FiltersContainer = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

interface FiltersProps {
  active?: boolean
}
export const Filter = styled.button<FiltersProps>`
  background: transparent;
  padding: 0.6rem 1.2rem;
  gap: 8rem;

  border: 0.1rem solid ${(props) => props.theme['yellow-500']};
  border-radius: 10rem;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-700']};

  cursor: pointer;

  &:focus {
    box-shadow: none;
  }

  ${(props) =>
    props.active &&
    css`
      border: 0.2rem solid ${(props) => props.theme['yellow-500']};
    `}
`

export const ProductContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 3.2rem;
`
