import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//fontsource do projeto
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'

import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'

// css
import './styles/global.css'
import './styles/variables.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
