import React from 'react'

const Badge = ({ className, title}) => {
  return (
    <span className={`font-dmSans font-bold text-sm text-[#FFFFFF] py-2 px-8 bg-primary absolute top-[20px] left-[20px] ${className}`}>{title}</span>
  )
}

export default Badge