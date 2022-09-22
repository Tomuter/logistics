import React from 'react'
import styles from '../style'
import {Hero, NavBar} from '../components'
import Business from '../components/Business'
import About from '../components/About'
import GalleryHome from '../components/GalleryHome'
import CTA from '../components/CTA'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="overflow-hidden">
      <div className="bg-[url('C:\Users\Martins\Documents\react-builds\logistics\src\assets\bg.jpg')] bg-cover  bg-no-repeat w-full">
        <div className='abolute inset-0 bg-gray-900 bg-opacity-50 h-screen'>
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
           <NavBar />
         </div>
      </div>
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
           <Hero />
        </div>
      </div>
      </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
           <Business />
           <About />
           <GalleryHome />
           <Testimonial />
           <CTA />
           <Footer />
          
        </div>
      </div>
    </div>
  )
}

export default Home