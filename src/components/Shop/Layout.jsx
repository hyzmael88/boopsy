import React from 'react'
import Filtros from './Filtros'
import Productos from './Productos'

function Layout() {
  return (
    <div className='w-full h-full flex '>
      <Filtros/>
      <Productos
      />
    </div>
  )
}

export default Layout