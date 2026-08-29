'use client'
const AboutUs = () => {
  return (
    <section className='flex flex-col  justify-center align-center gap-4 m-4 p-6 '>
      <div className='font-extrabold text-4xl text-gray-800 dark:logo-color  space-x-2.5 flex text-center align-center justify-center mb-8 '>About Us</div>
      <div className='flex flex-col lg:flex-row gap-8 items-center'>

        <div className='w-full flex flex-col justify-center gap-6 text-base md:text-lg p-4'>
          <span>
            <b> MIDAS Defence Technologies </b> provides end-to-end engineering and product development capabilities, supporting programmes from initial concept and requirements definition through system architecture, detailed design, prototyping, qualification, manufacturing, integration, deployment and lifecycle support.
          </span>
          <span>

            <h3 className="font-bold text-xl mb-3">Our integrated engineering capabilities span: </h3>
            <ul className="list-disc mb-3 ms-6">
              <li>Mechanical Engineering  </li>
              <li>Electrical & Electronics Engineering</li>
              <li>Power Electronics</li>
              <li>Servo Systems</li>
              <li>UAV & DRONE SYSTEMS</li>
              <li>POWER DISTRIBUTION Modules</li>
              <li>POWER AMPLIFIERS</li>
              <li>LOW NOISE AMPLIFIERS</li>
              <li>Thermal Engineering</li>
              <li>Systems Engineering</li>
              <li>Product Development</li>
              <li>Precision Manufacturing </li>
              <li>System Integration </li>
            </ul>
            <span>
              By bringing these disciplines together, MIDAS develops solutions engineered for performance, reliability, maintainability and operational readiness.
              Our focus is on creating indigenous technologies, advanced products and precision-engineered systems that address evolving requirements across defence forces, aerospace platforms, naval systems and military applications.
              From concept to mission readiness, MIDAS transforms complex requirements into engineered capability.
            </span></span>
        </div></div>


    </section >
  )
}

export default AboutUs