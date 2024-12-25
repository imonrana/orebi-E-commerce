import React from 'react'
import Container from '../Layouts/Container/Container'
import SectionHeadding from '../Layouts/SectionHeadding/SectionHeadding'
import ProductCard from '../Layouts/ProductCard/ProductCard'
import Flex from '../Layouts/Flex/Flex'

// img import
// img
import SpeacialOfferproductOne from "../../assets/specialOffersFour.png"
import SpeacialOfferproductTwo from "../../assets/specialOffersThree.png"
import SpeacialOfferProductThree from "../../assets/specialOffersTwo.png"
import SpeacialOfferProductFour from "../../assets/specialOffersOne.png"
const SpeacialOffer = () => {
  return (
    <section className='mt-[128px] mb-[106px]'>
         <Container>
        <SectionHeadding title="Special Offers"/>
        <Flex className="justify-between mt-12">
        <ProductCard badge = {true} color="White" src={SpeacialOfferproductOne}  alt="SpeacialOfferproductOne"/>
        <ProductCard badge = {true} color="Chocolate"  src={SpeacialOfferproductTwo}  alt="SpeacialOfferproductTwo"/>
        <ProductCard badge = {true} color="purple"src={SpeacialOfferProductThree}  alt="SpeacialOfferProductThree"/>
        <ProductCard badge = {true} color="Black" src={SpeacialOfferProductFour}  alt="SpeacialOfferProductFour"/>
        </Flex>
        </Container>
    </section>
    
  )
}

export default SpeacialOffer