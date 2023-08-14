import React from 'react'

const Button = ({ onClick, className, children, type = 'button', bgColor = 'primary', full }) => {
  let bgClassName = 'bg-primary'
  switch (bgColor) {
    case 'primary':
      bgClassName = 'bg-primary'
      break
    case 'secondary':
      bgClassName = 'bg-secondary'
      break
    default:
      bgClassName = 'bg-primary'
      break
  }
  return (
    <button type={type} onClick={onClick} className={`${full ? 'w-full' : 'w-auto'} px-6 py-3 mt-auto capitalize rounded-lg bg-primary ${bgClassName} ${className}`}>
      {children}
    </button>
  )
}

export default Button
