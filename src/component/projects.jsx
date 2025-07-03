import React from 'react'
import Ecommerce1 from '../assets/e-commere1.png'
import Ecommerce2 from '../assets/e-commerce2.png'
import booksky from '../assets/booksky.png'
 

function Projects() {
  const config={
    projects:[
    {
      image:Ecommerce1,
      description:'Websites built with HTML, CSS, and JavaScript to display electronics and online shopping.',
      link:''
    },
    {
      image: Ecommerce2,
      description:'A basic website for ordering food online using HTML, CSS, and JavaScript.',
      link:'',
    },
    {
      image:booksky,
      description:'Bookshy is an app to keep track of books by adding and removing their details.',
      link:''
    }
  ]
  }
  return (
    <section id='projects'className='flex flex-col py-20 px-14 justify-center bg-secondary text-white'>
    <div className='w-full'>
    <div className='flex flex-col jpx-10 py-8 '>
        <h1 className='flex justify-center text-4xl mb-5 md:w-[1200px] font-bold '>PROJECTS</h1>
         <p className='mx-auto w-[450px] '>These are some projects I made to show what I can do in web development.</p>
    </div>
    </div>

    <div className='w-full'>
    <div className='flex flex-col  md:flex-row px-4 gap-5'>
      {config.projects.map((projects)=>(
        <a href={projects.link}>
        <div className='relative'>
        <img className='h-[200px] w-[380px]' src={projects.image}/>
        <div className='project-desc'>
        <p className='text-white text-center px-5 py-5'>{projects.description}</p>
        
        <div className='flex justify-center'>
          <a className='btn' target='_blank' href={Projects.link}>View project
            </a>
            </div>
        </div>
      </div>
      </a>
      ))}
      

        
       
    </div>
        
    </div>
    </section>
  );
}

export default Projects