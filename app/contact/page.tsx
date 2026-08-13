'use client'
const Contact = () => {
  return (
    <section className='flex gap-4 flex-col lg:flex-row justify-center items-center mx-6 px-4 my-6 lg:my-2'>
      <div className="w-full h-84 lg:h-145 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.249960116613!2d78.474439874981!3d17.206659183650032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba59cf71dabdf%3A0x6357560cf5fc92cd!2sLaxmi%20Nagar%20Colony!5e0!3m2!1sen!2sin!4v1784984139707!5m2!1sen!2sin"
          className="w-full h-full rounded-xl" style={{ border: 0 }} loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
      <div className='w-full lg:w-full  m-4 shadow-2xl  p-4 border-2  h-full border-[#53b0d0] rounded-xl flex flex-col justify-center align-center gap-4  '>

        <span className=' mb-8 all-center text-4xl text-gray-600 dark:logo-color  font-extrabold'>Contact Us</span>
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
            <button className='cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md'>Submit</button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact