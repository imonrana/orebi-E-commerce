import React from 'react'

const SliderItem = ({src, alt, className}) => {
  return (
    <div >
      <img className={` w-full ${className}`} src={src} alt={alt} />
    </div>
  )
}

export default SliderItem