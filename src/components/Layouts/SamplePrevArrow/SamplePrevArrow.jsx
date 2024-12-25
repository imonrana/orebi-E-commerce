// icon
import { FaArrowLeft } from "react-icons/fa6";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="bg-[rgba(0,0,0,0.20)]  rounded-full !flex justify-center items-center w-[64px] h-[64px] cursor-pointer absolute top-1/3 -translate-y-1/3 left-0 z-10  "
        style={{ ...style,   }}
        onClick={onClick}>
          <FaArrowLeft/>
        </div>
    
  
    );
  }
  export default SamplePrevArrow;