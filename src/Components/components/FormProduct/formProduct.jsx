import Styles from './form.module.css'

import React from 'react'

export default function formProduct() {
  return (
    <div className={Styles.form} >
      <form action="">
        
      <h1>Crud</h1>
      <input type="text" name="name" id="name" placeholder='Nombre' />
      <textarea placeholder='Describa el producto'/>
      <input type="number" name="" id="" placeholder='Stock'/>
      <button>Enviar</button>




      </form>

    </div>
  )
}
