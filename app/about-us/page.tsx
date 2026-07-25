'use client'
const AboutUs = () => {
  return (
    <section className='flex flex-col justify-center align-center gap-4 m-4 p-6 '>
      <div className='font-extrabold text-4xl text-gray-800 space-x-2.5 flex text-center align-center justify-center mb-8 '>About Us</div>
     <div className='flex flex-row gap-4'>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.249960116613!2d78.474439874981!3d17.206659183650032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba59cf71dabdf%3A0x6357560cf5fc92cd!2sLaxmi%20Nagar%20Colony!5e0!3m2!1sen!2sin!4v1784984139707!5m2!1sen!2sin" 
        width="600" height="450" style={{border:0}}  loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
   </div> 
    <div className='flex-col flex justify-start items-center text-start gap-8  text-lg p-4 mt-4'> 
      <span>
        Midas Defence Technologies Private Limited is an active private company incorporated in defence Technologies Private Limited and is started on September 11, 2025. 
    </span>
    <span>We have an experience of more than 10 years in the industry and are experts in supplying the defense projects to military organizations.</span>
     <span>We are pioneers in the industry and dealt with lot of businesses and maintained confidentiality throughout the process and our facilities are secure and our personnel are highly trained </span>
      <span>Registered under the Registrar of Companies in Hyderabad, its office is located at Plot No. 27, Lakshmi Nagar, Thukuguda Municipality, Mankhal, Rangareddy, Telangana, India
</span>
</div></div>


    </section>
  )
}

export default AboutUs