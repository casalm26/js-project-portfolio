import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from './App.jsx'

import './index.css'

const theme = {
  colors: {
    primary: '#000000',
    text: '#333333',
    background: '#FFFFFF'
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
