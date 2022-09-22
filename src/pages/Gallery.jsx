import React from 'react'
import styles,{layout} from '../style'
import { NavBar} from '../components'
import Footer from '../components/Footer'
import { gallery } from '../constants'


function Gallery() {
  return (
    <div className=" overflow-hidden">
      <div className="bg-[url('C:\Users\Martins\Documents\react-builds\logistics\src\assets\bg.jpg')] bg-cover  bg-no-repeat w-full overflow-hidden">
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
              <span className={`text-gradient ${styles.flexCenter} `}>GALLERY</span>
              </h1>

          </div>         
      </div>
      </div>
    </div>
    </div>
    </div>
    <div className={`bg-primary text-white text-[18px] pt-4 ${styles.paddingX} ${layout.sectionInfo} pb-2`}>
      {/* <p className={`${styles.paragraph}  `}>Our team  confirming health commodities and actively taking part in 
      Last mile Delivery (PMI, PEPFAR, FP)for our client at the Sokoto 
      central medical store.</p>  */}
      <section
       className={`${styles.flexCenter} sm:px-6 px-2 sm:py-6 py-2  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
    <div
    className='flex-1 flex flex-col'
    >
    <h2 className='font-bold'>Staff photos!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our team  confirming health commodities and actively taking part in 
      Last mile Delivery (PMI, PEPFAR, FP)for our client at the Sokoto 
      central medical store
      </p>
    </div>
  </section>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
         
         <div className={` columns-1 lg:columns-3 md:columns-2 py-20 sm:columns-2 `}>
              {gallery.map((imgg,index)=>(
                <div className=''>
                <img 
                 src={imgg.img}
                 alt={index}
                 className=' h-1/2 '
                />
                </div>  
              ))}                                                  
         </div>
         <Footer />     
      </div>
    </div>
    
    </div>
  )
}

export default Gallery