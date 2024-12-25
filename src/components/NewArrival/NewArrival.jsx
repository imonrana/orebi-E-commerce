import React from 'react'
import Container from '../Layouts/Container/Container'
import SectionHeadding from '../Layouts/SectionHeadding/SectionHeadding'
import ProductCard from '../Layouts/ProductCard/ProductCard'



// img
import productOne from "../../assets/ProductOne.png"
import productTwo from "../../assets/ProductTwo.png"
import ProductThree from "../../assets/ProductThree.png"
import ProductFour from "../../assets/ProductFour.png"

// slick slider
import Slider from "react-slick";
import SampleNextArrow from '../Layouts/SampleNextArrow/SapmleNextArrow';
import SamplePrevArrow from '../Layouts/SamplePrevArrow/SamplePrevArrow'



const NewArrival = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <section>
        
        <Container>
        <SectionHeadding title ="New Arrivals"/>
        <div className="slider-container">
        <Slider {...settings}>
            <ProductCard badge ={true} color="Black" src={productOne}  alt="productOne"/>
            <ProductCard badge = {false} color="Black" src={productTwo}  alt="productTwo"/>
           <ProductCard badge = {true} color="Navy Blue" src={ProductThree}  alt="ProductThree"/>
            <ProductCard badge = {false} color="Gray" src={ProductFour}  alt="ProductFour"/>
           
        </Slider>
        </div>
        </Container>
        
    </section>
  )
}

export default NewArrival