import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from './App.jsx'
import { GlobalStyles } from './components/GlobalStyles.jsx'

const theme = {
  colors: {
    primary: '#000000',
    text: '#333333',
    background: '#FFFFFF'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px'
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
)