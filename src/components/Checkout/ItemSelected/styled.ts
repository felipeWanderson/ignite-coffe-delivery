import styled from 'styled-components'

export const ItemSelectedContainer = styled.div`
  width: 100%;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
`
export const Item = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5.6rem;
  padding: 0.8rem 0.4rem;
`
export const Product = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  img {
    width: 6.4rem;
    height: 6.4rem;
  }
`
export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;

    color: ${(props) => props.theme['gray-800']};
  }
`
export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
`

const DefautButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 0.4rem;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
`
export const Quantity = styled(DefautButton)`
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['gray-900']};
    flex: 1;
  }
`
export const QuantityButton = styled.button`
  border: none;
  background: transparent;
`
export const IncrementButton = styled(QuantityButton)``
export const DecrementButton = styled(QuantityButton)``

export const RemoveButton = styled(DefautButton)`
  cursor: pointer;
  transition: background 0.2s;
  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-700']};
  }

  &:focus {
    box-shadow: none;
  }
  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
`

export const Price = styled.span`
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 130%;
  text-align: right;
  color: ${(props) => props.theme['gray-700']};
  flex: 1;
`
