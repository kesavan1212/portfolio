import React from 'react'
import ResumeImg from '../assets/resume.jpeg'

function Resume() {
  const config={
      link: 'https://drive.google.com/file/d/1mguY4L7nr1RyCX6q9juy7JkImMC3Bf7X/view?usp=drive_link'
    }
  return (
    
    <section id='resume' className='flex flex-col md:flex-row bg-primary h-[400px] justify-center items-center'> 
   
    <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <img className='md:w-[550px] w-[400px]' src={ResumeImg} />
    </div>

    <div className='md:w-1/2 flex justify-center text-white'>
    <div className='flex flex-col justify-center'>
        <h1 className='text-4xl border-b-2  mb-5 w-[140px] font-bold justify-center'>Resume</h1>
        <p className='pb-6'>you can view my resume  <a className='btn'  href={config.link}>Download</a></p>
        
</div>
    </div>
    </section>
  )
}

export default Resume;