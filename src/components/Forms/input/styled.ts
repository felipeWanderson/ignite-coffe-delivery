import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  size: 'small' | 'medium' | 'large'
}

export const InputContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.2rem;
  gap: 4px;
  height: 4.2rem;
  background: ${({ theme }) => theme['gray-300']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 4px;

  ${(props) =>
    props.size === 'small' &&
    css`
      width: 6rem;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 20rem;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 100%;
      flex-grow: 1;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme['yellow-700']};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border-color: ${({ theme }) => theme['gray-400']};
    `}

  input {
    border: none;
    background: transparent;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-700']};
    flex: none;
    order: 0;
    flex-grow: 1;

    &::placeholder {
      color: ${({ theme }) => theme['gray-600']};
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  span {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-600']};
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`
