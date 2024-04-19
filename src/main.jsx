import './css/global.css'
import './css/normalize.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/components/Header/Header.jsx'
import FormProduct from './Components/components/FormProduct/formProduct.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <FormProduct />
  </React.StrictMode>,
)
