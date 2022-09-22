import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {
  const navigate=useNavigate();
  return (
    <button
    onClick={()=>navigate('/aboutus')}
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >     
         <p className='font-poppins font-bold text-[20px] leading-[23px] justify-center items-center mr-2'>
          <span className='text-gradient text-center'>Contact Us</span>
         </p>
       
       <p className='font-poppins font-bold text-[20px] leading-[23px]'>
          <span className='text-gradient text-center'>Today</span>
         </p>
      </div>
    </button> 
  )
}

export default GetStarted