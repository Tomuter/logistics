import React from 'react'
import styles, { layout } from '../style'
import {Hero, NavBar} from '../components'
import Footer from '../components/Footer'
function Services() {
  return (
    <div className=" overflow-hidden">
      <div className="bg-[url('C:\Users\Martins\Documents\react-builds\logistics\src\assets\bg.jpg')] bg-cover  bg-no-repeat w-full">
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
              <span className={`text-gradient ${styles.flexCenter} `}>SERVICES</span> {' '}
              </h1>
          </div>         
      </div>
      </div>
    </div>
    </div>
    </div>
    <div 
  className='absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient' 
  />
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
         <h2 className={`${styles.heading2} mt-2`}>About our services</h2>
         <p className={`${styles.paragraph} ${layout.sectionInfo} leading-10 mt-[20px] mb-[120px]`}>
          Sughnen Health Logistics Limited is a third-party Health Logistic company that provides the best vehicle rental services, haulage services and reliable 3PL services in Nigeria. We provide fast and efficient vehicle rental services and haulage services in various Global Health Supply chain programs (PEPFAR, PMI, LLIN, GF HIV, PEPFAR-DDO and GF malaria) We have well trained and experienced technical staff who are capable of executing any task to global standard saddled to our organization that are tailored to client’s requirements and to the highest quality.
          Our clientele has spanned wide over industries, Government, Private sector, as well as individuals.
           All documents required are enclosed in our company profile for your necessary consideration.
           Our vision is to provide services deeply rooted in integrity, knowledge, excellence, services and long term relationship.
           We look forward to render our services to your organization.

         </p>

         <Footer />     
      </div>
    </div>
    
    </div>
  )
}

export default Services