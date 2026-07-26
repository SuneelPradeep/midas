'use client'
const Contact = () => {
  return (
    <section className='m-4 shadow-2xl p-4 border-2  h-full border-[#53b0d0] rounded-xl flex flex-col justify-center align-center gap-4  '>
     <span className='mb-8 all-center text-4xl text-gray-600 dark:logo-color  font-extrabold'>Contact Us</span>
      <div className='gap-4 '>
         <form className='flex h-full flex-col gap-6'>
          <span className='flex flex-col '><label className='font-semibold text-lg text-gray-500'>Name:</label>
          <input type="text" placeholder='Your Name' className='outline-none border-2 border-gray-400 rounded-md p-2 w-full my-4' />
          </span>
          <span className='flex flex-col '><label className='font-semibold text-lg text-gray-500'>Mail:</label>
          <input type="email" placeholder='Your Email' className='outline-none border-2 border-gray-400 rounded-md p-2 w-full my-4' />
          </span>
          <span className='flex flex-col'><label className='font-semibold text-lg text-gray-500'>Message:</label>
          <textarea placeholder='Your Message' className='outline-none border-2 border-gray-400 rounded-md p-2 w-full mb-8 mt-4' />
          </span>
          <button  className='cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md'>Submit</button>
         </form>

      </div>
    </section>
  )
}

export default Contact