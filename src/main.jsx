import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import CartContextProvider from './Context/cartcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <Router>
      <App />
    </Router>
  </CartContextProvider>
)
