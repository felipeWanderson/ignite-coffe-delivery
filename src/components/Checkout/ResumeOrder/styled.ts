import styled, { css } from 'styled-components'

export const ResumeOrderContainer = styled.section`
  max-width: 44.8rem;
  width: 100%;
  height: 100%;
`

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 130%;

  color: ${(props) => props.theme['gray-800']};
  margin-bottom: 1.6rem;
`

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;

  width: 100%;
  height: 498px;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px;
`
export const ResumePayment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;
  align-self: stretch;
`

type PaymentItemProps = {
  emphasis?: boolean
}
export const PaymentItem = styled.div<PaymentItemProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }

  ${(props) =>
    props.emphasis &&
    css`
      span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 130%;
        color: ${(props) => props.theme['gray-800']};
      }
    `}
`
export const PlaceOrderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0.8rem;
  gap: 4px;

  width: 100%;
  height: 4.6rem;
  border: none;

  background: ${(props) => props.theme['yellow-500']};
  border-radius: 6px;

  align-self: stretch;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme.white};
  font-stretch: 100;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`
