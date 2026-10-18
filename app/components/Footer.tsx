import { BuildingOfficeIcon, EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const Footer = () => {
  return (
    <section className='bg-logo-dark text-white w-full'>
      <div className=' p-4 py-6 mt-4 flex flex-row  gap-4 justify-around align-center  '>
        {/* <div className=' all-center gap-8 text-md'> */}
        {/* <div className=' flex flex-col gap-4'>
          <a href=''>Satellite Programs </a>
         <a href=''> Launch Services</a>
         <a href=''>  Ground Services</a>
         <a href=''> AstroView</a>
         </div> */}
        <div className='flex flex-col gap-2 '>
          <Link href=''>About </Link>
          <Link href=''>Careers</Link>
          <Link href=''>  Mission & Vision </Link>
          <Link href=''>  Contact Us </Link>
        </div>
        {/* </div> */}
        <div className='md:ms-4 sm:ms-4  flex flex-col justify-center items-start  gap-2  text-md text-start'>
          <span className='all-center text-start  gap-2'>
            <UserIcon className="w-6 h-6" />
            Raghuveer Reddy</span>
          <span className='all-center text-start gap-2'>
            <EnvelopeIcon className="w-6 h-6" />
            raghuveerreddy@midasdefence.com  </span>
          <span className='all-center text-start gap-2'>
            <PhoneIcon className='w-6 h-6' />
            +91 9848883887</span>
          <span className='all-center gap-2'>
            <BuildingOfficeIcon className='w-6 h-6' />
            1-2/3 Madhapur, Hyderabad</span>
          {/* <span className='all-center gap-2' >
            <strong>GST </strong> 36AABCM1234F1Z5</span> */}
        </div>


      </div>
      <div className='all-center mt-6 mb-4 px-4 text-sm lg:text-md  '>
        © Midas Defence Technologies Pvt Ltd., 2026. All Rights Reserved.
      </div>
    </section>
  )
}

export default Footer