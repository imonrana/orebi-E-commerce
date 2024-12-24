import React from 'react'
import Container from '../Layouts/Container/Container'
import SectionHeadding from '../Layouts/SectionHeadding/SectionHeadding'
import ProductCard from '../Layouts/ProductCard/ProductCard'

// icon
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

// img
import productOne from "../../assets/ProductOne.png"
import productTwo from "../../assets/ProductTwo.png"
import ProductThree from "../../assets/ProductThree.png"
import ProductFour from "../../assets/ProductFour.png"

// slick slider
import Slider from "react-slick";



const NewArrival = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
      };
  return (
    <section>
        
        <Container>
        <SectionHeadding title ="New Arrivals"/>
        <div className="slider-container">
        <Slider {...settings}>
            <ProductCard badge ={true} src={productOne}  alt="productOne"/>
            <ProductCard badge = {false} src={productTwo}  alt="productTwo"/>
           <ProductCard badge = {true}src={ProductThree}  alt="ProductThree"/>
            <ProductCard badge = {false} src={ProductFour}  alt="ProductFour"/>
        </Slider>
        </div>
        </Container>
        
    </section>
  )
}

export default NewArrival