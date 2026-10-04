import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './core/theme/theme.css'
import './index.css'
import App from './app/App.jsx'
import './assets/styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
