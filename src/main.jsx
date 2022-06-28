import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TicketContextProvider } from './components/context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TicketContextProvider>

      <App />
    </TicketContextProvider>
  </React.StrictMode>
)
