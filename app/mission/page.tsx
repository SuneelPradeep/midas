
const Mission = () => {
    return (
        <section className='all-center my-6 mx-4 px-4 py-6 flex-col gap-4 mt-2'>

            <h2 className="text-center  text-3xl lg:text-5xl font-bold logo-color mb-16">
                Mission & Vision
            </h2>

            <div className='text-start flex justify-start flex-col gap-3 my-4'>
                <h3 className='text-center all-center text-xl lg:text-2xl font-bold'>  MISSION   </h3>
                <span className='font-semibold '> INNOVATION WITH ENGINEERING PURPOSE </span>
                <p>
                    To design, develop, integrate and manufacture high-performance products and systems through technological innovation, multidisciplinary engineering and precision manufacturing—delivering reliable, scalable and mission-ready solutions for Defence, Aerospace, Naval and Military applications.
                </p>
            </div>
            <div className='text-start flex justify-start flex-col gap-3 mb-4'>


                {/* <ul className="list-disc">       
                    <li> To be at the forefront of the wireless communication revolution through research and development.</li>
                    <li>Investing in technologies that can lead to leadership.</li>
                    <li>Employing the finest talent to reach the top through excellence.</li>
                </ul> */}

                <h3 className='text-center all-center text-xl lg:text-2xl font-bold mt-4'>  VISION   </h3>
                <span className='font-semibold'> ENGINEERING THE FUTURE OF MISSION-CRITICAL TECHNOLOGY </span>
                <p>To be a globally recognised and trusted technology partner for Defence, Aerospace, Naval and Military applications, delivering indigenous, innovative and mission-critical solutions that enhance operational capability and contribute to India's leadership in advanced technology.
                </p>


            </div>
        </section>
    )
}

export default Mission