import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 25.6rem;
  max-height: 31rem;

  width: 100%;
  height: 100%;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 0.6rem 3.6rem;
  padding-bottom: 2rem;

  img {
    margin-top: calc(0px - 1.5rem - 0px);
    width: 12rem;
    height: 12rem;
  }
`
export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0.4rem;
`
export const Tag = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 1.6rem;
  padding: 0.4rem 0.8rem;
  background: ${(props) => props.theme['yellow-300']};
  border-radius: 100px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-700']};
  }
`
export const ProductName = styled.strong`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  color: ${(props) => props.theme['gray-800']};
`
export const ProductDescription = styled.p`
  padding: 0 2rem;
  margin-top: 0.8rem;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme['gray-600']};
`

export const Buy = styled.div`
  margin-top: 1.6rem;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ProductPrice = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  text-align: right;
  color: ${(props) => props.theme['gray-700']};

  span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;
  }

  strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 130%;
  }
`
export const BuyAction = styled.div`
  display: flex;
  align-items: center;

  gap: 0.8rem;
`
export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 0.4rem;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;

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
export const IncrementButton = styled(QuantityButton)`
  svg {
    line {
      stroke: ${(props) => props.theme['purple-500']};
    }
  }
`
export const DecrementButton = styled(QuantityButton)`
  svg {
    line {
      stroke: ${(props) => props.theme['purple-500']};
    }
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 0.8rem;

  width: 3.8rem;
  height: 3.8rem;

  background: ${(props) => props.theme['purple-700']};
  border-radius: 6px;

  border: none;

  transition: background 0.2s;

  svg {
    fill: ${(props) => props.theme.white};
  }

  &:hover {
    background: ${(props) => props.theme['purple-500']};
  }
`
