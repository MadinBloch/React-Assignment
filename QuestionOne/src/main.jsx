import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Person from './Person.jsx'
import './index.css'

let PersonObject = {
    Name : "Madin",
    Age : 21
}
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Person Person={PersonObject}/>
  </React.StrictMode>,
)
