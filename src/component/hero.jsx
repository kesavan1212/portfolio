import HeroImg from '../assets/hero.jpeg';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai";
import React from 'react'

function Hero() {
   const config={
      subtitle: 'Im a Full-Stack Developer',
      social:{
         linkedin:'https://www.linkedin.com/in/kesavan7k',
         instagram:'https://www.instagram.com/_7k_.__?igsh=MXB4czF0ZHJxcnNueA==&utm_source=ig_contact_invite'
      }
   }
  return (
     <section className='flex flex-col md:flex-row px-10 py-32 md:py-30 bg-secondary justify-center md:items-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl py-35'  >Hi,<br/> Im <span className='text-black'>KESAVAN S</span>
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex'>
         <a  href='#' className='pr-3 text-black hover:text-white'><AiOutlineTwitter size={40} /></a>
         <a  href='#' className='pr-3 text-black hover:text-white'>< AiOutlineFacebook size={40}/></a>
         <a  href={config.social.instagram} className='pr-3 text-black hover:text-white'><AiOutlineInstagram size={40}/></a>
         <a  href={config.social.linkedin} className='pr-3 text-black hover:text-white'>< AiOutlineLinkedin size={40}/></a>
        </div>

        </div>
        <img className=' md:w-1/3' src={HeroImg}/>
     </section>
  )
}

export default Hero