import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']} ;
  }
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
  }
`
