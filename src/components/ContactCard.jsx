import React from 'react'
import styles from '../style'
function ContactCard({content,title,Icon}) {
  return (
    <div
    className={`flex ${styles.flexCenter}  flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-black-gradient-2`}
    >
        <div
    className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <Icon className={`h-6 w-6 text-blue-500 flex`}/>
      </div>
      <h4 className={`${styles.flexCenter} text-white font-bold text-[20px]`}>{title}</h4>
      <p
      className={` ${styles.paragraph} text-center flex  font-poppins font-normal text-[18px] leading-[32px] text-white my-10`}
      >{content}</p>
    </div>
  )
}

export default ContactCard


