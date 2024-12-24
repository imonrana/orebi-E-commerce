import React from 'react'

const Promotion = ({ className,src, alt}) => {
  return (
   <img className={`${className}`} src={src} alt={alt} />
  )
}

export default Promotion