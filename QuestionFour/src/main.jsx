import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Items from './Items.jsx'
import { HeroItems } from './ItemsList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Items HeroItems={HeroItems} />
  </React.StrictMode>,
)
