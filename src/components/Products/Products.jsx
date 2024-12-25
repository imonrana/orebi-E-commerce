import React from 'react'
import Paginate from '../Layouts/Paginate/Paginate'



const Products = () => {

 
  return ( 
        <div className='w-4/5'>
             <Paginate  itemsPerPage={12}/>
        </div>
  )
}

export default Products