import React from 'react'
import Container from '../../Layouts/Container/Container'
import PageHeading from '../../Layouts/PageHeading/PageHeading'
import Flex from '../../Layouts/Flex/Flex'
import SideBar from '../../SideBar/SideBar'
import Products from '../../Products/Products'


const Shop = () => {
  return (
    <main>
         <section className='mb-[140px]'>
        
        <Container>
        <PageHeading title="Products"/>
        <Flex className="gap-x-10">
            <SideBar/>
            <Products/>

        </Flex>
        </Container>
    </section>
    </main>
  )
}

export default Shop