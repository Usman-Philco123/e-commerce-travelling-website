import React from 'react'


const Contact = () => {

  
  return (
    <section className='bg-gray-100 py-10'>
    <div className='container mx-auto text-center '>
     <h2 className='text-3xl font-extrabold mb-6 text-slate-600'>Contact Us!</h2>
     <form className='max-w-md mx-auto'>

      <div className='mb-4 text-white'>
       <input 
       type="text"
       placeholder='Your Name'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="email"
       placeholder='Your Email'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="date"
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="time"
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4'>
        <button className='bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-slate-700'>Submit</button>
      </div>

     </form>
    </div>
   </section>
  )
}
export default Contact
