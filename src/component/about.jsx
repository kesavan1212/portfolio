import React from 'react'
import AboutImg from '../assets/about.jpeg'

function About() {
  const config ={
    line1:'I am a web developer skilled in HTML, CSS, JavaScript, Bootstrap, React, Python, and SQL. I have a strong passion for web technologies and enjoy creating dynamic and responsive websites.',
    line2:'I love learning new tools and techniques to improve my development skills. Building user-friendly and efficient web applications is what drives me every day.',
    line3:'My goal is to grow continuously as a developer and contribute to projects that make a positive impact. I am committed to writing clean, maintainable code and delivering great user experiences.'
  }
  return (
    <section id='about' className='flex flex-col md:flex-row bg-primary h-[600px]'> 
   
    <div className='py-6 md:w-1/2 flex justify-center items-center'>
        <img className='md:h-[350px] md:w-[350px]' src={AboutImg} />
    </div>

    <div className='md:w-1/2 flex justify-center text-white'>
    <div className='flex flex-col justify-center px-5'>
        <h1 className='text-4xl border-b-2  mb-5 w-[170px] font-bold justify-center'>About me</h1>
        <p className='pb-6'>{config.line1}</p>
        <p className='pb-6'>{config.line2}</p>
        <p className='pb-6'>{config.line3}</p>
</div>
    </div>
    </section>
  )
}

export default About