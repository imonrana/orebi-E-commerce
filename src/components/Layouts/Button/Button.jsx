import React from 'react'

const Button = ({className, children}) => {
  return (
    <button className={` font-dmSans text-sm font-bold py-4 px-10 bg-primary text-[#FFFFFF] border border-[#2B2B2B] hover:bg-transparent hover:text-primary  transition-all  ${className}`}>
        {children}
    </button>
  )
}

export default Button