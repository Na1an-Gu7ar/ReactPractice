import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FetchDataProvider from './Components/fetchData/context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FetchDataProvider>
    <App />
  </FetchDataProvider>
)
