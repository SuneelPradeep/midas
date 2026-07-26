import { BuildingOfficeIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"

const Footer = () => {
  return (
    <>
    <section className=' m-4 flex lg:flex-row flex-col gap-4 justify-around align-center border-t-4 border-[#27748E] pt-4'>
      <div className=' all-center gap-8 text-md'>
         <div className=' flex flex-col gap-4'>
          <a href=''>Satellite Programs </a>
         <a href=''> Launch Services</a>
         <a href=''>  Ground Services</a>
         <a href=''> AstroView</a>
         </div>
         <div className='flex flex-col gap-2   '>
         <a href=''>About </a>
         <a href=''>Careers</a>
        <a href=''>  Missions </a>
        <a href=''> Press Releases</a> 
        <a href=''> Vendor Registration</a>
        <a href=''> Research</a>
         </div>
      </div>
      <div className='md:ms-4 sm:ms-4  flex flex-col justify-center items-start  gap-2  text-md text-start'>
       <span className='all-center text-start  gap-2'>
      <EnvelopeIcon className="w-6 h-6" />
midas@gmail.com  </span>
      <span className='all-center text-start gap-2'>
       <PhoneIcon  className='w-6 h-6' />
 8332942540</span>
      <span className='all-center gap-2'>
        <BuildingOfficeIcon className='w-6 h-6'  />
 1-2/3 Madhapur, Hyderabad</span>
      <span className='all-center gap-2' ><strong>GST </strong> 36AABCM1234F1Z5</span>
      </div>

      
    </section>
    <div className='all-center mt-6 px-4 text-sm lg:text-md text-gray-600 dark:logo-color  '>
        © Midas Defence Technologies Pvt Ltd., 2026. All Rights Reserved.
      </div>
    </>
  )
}

export default Footer