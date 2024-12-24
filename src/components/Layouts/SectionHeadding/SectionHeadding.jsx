import React from 'react'

const SectionHeadding = ({className, title}) => {
  return (
    <h2 className={` font-dmSans font-bold text-[39px] text-primary ${className}`}>{title}</h2>
  )
}

export default SectionHeadding