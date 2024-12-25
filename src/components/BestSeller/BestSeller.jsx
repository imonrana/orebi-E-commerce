import React from 'react'
import Container from '../Layouts/Container/Container'
import SectionHeadding from '../Layouts/SectionHeadding/SectionHeadding'
import ProductCard from '../Layouts/ProductCard/ProductCard'
import Flex from '../Layouts/Flex/Flex'
// img
import bestSellerproductOne from "../../assets/bestSellersProductOne.png"
import bestSellerproductTwo from "../../assets/bestSellersProductTwo.png"
import bestSellerProductThree from "../../assets/bestSellersProductThree.png"
import bestSellerProductFour from "../../assets/bestSellersProductFour.png"


const BestSeller = () => {

  return (
    <section className=' mt-[118px] mb-[130px] '>
        <Container>
        <SectionHeadding title="BestSeller"/>
        <Flex className="justify-between mt-12">
        <ProductCard badge = {false} color="White" src={bestSellerproductOne}  alt="bestSellerProductFour"/>
        <ProductCard badge = {false} color="Gray"  src={bestSellerproductTwo}  alt="bestSellerproductTwo"/>
        <ProductCard badge = {true} color="White"src={bestSellerProductThree}  alt="bestSellerProductThree"/>
        <ProductCard badge = {false} color="Black" src={bestSellerProductFour}  alt="bestSellerProductFour"/>
        </Flex>
        </Container>
    </section>
  )
}

export default BestSeller