import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaults'
import { ProductListingContextProvider } from './contexts/ProductListingContext'
import { OrderContextProvider } from './contexts/OrderContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderContextProvider>
          <ProductListingContextProvider>
            <Router />
          </ProductListingContextProvider>
        </OrderContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
