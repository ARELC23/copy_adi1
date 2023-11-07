import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// reactDOM interacts with the html 'root' id and loads the libraries
// React strict mode - follows reacts react rules 'STRICTLY'
// .render - render function 