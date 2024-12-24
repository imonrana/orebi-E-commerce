import React, { useState } from "react";

import bannerImgOne from "../../assets/Banner_img_one.png";
import bannerImgTwo from "../../assets/banner_img_two.jpg";
import bannerImgThree from "../../assets/banner_img_three.jpg";
import bannerImgFour from "../../assets/banner_img_four.jpg";
import bannerImgFive from "../../assets/banner_img_five.jpg";
import bannerImgSix from "../../assets/banner_img_six.jpg";
import bannerImgSeven from "../../assets/banner_img_seven.jpg";
import bannerImgEight from "../../assets/banner_img_eight.jpg";
import bannerImgNine from "../../assets/banner_img_nine.jpg";
import bannerImgTen from "../../assets/banner_img_ten.jpg";

// slick sllider
import Slider from "react-slick";

import SliderItem from "../Layouts/SliderItem/SliderItem";

const Banner = () => {

const [activeSlide, setActiveSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    

    afterChange:(carrent) =>{setActiveSlide(carrent)},
    appendDots: dots => (
      <div 
        style={{
          borderRadius: "10px",
          padding: "10px",
          position:"absolute",
          left:"10%",
          top:"40%",
          transform: "translateY(-40%)",
          width:"auto",
          display:"block",
          borderRight: "6px solid white"
        }}
      >
        <ul className ="flex flex-col space-y-2"style={{ margin: "0px" } }> 
       
          {dots}
          
      
          
          </ul>
      </div>
    ),
    customPaging: i => (
      <div className="font-dmSans font-normal text-[16px] " 
        style={{
          width: "30px",
          color: i===activeSlide ? "#262626" : "transparent",
          borderRight: i === activeSlide ? "6px solid #262626" : "",
          paddingRight:"35px"
          
        }}
      >
        { String(i+1).padStart(2 ,"0") }
      </div>
    )
    
  };
 

  return (
    
    <section className="slider-container cursor-pointer ">
      <Slider {...settings}>
        <SliderItem className="  h-[430px]" src={bannerImgOne} alt={bannerImgOne}/>
        <SliderItem className=" h-[430px]" src={bannerImgTwo} alt={bannerImgTwo}/>
        <SliderItem className=" h-[430px]" src={bannerImgThree} alt={bannerImgThree}/>
        <SliderItem className=" h-[430px]" src={bannerImgFour} alt={bannerImgFive}/>
        <SliderItem className=" h-[430px]" src={bannerImgFive} alt={bannerImgFive}/>
        <SliderItem className=" h-[430px]" src={bannerImgSix} alt={bannerImgSix}/>
        <SliderItem className=" h-[430px]" src={bannerImgSeven} alt={bannerImgSeven}/>
        <SliderItem className=" h-[430px]" src={bannerImgEight} alt={bannerImgEight}/>
        <SliderItem className=" h-[430px]" src={bannerImgNine} alt={bannerImgNine}/>
        <SliderItem className=" h-[430px]" src={bannerImgTen} alt={bannerImgTen}/>
        
      </Slider>
      
    </section>

  );
};

export default Banner;
