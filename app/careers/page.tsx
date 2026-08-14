// import Image from "next/image"

// const Careers = () => {
//     return (
//         <section className='all-center flex-col mt  gap-4 my-6 py-6'>
//             <div className='all-center  gap-4 my-6 py-6'>

//                 <div className='w-1/2'>
//                     <h2 className={`text-center  text-3xl lg:text-5xl font-bold text-gray-800  mb-16 mt-4`}>
//                         Careers
//                     </h2>
//                 </div>
//                 <div className="relative w-1/2 max-w-311 aspect-1244/720 overflow-hidden rounded-[30%_70%_70%_30%/50%_60%_40%_50%] select-none">
//                     <Image
//                         src="/team.jpg"
//                         alt="careers"
//                         fill
//                         sizes="(max-w-[1244px]) 100vw, 1244px"
//                         className="object-cover"
//                         priority
//                     />
//                 </div>

//             </div>

//             {/* <div className="mt-30">
//                 <p className="text-lg lg:text-xl text-gray-800">
//                     No vacancies at the moment. But we are always looking for talented individuals to join our team.
//                 </p>
//             </div> */}
//         </section>
//     )
// }

// export default Careers

"use client";

import Image from "next/image";

const Careers = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-12">

            {/* =========================
          CAREERS HERO ROW
      ========================== */}
            <div
                className="
          mx-auto
          w-full
          max-w-7xl

          flex
          flex-row

          items-center
          justify-between

          gap-8
          lg:gap-16
        "
            >

                {/* TITLE */}
                <div
                    className="
            w-1/2
            flex 
            items-center
            justify-center
          "
                >
                    <h2
                        className="
              text-center

              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-bold

              text-gray-800
            "
                    >
                        Careers
                    </h2>
                </div>


                {/* IMAGE */}
                <div
                    className="
            relative

            w-1/2

            aspect-1244/720

            overflow-hidden

            rounded-[30%_70%_70%_30%/50%_60%_40%_50%]

            select-none
          "
                >
                    <Image
                        src="/team.jpg"
                        alt="Our team"
                        fill
                        priority
                        sizes="
              (max-width: 640px) 50vw,
              (max-width: 1024px) 50vw,
              622px
            "
                        className="
              object-cover
            "
                    />
                </div>

            </div>


            {/* =========================
          CONTENT BELOW HERO
      ========================== */}

            <div
                className="
          mx-auto
          w-full
          max-w-5xl

          mt-12
          lg:mt-20

          text-center
        "
            >
                <p
                    className="
            text-base
            sm:text-lg
            lg:text-xl

            leading-relaxed

            text-gray-700
          "
                >
                    No vacancies at the moment. But we are always looking
                    for talented individuals to join our team.
                </p>
            </div>

        </section>
    );
};

export default Careers;