import React from 'react'
import styles,{layout} from '../style'
import { NavBar} from '../components'
import Footer from '../components/Footer'
import FeedbackCard from '../components/FeedbackCard'
import ContactCard from '../components/ContactCard'
import { ChatBubbleLeftRightIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
function AboutUs() {
  return (
    <div className=" overflow-hidden">
      <div className="bg-[url('C:\Users\Martins\Documents\react-builds\logistics\src\assets\bg.jpg')] bg-cover  bg-no-repeat ">
    <div className='abolute inset-0 bg-gray-900 bg-opacity-50'>     
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
       <div className={`${styles.boxWidth}`}>
         <NavBar />
       </div>
    </div>
    <div className={` ${styles.flexCenter} py-[140px]`}>
      <div className={`${styles.boxWidth} `}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className='flex flex-row justify-between items-center w-full'>
             <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              <span className={`text-gradient ${styles.flexCenter} `}>CONTACT US</span> {' '}
              </h1>

          </div>         
      </div>
      </div>
    </div>
    </div>
    </div>
    <div 
  className='absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient overflow-hidden' 
  />
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>           
         <div className={`flex flex-wrap sm:justify-start justify-center   feedback-container relative z-[1] mt-10`}>
            <ContactCard Icon={ChatBubbleLeftRightIcon} title='Chat with us' content="We've got live Support Staff waiting to help you Monday to Friday from 9am to 5pm WAT." />
            <ContactCard Icon={EnvelopeIcon} title='Email Us' content="Simple drop us an email at sughnenhealthlogistics@gmail.com  and you'll receive a reply within 24 hours" />
            <ContactCard Icon={PhoneIcon} title='Give us a call' content="Give us a ring.Our Experts are standing by Monday to Friday from 9am to 5pm WAT. +2348066374620" />           
         </div> 
         
            
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.paddingY}`}>
    <p
    className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'
    ><span className='font-semibold text-[20px]'
    >Office:{' '}</span>
    No 8 Offa Road, Old Airport Area, Sokoto</p>
    <p
    className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'
    ><span
    className='font-semibold text-[20px]'
    >Tel:{' '}</span>+2348066374620</p>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} `}>
    <Footer />
    </div>   
    </div>
  )
}

export default AboutUs