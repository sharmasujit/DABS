import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/global.css"
import RoutingConfig from './config/routing.config'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutingConfig/>
  </StrictMode>,
)
