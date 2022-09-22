import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({styles,to,title}) => {
  const navigate=useNavigate();
  return (
    <button
    onClick={()=>navigate(to)}
    type='button'
    className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
     {title}
    </button>
  )
}

export default Button