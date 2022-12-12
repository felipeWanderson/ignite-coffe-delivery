import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px #DBAC2C;
  }
  body {
    background: #FAFAFA;
    color: #403937;
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 62.5%;
  }
`
