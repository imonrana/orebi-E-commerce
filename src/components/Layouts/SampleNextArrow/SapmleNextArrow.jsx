// icon
import { FaArrowRight } from "react-icons/fa6";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="bg-[rgba(0,0,0,0.20)] rounded-full !flex justify-center items-center w-[64px] h-[64px] cursor-pointer absolute top-1/3 -translate-y-1/3 right-0  "
        style={{ ...style,   }}
        onClick={onClick}>
          <FaArrowRight/>
        </div>
    
  
    );
  }
  export default SampleNextArrow;