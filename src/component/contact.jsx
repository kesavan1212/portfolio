import React from 'react'


function Contact() {
  const config={
    Email: 'kesavans14k@gmail.com',
    Phone: '+91 9087573860 '
  }
  return (
    <section id='contact' className='flex flex-col  bg-secondary px-5 py-32'> 
   
   

    <div className='flex flex-col items-center text-white'>
        <h1 className='text-4xl  border-secondary border-b-2  mb-5 w-[170px] font-bold justify-center'>Contact</h1>
        <p className='pb-6'>if you want to discuss more in detail, please contact me</p>
        <p className='py-2'><span className='font-bold'>Email :</span>{config.Email}</p>
        <p className='py-2'><span className='font-bold'>phone :</span>{config.Phone}</p>
      
</div>
    
    </section>
  )
}

export default Contact;