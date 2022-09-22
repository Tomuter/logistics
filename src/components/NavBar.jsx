import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {close,logo2,menu} from '../assets'
import {navLinks} from '../constants'
const NavBar = () => {
  const navigation=useNavigate();
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-1 justify-between items-center navbar'>
      <img 
      src={logo2}
      alt='hoobank'
      className='w-[124px] h-[82px]'
      />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li
          key={nav.id}
          className={`${index===navLinks.length-1?'mr-0' : 'mr-10'} font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary text-white`}
          >
           {/* <a href={`#${nav.link}`}>{nav.title}</a> */}
           <Link to={nav.link} >{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
         src={toggle? close:menu} 
         alt='menu'
         className='w-[28px] h-[28px] object-contain'
         onClick={()=>setToggle((prev)=>!prev)}
        />
        <div
        className={`${toggle?'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li
          key={nav.id}
          className={`${index===navLinks.length-1?'mr-0' : 'mb-4'} font-poppins font-normal cursor-pointer text-[16px] text-white`}
          >
           <Link to={nav.link} >{nav.title}</Link>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar