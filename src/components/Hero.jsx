import React from 'react'
import styles from '../style'
import GetStarted from './GetStarted'
const Hero = () => {
  return (
    <section 
    id='home' 
    className={`flex md:flex-row flex-col pt-[70px] `}
    >
      <div className='flex  justify-between items-end'>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className='flex flex-row justify-between items-center w-full'>
             <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-gradient'>Sughnen 
              <br className='sm:block hidden' /> {' '}
              <span className='green-text-gradient'>Health Logistics</span> {' '}
              </h1>
          </div>
          <h1
          className=' font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'
          >Limited</h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We are a third-party Health Logistic company that provides the best vehicle rental services, haulage services and reliable 3PL services in Nigeria
        </p>
      </div>
      </div>

    </section>
  )
}

export default Hero