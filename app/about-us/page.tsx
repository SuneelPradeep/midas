'use client'
const AboutUs = () => {
  return (
    <section className='flex flex-col  justify-center align-center gap-4 m-4 p-6 '>
      <div className='font-extrabold text-4xl text-gray-800 dark:logo-color  space-x-2.5 flex text-center align-center justify-center mb-8 '>About Us</div>
     <div className='flex flex-col lg:flex-row gap-8 items-center'>
      <div className="w-full lg:w-1/2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.249960116613!2d78.474439874981!3d17.206659183650032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba59cf71dabdf%3A0x6357560cf5fc92cd!2sLaxmi%20Nagar%20Colony!5e0!3m2!1sen!2sin!4v1784984139707!5m2!1sen!2sin" 
        className="w-full h-75 md:h-112.5 rounded-xl" style={{border:0}}  loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
   </div> 
    <div className='w-full lg:w-1/2 flex flex-col justify-center gap-6 text-base md:text-lg p-4'> 
      <span>
        Midas Defence Technologies Private Limited is an active private company incorporated in defence Technologies Private Limited and is started on September 11, 2025. 
    </span>
    <span>
      <b>C.Raghuveer Reddy</b> as CTO & Co founder having 2 decades of 
experience in  module level to system level products in Defence, 
Aerospace, medical, Automobile etc. 
With expertise spanning the design, research, 
development, production, integration, and maintenance of next
generation systems and solutions, Midas Defence is focused on 
safeguarding national interests and securing critical information 
and infrastructure. The company actively collaborates with Indian 
startups and MSMEs that share its commitment to self-reliance, 
fostering an indigenous defence ecosystem with a strong export 
orientation, backed by world-class quality and process standards.
Dedicated to staying ahead of evolving threats and 
challenges, the organization ensures its clients remain future-ready 
and resilient. Guided by a steadfast pursuit of innovation and 
excellence, Midas Defence continues to deliver best-in-class 
solutions across all its initiatives. </span>
 <span>Registered under the Registrar of Companies in Hyderabad, its office is located at Plot No. 27, Lakshmi Nagar, Thukuguda Municipality, Mankhal, Rangareddy, Telangana, India
</span>
</div></div>


    </section>
  )
}

export default AboutUs