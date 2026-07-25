'use client'
import Image from 'next/image'
import Products from '.././images/Radar_Electronics.jpg'
const products = () => {
  return (
    <section className='flex justify-around align-center'>
      <div className='flex flex-col justify-center align-center gap-4 m-4 '>
        <span className='font-extrabold text-3xl text-gray-800'>Products we offer </span>
        <span className='mt-2 flex flex-col gap-3 text-md'>
          <p>Active Antenna Array Unit (AAAU)</p>
 <p>Transmit Receive (T/R) Modules</p>
 <p>Wideband T/R Modules (5-18 GHz)</p>
 <p>Central Unit</p>
 <p>Exciters & Receivers</p>
 <p>Up & Down Converters</p>
 <p>Antenna Beam Forming & Tx CAL Units</p>
 <p>Array Group Receivers</p></span>
        </div>
        <div>
          <Image src={Products} alt='products' width='auto' height='auto' className='object-contain' />
        </div>
    </section>
  )
}

export default products