import styled, { css } from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  align-self: stretch;
  gap: 1.2rem;
`

type MethodProps = {
  selected?: boolean
}

export const Method = styled.button<MethodProps>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.6rem;
  gap: 1.2rem;

  flex: 1;
  height: 5.1rem;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme['gray-700']};

  transform: background 0.2s;

  ${(props) =>
    props.selected &&
    css`
      background: ${(props) => props.theme['purple-300']};
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};

      &:hover {
        background: ${(props) => props.theme['purple-300']};
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
      }
    `}

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-500']};

    ${(props) =>
      props.selected &&
      css`
        background: ${(props) => props.theme['purple-300']};
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
      `}
  }
`
