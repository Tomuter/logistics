import React from 'react'
import { logo,work2 ,work3} from '../assets'
import styles,{layout} from '../style'
import Button from './Button'
function GalleryHome() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Check out <br className="sm:block hidden" /> some of our works
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Check out some of our work done in different states here in Nigeria
      </p>
      <Button styles='mt-10' to='/gallery' title='Gallery' />
      </div>
      <div className={layout.sectionImg}>
        <img 
        src={logo}
        alt='card'
        className='w-[100%] h-[100%]  object-cover'
        />
      </div>
    </section>
  )
}

export default GalleryHome