import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form_Humano from './LAB3/srcLAB3/Form_Humano.jsx'
import Form_IA from './LAB3/srcLAB3/Form_IA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form_IA/>
  </StrictMode>,
)
