import React from 'react'
import styles,{layout} from '../style'
import {logo} from '../assets'
import Button from './Button'
function About() {
  return (
    <section
    id='product'
    className={layout.sectionReverse}
    >
      <div
      className={layout.sectionImgReverse}
      >
       <img 
       src={logo} 
       alt='billing'
       className='w-[100%] h-[100%] relative z-[5]'
        />
        <div
        className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'
         />
        <div
        className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'
         />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          About our <br className="sm:block hidden" /> business &
          Staff
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We have well trained and experienced technical staff who are capable of executing any task to global standard saddled to our organization that are tailored to client’s requirements and to the highest quality.
        </p>
        <div
        className='flex flex-row flex-wrap sm:mt-10 mt-6'
        >
          <Button className='mt-10' to='/services' title='Services' />
        </div>
      </div>

    </section>
  )
}

export default About