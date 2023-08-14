import React from 'react'

const Button = ({ onClick, className, children, type = 'button', bgColor = 'primary' }) => {
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
    <button type={type} onClick={onClick} className={`w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary ${bgClassName} ${className}`}>
      {children}
    </button>
  )
}

export default Button
