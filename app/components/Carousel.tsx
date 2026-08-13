// // "use client";

// // import { AnimatePresence, motion } from "framer-motion";
// // import Image from "next/image";
// // import { useEffect, useState } from "react";
// // import { Images } from "../utils/utils";

// // const Carousel = () => {
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % Images.length);
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="relative w-full aspect-16/7
// //     sm:aspect-16/7
// //     md:aspect-16/6
// //     lg:aspect-2064/500
// //     xl:aspect-2064/700 overflow-hidden rounded-xl ">
// //       <AnimatePresence mode="wait">
// //         <motion.div
// //           key={current}
// //           initial={{ opacity: 0, scale: 1.08 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           exit={{ opacity: 0 }}
// //           transition={{ duration: 1 }}
// //           className="absolute inset-0 bg-blend-color-burn p-2 sm:p-4 lg:p-6 "
// //         >
// //           <Image
// //             src={Images?.[current]?.src}
// //             alt={Images?.[current]?.title}
// //             fill
// //             priority
// //             className="object-contain rounded-md "
// //             sizes="100vw"
// //           />

// //           {/* Dark Overlay */}
// //           {/* <div className="absolute inset-0 bg-black/40" /> */}

// //           {/* Animated Text */}
// //           <motion.div
// //             initial={{ y: 120, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             transition={{
// //               duration: 2,
// //               ease: "easeOut",
// //             }}
// //             className="absolute inset-0 flex flex-col justify-center items-start text-white text-center px-6"
// //           >
// //             {/* <h1 className="text-start text-5xl font-bold">
// //               {Images[current].title}
// //             </h1> */}

// //             <p className="text-start mt-4 text-xl max-w-xl">
// //               {Images[current].description}
// //             </p>
// //           </motion.div>
// //         </motion.div>
// //       </AnimatePresence>

// //       {/* Indicators */}
// //       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
// //         {Images.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrent(index)}
// //             className={`h-3 w-3 rounded-full transition-all ${current === index ? "bg-white w-8" : "bg-gray-400"
// //               }`}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Carousel;


// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { useCallback, useEffect, useState } from "react";
// import { Images } from "../utils/utils";

// const AUTOPLAY_DELAY = 5000;

// const Carousel = () => {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1);

//   /*
//    * Change slide and remember direction.
//    */
//   const changeSlide = useCallback(
//     (newIndex: number, newDirection: number) => {
//       setDirection(newDirection);
//       setCurrent(newIndex);
//     },
//     []
//   );

//   /*
//    * Automatically move to next slide.
//    *
//    * IMPORTANT:
//    * This is a timeout instead of setInterval.
//    *
//    * Every time `current` changes, the timer starts
//    * from 5 seconds again.
//    */
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       changeSlide((current + 1) % Images.length, 1);
//     }, AUTOPLAY_DELAY);

//     return () => clearTimeout(timer);
//   }, [current, changeSlide]);

//   /*
//    * Swipe / drag handler
//    */
//   const handleDragEnd = (
//     _: MouseEvent | TouchEvent | PointerEvent,
//     info: {
//       offset: { x: number };
//       velocity: { x: number };
//     }
//   ) => {
//     const swipeDistance = info.offset.x;
//     const swipeVelocity = info.velocity.x;

//     const swipe =
//       Math.abs(swipeDistance) > 80 ||
//       Math.abs(swipeVelocity) > 500;

//     if (!swipe) return;

//     if (swipeDistance < 0) {
//       // Swipe left → next
//       changeSlide(
//         (current + 1) % Images.length,
//         1
//       );
//     } else {
//       // Swipe right → previous
//       changeSlide(
//         (current - 1 + Images.length) % Images.length,
//         -1
//       );
//     }
//   };

//   /*
//    * Dot click
//    */
//   const handleDotClick = (index: number) => {
//     if (index === current) return;

//     const newDirection = index > current ? 1 : -1;

//     changeSlide(index, newDirection);
//   };

//   return (
//     <section className="relative w-full overflow-hidden">

//       {/* Carousel container */}

//       <div
//         className="
//           relative
//           w-full
//           aspect-16/8
//           lg:aspect-2064/600
//           overflow-hidden
//           rounded-md
//           bg-transparent
//         "
//       >

//         <AnimatePresence
//           initial={false}
//           custom={direction}
//           mode="popLayout"
//         >

//           <motion.div
//             key={current}
//             custom={direction}
//             variants={{
//               enter: (direction: number) => ({
//                 x: direction > 0 ? "100%" : "-100%",
//                 opacity: 0,
//               }),

//               center: {
//                 x: 0,
//                 opacity: 1,
//               },

//               exit: (direction: number) => ({
//                 x: direction > 0 ? "-100%" : "100%",
//                 opacity: 0,
//               }),
//             }}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: {
//                 type: "spring",
//                 stiffness: 90,
//                 damping: 20,
//                 mass: 0.8,
//               },
//               opacity: {
//                 duration: 0.35,
//               },
//             }}
//             drag="x"
//             dragConstraints={{
//               left: 0,
//               right: 0,
//             }}
//             dragElastic={0.15}
//             onDragEnd={handleDragEnd}
//             className="
//               absolute
//               inset-0
//               cursor-grab
//               active:cursor-grabbing
//               touch-pan-y
//             "
//           >

//             {/* Image */}

//             <div className="absolute inset-0 p-2 sm:p-4 lg:p-6">

//               <Image
//                 src={Images[current].src}
//                 alt={Images[current].title}
//                 fill
//                 priority={current === 0}
//                 sizes="100vw"
//                 className="
//                   object-contain
//                   rounded-md
//                   scale-[1.03]
//                 "
//               />

//             </div>


//             {/* Optional dark gradient */}

//             {/* 
//             <div
//               className="
//                 absolute
//                 inset-0
//                 bg-gradient-to-r
//                 from-black/50
//                 via-black/10
//                 to-transparent
//                 pointer-events-none
//               "
//             />
//             */}


//             {/* Description */}

//             <motion.div
//               initial={{
//                 y: 50,
//                 opacity: 0,
//               }}
//               animate={{
//                 y: 0,
//                 opacity: 1,
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.25,
//                 ease: "easeOut",
//               }}
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 flex gap-4 flex-col
//                 items-start
//                 justify-center
//                 px-6
//                 sm:px-10
//                 lg:px-16
//               "
//             >
//               <h1 className="text-start text-5xl text-gray-800 font-bold">
//                 {Images[current].title}
//               </h1>
//               <p
//                 className="
//                   max-w-xl
//                   text-left
//                   text-base
//                   sm:text-lg
//                   lg:text-xl
//                   font-medium
//                   text-gray-400
//                   drop-shadow-lg
//                 "
//               >
//                 {Images[current].description}
//               </p>

//             </motion.div>

//           </motion.div>

//         </AnimatePresence>


//         {/* Previous button */}

//         <button
//           onClick={() =>
//             changeSlide(
//               (current - 1 + Images.length) %
//               Images.length,
//               -1
//             )
//           }
//           aria-label="Previous image"
//           className="
//             absolute
//             left-4
//             top-1/2
//             -translate-y-1/2
//             z-30
//             hidden
//             sm:flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-full
//             bg-black/30
//             text-white
//             backdrop-blur-md
//             transition
//             hover:bg-[#27748E]
//           "
//         >
//           ‹
//         </button>


//         {/* Next button */}

//         <button
//           onClick={() =>
//             changeSlide(
//               (current + 1) % Images.length,
//               1
//             )
//           }
//           aria-label="Next image"
//           className="
//             absolute
//             right-4
//             top-1/2
//             -translate-y-1/2
//             z-30
//             hidden
//             sm:flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-full
//             bg-black/30
//             text-white
//             backdrop-blur-md
//             transition
//             hover:bg-[#27748E]
//           "
//         >
//           ›
//         </button>


//         {/* Dots */}

//         <div
//           className="
//             absolute
//             bottom-5
//             left-1/2
//             z-30
//             flex
//             -translate-x-1/2
//             items-center
//             gap-2
//             rounded-full
//             bg-black/25
//             px-3
//             py-2
//             backdrop-blur-md
//           "
//         >

//           {Images.map((image, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               aria-label={`Go to ${image.title}`}
//               className="
//                 relative
//                 h-2
//                 overflow-hidden
//                 rounded-full
//                 transition-all
//                 duration-300
//               "
//             >

//               <motion.span
//                 animate={{
//                   width:
//                     current === index
//                       ? 28
//                       : 8,
//                   opacity:
//                     current === index
//                       ? 1
//                       : 0.5,
//                 }}
//                 transition={{
//                   duration: 0.3,
//                 }}
//                 className="
//                   block
//                   h-2
//                   rounded-full
//                   bg-white
//                 "
//               />

//             </button>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Carousel;




// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useCallback, useEffect, useState } from "react";
// import { Images } from "../utils/utils";

// const AUTOPLAY_DELAY = 5000;

// // Number of horizontal strips used for the transition
// const STRIPS = 10;

// const Carousel = () => {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const changeSlide = useCallback(
//     (newIndex: number, newDirection: number) => {
//       setDirection(newDirection);
//       setCurrent(newIndex);
//     },
//     []
//   );

//   /*
//    * Autoplay
//    *
//    * Every time the image changes,
//    * the 5 second timer starts again.
//    */
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       changeSlide((current + 1) % Images.length, 1);
//     }, AUTOPLAY_DELAY);

//     return () => clearTimeout(timer);
//   }, [current, changeSlide]);

//   /*
//    * Swipe / drag
//    */
//   const handleDragEnd = (
//     _: MouseEvent | TouchEvent | PointerEvent,
//     info: {
//       offset: { x: number };
//       velocity: { x: number };
//     }
//   ) => {
//     const distance = info.offset.x;
//     const velocity = info.velocity.x;

//     const shouldSwipe =
//       Math.abs(distance) > 80 ||
//       Math.abs(velocity) > 500;

//     if (!shouldSwipe) return;

//     if (distance < 0) {
//       changeSlide(
//         (current + 1) % Images.length,
//         1
//       );
//     } else {
//       changeSlide(
//         (current - 1 + Images.length) % Images.length,
//         -1
//       );
//     }
//   };

//   /*
//    * Dot click
//    */
//   const handleDotClick = (index: number) => {
//     if (index === current) return;

//     changeSlide(
//       index,
//       index > current ? 1 : -1
//     );
//   };

//   return (
//     <section className="relative w-full overflow-hidden my-4">

//       {/* =========================
//           CAROUSEL
//       ========================== */}

//       <div
//         className="
//           relative
//           w-full
//           aspect-16/8
//           lg:aspect-1600/800
//           overflow-hidden   
//           shadow-2xl      
//           bg-center
//     bg-no-repeat
//     bg-cover
//   "
//         style={{
//           backgroundImage: `url(${Images[current].src.src})`,
//           backgroundPosition: "right center",
//         }}
//       >
//         <div className="absolute inset-0 bg-white/50" />

//         {/* =========================
//             BACKGROUND / IMAGE
//         ========================== */}

//         <AnimatePresence
//           initial={false}
//           custom={direction}
//           mode="sync"
//         >
//           <motion.div
//             key={current}
//             custom={direction}
//             className="
//               absolute
//               inset-0
//               z-0
//               cursor-grab
//               active:cursor-grabbing
//               touch-pan-y
//             "
//             drag="x"
//             dragConstraints={{
//               left: 0,
//               right: 0,
//             }}
//             dragElastic={0.12}
//             onDragEnd={handleDragEnd}

//           >

//             {/* IMAGE */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 flex
//                 items-center
//                 justify-end
//                 overflow-hidden
//               "
//             >

//               <div
//                 className={`
//                   relative
//                   h-[75%]
//                   w-[92%]
//                   sm:w-[85%]
//                   lg:w-[72%]
//                   xl:w-[68%] me-20 pe-3

//                 `}

//               >

//                 {/* <Image
//                   src={Images[current].src}
//                   alt={Images[current].title}
//                   fill
//                   priority={current === 0}
//                   sizes="(max-width: 768px) 92vw, 70vw"
//                   className="
//                     object-contain
//                     object-right
//                     scale-[1.03]
//                   "
//                 /> */}
//               </div>

//             </div>


//             {/* =========================
//                 SOFT WHITE FADE
//                 BETWEEN TEXT AND IMAGE
//             ========================== */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-y-0
//                 left-0
//                 z-10
//                 w-[55%]

//               "
//             />

//           </motion.div>
//         </AnimatePresence>


//         {/* =========================
//             STRIP TRANSITION
//         ========================== */}

//         <AnimatePresence
//           mode="sync"
//           initial={false}
//         >
//           <motion.div
//             key={`transition-${current}`}
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               z-20
//               flex
//               flex-col
//             "
//           >
//             {Array.from({ length: STRIPS }).map((_, index) => {

//               const height = 100 / STRIPS;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{
//                     scaleX: 1,
//                     opacity: 1,
//                   }}
//                   animate={{
//                     scaleX: 0,
//                     opacity: 0,
//                   }}
//                   transition={{
//                     duration: 0.9,
//                     delay: index * 0.055,
//                     ease: [0.76, 0, 0.24, 1],
//                   }}
//                   style={{
//                     height: `${height}%`,
//                     transformOrigin:
//                       direction > 0
//                         ? "right center"
//                         : "left center",
//                   }}
//                   className="
//                     w-full
//                     bg-logo
//                   "
//                 />
//               );
//             })}
//           </motion.div>
//         </AnimatePresence>


//         {/* =========================
//             TEXT
//         ========================== */}

//         <motion.div
//           key={`text-${current}`}
//           initial={{
//             opacity: 0,
//             x: -40,
//             y: 15,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.3,
//             ease: "easeOut",
//           }}
//           className="
//             pointer-events-none
//             absolute
//             inset-y-0
//             left-0
//             z-30
//             flex
//             w-[58%]
//             flex-col
//             justify-center
//             px-6
//             sm:px-10
//             lg:w-[48%]
//             lg:px-16
//             xl:w-[45%]
//             xl:px-20
//           "
//         >
//           <h1
//             className="
//               max-w-xl
//               text-left
//               text-2xl
//               font-extrabold
//               leading-tight
//               text-gray-800
//               sm:text-4xl
//               lg:text-5xl
//               xl:text-6xl
//             "
//           >
//             {Images[current].title}
//           </h1>

//           <p
//             className="
//               mt-6
//               max-w-lg
//               text-left
//               text-sm
//               leading-6
//               text-gray-600
//               font-semibold
//               sm:text-base
//               sm:leading-7
//               lg:mt-8
//               lg:text-lg
//               lg:leading-8
//               xl:text-xl
//             "
//           >
//             {Images[current].description}
//           </p>

//         </motion.div>


//         {/* =========================
//             PREVIOUS
//         ========================== */}

//         <button
//           onClick={() =>
//             changeSlide(
//               (current - 1 + Images.length) %
//               Images.length,
//               -1
//             )
//           }
//           aria-label="Previous image"
//           className="
//             absolute
//             left-4
//             top-1/2
//             z-40
//             hidden
//             h-11
//             w-11
//             -translate-y-1/2
//             items-center
//             justify-center
//             rounded-full
//             bg-white/70
//             text-2xl
//             text-[#27748E]
//             shadow-lg
//             backdrop-blur-md
//             transition-all
//             duration-300
//             hover:scale-110
//             hover:bg-[#27748E]
//             hover:text-white
//             sm:flex
//             lg:left-6
//           "
//         >
//           ‹
//         </button>


//         {/* =========================
//             NEXT
//         ========================== */}

//         <button
//           onClick={() =>
//             changeSlide(
//               (current + 1) % Images.length,
//               1
//             )
//           }
//           aria-label="Next image"
//           className="
//             absolute
//             right-4
//             top-1/2
//             z-40
//             hidden
//             h-11
//             w-11
//             -translate-y-1/2
//             items-center
//             justify-center
//             rounded-full
//             bg-white/70
//             text-2xl
//             text-[#27748E]
//             shadow-lg
//             backdrop-blur-md
//             transition-all
//             duration-300
//             hover:scale-110
//             hover:bg-[#27748E]
//             hover:text-white
//             sm:flex
//             lg:right-6
//           "
//         >
//           ›
//         </button>


//         {/* =========================
//             DOTS
//         ========================== */}

//         <div
//           className="
//             absolute
//             bottom-5
//             left-1/2
//             z-40
//             flex
//             -translate-x-1/2
//             items-center
//             gap-2
//             rounded-full
//             bg-white/50
//             px-3
//             py-2
//             shadow-md
//             backdrop-blur-md
//           "
//         >
//           {Images.map((image, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               aria-label={`Go to ${image.title}`}
//               className="
//                 relative
//                 flex
//                 h-3
//                 items-center
//                 justify-center
//               "
//             >
//               <motion.span
//                 animate={{
//                   width:
//                     current === index ? 30 : 8,
//                   opacity:
//                     current === index ? 1 : 0.45,
//                 }}
//                 transition={{
//                   duration: 0.3,
//                   ease: "easeOut",
//                 }}
//                 className="
//                   block
//                   h-2
//                   rounded-full
//                   bg-[#27748E]
//                 "
//               />
//             </button>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Carousel;


// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { Images } from "../utils/utils";

// const AUTOPLAY_DELAY = 5000;

// // Number of horizontal strips used for the transition
// // const STRIPS = 10;

// const Carousel = () => {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [stripCount, setStripCount] = useState(6);
//   console.log('strip ', stripCount, carouselRef.current.getBoundingClientRect().height);

//   useEffect(() => {
//     const element = carouselRef.current;

//     if (!element) return;

//     const updateStrips = () => {
//       const height = element.getBoundingClientRect().height;

//       // Approximately one strip for every 45px of height
//       const calculated = Math.round(height / 45);

//       // Keep it between 4 and 10
//       const count = Math.min(
//         10,
//         Math.max(4, calculated)
//       );

//       setStripCount(count);
//     };

//     updateStrips();

//     const observer = new ResizeObserver(updateStrips);
//     observer.observe(element);

//     return () => observer.disconnect();
//   }, []);

//   const changeSlide = useCallback(
//     (newIndex: number, newDirection: number) => {
//       setDirection(newDirection);
//       setCurrent(newIndex);
//     },
//     []
//   );

//   /*
//    * Autoplay
//    *
//    * Every time the image changes,
//    * the 5 second timer starts again.
//    */
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       changeSlide((current + 1) % Images.length, 1);
//     }, AUTOPLAY_DELAY);

//     return () => clearTimeout(timer);
//   }, [current, changeSlide]);

//   /*
//    * Swipe / drag
//    */
//   const handleDragEnd = (
//     _: MouseEvent | TouchEvent | PointerEvent,
//     info: {
//       offset: { x: number };
//       velocity: { x: number };
//     }
//   ) => {
//     const distance = info.offset.x;
//     const velocity = info.velocity.x;

//     const shouldSwipe =
//       Math.abs(distance) > 80 ||
//       Math.abs(velocity) > 500;

//     if (!shouldSwipe) return;

//     if (distance < 0) {
//       changeSlide(
//         (current + 1) % Images.length,
//         1
//       );
//     } else {
//       changeSlide(
//         (current - 1 + Images.length) % Images.length,
//         -1
//       );
//     }
//   };

//   /*
//    * Dot click
//    */
//   const handleDotClick = (index: number) => {
//     if (index === current) return;

//     changeSlide(
//       index,
//       index > current ? 1 : -1
//     );
//   };

//   return (
//     <section className="relative w-full overflow-hidden my-4">

//       {/* =========================
//           CAROUSEL
//       ========================== */}


//       <div className="absolute inset-0 bg-white/50" />

//       {/* =========================
//             BACKGROUND / IMAGE
//         ========================== */}
//       <div ref={carouselRef} className="relative w-full overflow-hidden">

//         <AnimatePresence
//           initial={false}
//           custom={direction}
//           mode="sync"
//         >
//           <motion.div
//             key={current}
//             custom={direction}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//             className="relative w-full"
//           >

//             {/* =========================
//           FULL WIDTH IMAGE
//       ========================== */}

//             <Image
//               src={Images[current].src}
//               alt={Images[current].title}
//               width={Images[current].src.width}
//               height={Images[current].src.height}
//               priority={current === 0}
//               sizes="100vw"
//               className="
//           block
//           w-full
//           h-auto
//           object-contain
//           select-none
//         "
//               draggable={false}
//             />

//             {/* =========================
//           SOFT OVERLAY
//       ========================== */}

//             <div
//               className="
//           pointer-events-none
//           absolute
//           inset-0
//           bg-gradient-to-r
//           from-white/85
//           via-white/30
//           to-transparent
//         "
//             />

//             {/* =========================
//           TEXT ON TOP OF IMAGE
//       ========================== */}

//             <motion.div
//               key={`text-${current}`}
//               initial={{
//                 opacity: 0,
//                 x: -50,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.15,
//                 ease: "easeOut",
//               }}
//               className="
//           absolute
//           inset-y-0
//           left-0
//           z-20
//           flex
//           w-[55%]
//           flex-col
//           justify-center
//           px-6

//           sm:w-[52%]
//           sm:px-10

//           md:w-[50%]
//           md:px-14

//           lg:w-[48%]
//           lg:px-16

//           xl:w-[45%]
//           xl:px-20
//         "
//             >

//               <h1
//                 className="
//             text-2xl
//             font-extrabold
//             leading-tight
//             text-gray-800

//             sm:text-3xl
//             md:text-4xl
//             lg:text-5xl
//             xl:text-6xl
//           "
//               >
//                 {Images[current].title}
//               </h1>

//               <p
//                 className="
//             mt-4
//             max-w-xl
//             text-sm
//             font-medium
//             leading-6
//             text-gray-600

//             sm:text-base
//             sm:leading-7

//             md:text-lg

//             lg:mt-6
//             lg:text-xl
//             lg:leading-8
//           "
//               >
//                 {Images[current].description}
//               </p>

//             </motion.div>

//           </motion.div>
//         </AnimatePresence>



//         {/* =========================
//             STRIP TRANSITION
//         ========================== */}


//         {/* <AnimatePresence
//           mode="sync"
//           initial={false}
//         >
//           <motion.div
//             key={`transition-${current}`}
//             className="pointer-events-none
//       absolute
//       inset-0
//       z-30
//       grid
//       w-full
//       h-full
//     "
//             style={{
//               gridTemplateRows: `repeat(${stripCount}, minmax(0, 1fr))`,
//             }}
//           >
//             {Array.from({ length: stripCount }).map((_, index) => (
//               <motion.div
//                 key={`${current}-${index}`}
//                 initial={{
//                   scaleX: 1,
//                   opacity: 1,
//                 }}
//                 animate={{
//                   scaleX: 0,
//                   opacity: 0,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: index * 0.055,
//                   ease: [0.76, 0, 0.24, 1],
//                 }}
//                 style={{
//                   transformOrigin:
//                     direction > 0
//                       ? "right center"
//                       : "left center",
//                 }}
//                 className="
//           w-full
//           h-1/2
//           bg-logo
//         "
//               />
//             ))}
//           </motion.div>
//         </AnimatePresence> */}


//         {/* =========================
//             TEXT
//         ========================== */}

//         {/* <motion.div
//           key={`text-${current}`}
//           initial={{
//             opacity: 0,
//             x: -40,
//             y: 15,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.3,
//             ease: "easeOut",
//           }}
//           className="
//             pointer-events-none
//             absolute
//             inset-y-0
//             left-0
//             z-30
//             flex
//             w-[58%]
//             flex-col
//             justify-center
//             px-6
//             sm:px-10
//             lg:w-[48%]
//             lg:px-16
//             xl:w-[45%]
//             xl:px-20
//           "
//         >
//           <h1
//             className="
//               max-w-xl
//               text-left
//               text-2xl
//               font-extrabold
//               leading-tight
//               text-gray-800
//               sm:text-4xl
//               lg:text-5xl
//               xl:text-6xl
//             "
//           >
//             {Images[current].title}
//           </h1>

//           <p
//             className="
//               mt-6
//               max-w-lg
//               text-left
//               text-sm
//               leading-6
//               text-gray-600
//               font-semibold
//               sm:text-base
//               sm:leading-7
//               lg:mt-8
//               lg:text-lg
//               lg:leading-8
//               xl:text-xl
//             "
//           >
//             {Images[current].description}
//           </p>

//         </motion.div> */}


//         {/* =========================
//             PREVIOUS
//         ========================== */}

//         <button
//           onClick={() =>
//             changeSlide(
//               (current - 1 + Images.length) %
//               Images.length,
//               -1
//             )
//           }
//           aria-label="Previous image"
//           className="
//             absolute
//             left-4
//             top-1/2
//             z-40
//             hidden
//             h-11
//             w-11
//             -translate-y-1/2
//             items-center
//             justify-center
//             rounded-full
//             bg-white/70
//             text-2xl
//             text-[#27748E]
//             shadow-lg
//             backdrop-blur-md
//             transition-all
//             duration-300
//             hover:scale-110
//             hover:bg-[#27748E]
//             hover:text-white
//             sm:flex
//             lg:left-6
//           "
//         >
//           ‹
//         </button>


//         {/* =========================
//             NEXT
//         ========================== */}

//         <button
//           onClick={() =>
//             changeSlide(
//               (current + 1) % Images.length,
//               1
//             )
//           }
//           aria-label="Next image"
//           className="
//             absolute
//             right-4
//             top-1/2
//             z-40
//             hidden
//             h-11
//             w-11
//             -translate-y-1/2
//             items-center
//             justify-center
//             rounded-full
//             bg-white/70
//             text-2xl
//             text-[#27748E]
//             shadow-lg
//             backdrop-blur-md
//             transition-all
//             duration-300
//             hover:scale-110
//             hover:bg-[#27748E]
//             hover:text-white
//             sm:flex
//             lg:right-6
//           "
//         >
//           ›
//         </button>


//         {/* =========================
//             DOTS
//         ========================== */}

//         <div
//           className="
//             absolute
//             bottom-5
//             left-1/2
//             z-40
//             flex
//             -translate-x-1/2
//             items-center
//             gap-2
//             rounded-full
//             bg-white/50
//             px-3
//             py-2
//             shadow-md
//             backdrop-blur-md
//           "
//         >
//           {Images.map((image, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               aria-label={`Go to ${image.title}`}
//               className="
//                 relative
//                 flex
//                 h-3
//                 items-center
//                 justify-center
//               "
//             >
//               <motion.span
//                 animate={{
//                   width:
//                     current === index ? 30 : 8,
//                   opacity:
//                     current === index ? 1 : 0.45,
//                 }}
//                 transition={{
//                   duration: 0.3,
//                   ease: "easeOut",
//                 }}
//                 className="
//                   block
//                   h-2
//                   rounded-full
//                   bg-[#27748E]
//                 "
//               />
//             </button>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Carousel;



// "use client";

// import {
//   AnimatePresence,
//   motion,
//   PanInfo,
// } from "framer-motion";

// import Image from "next/image";

// import {
//   useCallback,
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import { Images } from "../utils/utils";


// // ========================================
// // CONFIG
// // ========================================

// const AUTOPLAY_DELAY = 5000;

// const MIN_STRIPS = 4;
// const MAX_STRIPS = 8;

// // Approximately one strip for every 55px
// const STRIP_HEIGHT = 55;


// // ========================================
// // TYPES
// // ========================================

// type Direction = 1 | -1;


// // ========================================
// // COMPONENT
// // ========================================

// const Carousel = () => {
//   const [current, setCurrent] = useState(0);

//   const [direction, setDirection] =
//     useState<Direction>(1);

//   /*
//    * Number of strips.
//    *
//    * This is calculated from the actual
//    * carousel height.
//    */
//   const [stripCount, setStripCount] =
//     useState(5);

//   /*
//    * Keep the strip count used by the
//    * currently running transition.
//    *
//    * This prevents:
//    *
//    * 5 strips -> 10 strips -> 5 strips
//    *
//    * while the screen is resizing/sliding.
//    */
//   const transitionStripCount =
//     useRef(5);

//   /*
//    * Carousel DOM element.
//    */
//   const carouselRef =
//     useRef<HTMLDivElement>(null);


//   // ========================================
//   // CALCULATE STRIPS
//   // ========================================

//   useEffect(() => {
//     const element =
//       carouselRef.current;

//     if (!element) return;


//     const updateStripCount = () => {
//       const height =
//         element.getBoundingClientRect().height;

//       if (!height) return;


//       const calculated =
//         Math.round(
//           height / STRIP_HEIGHT
//         );


//       const nextCount = Math.min(
//         MAX_STRIPS,
//         Math.max(
//           MIN_STRIPS,
//           calculated
//         )
//       );


//       setStripCount(nextCount);
//     };


//     updateStripCount();


//     const observer =
//       new ResizeObserver(() => {
//         updateStripCount();
//       });


//     observer.observe(element);


//     return () => {
//       observer.disconnect();
//     };
//   }, []);


//   // ========================================
//   // CHANGE SLIDE
//   // ========================================

//   const changeSlide = useCallback(
//     (
//       newIndex: number,
//       newDirection: Direction
//     ) => {

//       /*
//        * Lock the number of strips
//        * for this transition.
//        */
//       transitionStripCount.current =
//         stripCount;


//       setDirection(newDirection);

//       setCurrent(newIndex);
//     },
//     [stripCount]
//   );


//   // ========================================
//   // AUTOPLAY
//   // ========================================

//   useEffect(() => {

//     const timer = setTimeout(() => {

//       const next =
//         (current + 1) %
//         Images.length;


//       changeSlide(
//         next,
//         1
//       );

//     }, AUTOPLAY_DELAY);


//     return () => {
//       clearTimeout(timer);
//     };

//   }, [
//     current,
//     changeSlide,
//   ]);


//   // ========================================
//   // NEXT
//   // ========================================

//   const goNext = () => {

//     const next =
//       (current + 1) %
//       Images.length;


//     changeSlide(
//       next,
//       1
//     );
//   };


//   // ========================================
//   // PREVIOUS
//   // ========================================

//   const goPrevious = () => {

//     const previous =
//       (current - 1 + Images.length) %
//       Images.length;


//     changeSlide(
//       previous,
//       -1
//     );
//   };


//   // ========================================
//   // DRAG / SWIPE
//   // ========================================

//   const handleDragEnd = (
//     _: MouseEvent |
//       TouchEvent |
//       PointerEvent,

//     info: PanInfo
//   ) => {

//     const offsetX =
//       info.offset.x;

//     const velocityX =
//       info.velocity.x;


//     const swipe =
//       Math.abs(offsetX) > 80 ||
//       Math.abs(velocityX) > 500;


//     if (!swipe) return;


//     if (offsetX < 0) {

//       // Swipe LEFT
//       goNext();

//     } else {

//       // Swipe RIGHT
//       goPrevious();
//     }
//   };


//   // ========================================
//   // DOT CLICK
//   // ========================================

//   const handleDotClick = (
//     index: number
//   ) => {

//     if (index === current) return;


//     const newDirection: Direction =
//       index > current
//         ? 1
//         : -1;


//     changeSlide(
//       index,
//       newDirection
//     );
//   };


//   // ========================================
//   // RENDER
//   // ========================================

//   return (

//     <section className="w-full">


//       {/* =====================================
//           CAROUSEL
//       ====================================== */}

//       <div
//         ref={carouselRef}
//         className="
//           relative
//           w-full

//           h-[240px]
//           sm:h-[320px]
//           md:h-[400px]
//           lg:h-[460px]
//           xl:h-[500px]

//           overflow-hidden

//           bg-white

//           select-none
//         "
//       >


//         {/* ===================================
//             SLIDES
//         ==================================== */}

//         <AnimatePresence
//           initial={false}
//           custom={direction}
//           mode="sync"
//         >

//           <motion.div
//             key={current}
//             custom={direction}

//             variants={{
//               enter: (
//                 direction: Direction
//               ) => ({
//                 x:
//                   direction === 1
//                     ? "100%"
//                     : "-100%",
//                 opacity: 0,
//               }),

//               center: {
//                 x: 0,
//                 opacity: 1,
//               },

//               exit: (
//                 direction: Direction
//               ) => ({
//                 x:
//                   direction === 1
//                     ? "-100%"
//                     : "100%",
//                 opacity: 0,
//               }),
//             }}

//             initial="enter"

//             animate="center"

//             exit="exit"

//             transition={{
//               x: {
//                 type: "spring",
//                 stiffness: 90,
//                 damping: 22,
//                 mass: 0.8,
//               },

//               opacity: {
//                 duration: 0.35,
//               },
//             }}

//             drag="x"

//             dragConstraints={{
//               left: 0,
//               right: 0,
//             }}

//             dragElastic={0.12}

//             onDragEnd={
//               handleDragEnd
//             }

//             className="
//               absolute
//               inset-0

//               w-full
//               h-full

//               cursor-grab
//               active:cursor-grabbing

//               touch-pan-y
//             "
//           >


//             {/* =================================
//                 BACKGROUND IMAGE
//             ================================== */}

//             <div
//               className="
//                 absolute
//                 inset-0

//                 w-full
//                 h-full

//                 overflow-hidden

//                 pointer-events-none
//               "
//             >

//               <Image
//                 src={
//                   Images[current].src
//                 }

//                 alt={
//                   Images[current].title
//                 }

//                 fill

//                 priority={
//                   current === 0
//                 }

//                 sizes="100vw"

//                 draggable={false}

//                 className="
//                   object-cover
//                   object-center

//                   pointer-events-none

//                   transition-transform
//                   duration-700

//                   scale-[1.01]
//                 "
//               />

//             </div>


//             {/* =================================
//                 SOFT WHITE OVERLAY
//             ================================== */}

//             <div
//               className="
//                 pointer-events-none

//                 absolute
//                 inset-0

//                 bg-white/25
//               "
//             />


//             {/* =================================
//                 LEFT TEXT GRADIENT
//             ================================== */}

//             <div
//               className="
//                 pointer-events-none

//                 absolute
//                 inset-0

//                 bg-gradient-to-r

//                 from-white/95
//                 via-white/65
//                 to-transparent

//                 sm:from-white/90
//                 sm:via-white/45
//                 sm:to-transparent
//               "
//             />


//             {/* =================================
//                 TEXT
//             ================================== */}

//             <motion.div
//               key={`text-${current}`}

//               initial={{
//                 opacity: 0,
//                 y: 35,
//               }}

//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}

//               transition={{
//                 duration: 0.8,
//                 delay: 0.25,
//                 ease: "easeOut",
//               }}

//               className="
//                 pointer-events-none

//                 absolute
//                 inset-0

//                 z-10

//                 flex
//                 flex-col
//                 justify-center

//                 items-start

//                 px-6

//                 sm:px-10

//                 md:px-14

//                 lg:px-20

//                 xl:px-24

//                 max-w-[70%]

//                 sm:max-w-[65%]

//                 lg:max-w-[58%]
//               "
//             >

//               <h1
//                 className="
//                   text-2xl

//                   sm:text-4xl

//                   md:text-5xl

//                   lg:text-6xl

//                   font-extrabold

//                   tracking-tight

//                   text-[#1E293B]

//                   leading-tight
//                 "
//               >
//                 {
//                   Images[current].title
//                 }
//               </h1>


//               <p
//                 className="
//                   mt-4

//                   sm:mt-5

//                   max-w-xl

//                   text-sm

//                   sm:text-base

//                   md:text-lg

//                   lg:text-xl

//                   font-medium

//                   leading-relaxed

//                   text-[#475569]
//                 "
//               >
//                 {
//                   Images[current].description
//                 }
//               </p>

//             </motion.div>


//           </motion.div>

//         </AnimatePresence>


//         {/* =====================================
//             STRIPE TRANSITION
//         ====================================== */}

//         <div
//           key={`stripes-${current}`}

//           className="
//             pointer-events-none

//             absolute
//             inset-0

//             z-20

//             w-full
//             h-full

//             overflow-hidden
//           "
//         >

//           {Array.from({
//             length:
//               transitionStripCount.current,
//           }).map(
//             (_, index) => (

//               <motion.div
//                 key={`${current}-strip-${index}`}

//                 initial={{
//                   scaleX: 1,
//                 }}

//                 animate={{
//                   scaleX: 0,
//                 }}

//                 transition={{
//                   duration: 0.65,

//                   delay:
//                     index * 0.045,

//                   ease:
//                     [0.76, 0, 0.24, 1],
//                 }}

//                 style={{
//                   position:
//                     "absolute",

//                   top: `${(index /
//                     transitionStripCount.current) *
//                     100
//                     }%`,

//                   left: 0,

//                   width: "100%",

//                   height: `${100 /
//                     transitionStripCount.current
//                     }%`,

//                   transformOrigin:
//                     direction === 1
//                       ? "right center"
//                       : "left center",
//                 }}

//                 className="
//                   bg-[#27748E]/90
//                 "
//               />

//             )
//           )}

//         </div>


//         {/* =====================================
//             PREVIOUS BUTTON
//         ====================================== */}

//         <button
//           type="button"

//           onClick={
//             goPrevious
//           }

//           aria-label="Previous slide"

//           className="
//             absolute

//             left-4

//             top-1/2

//             z-30

//             hidden

//             -translate-y-1/2

//             sm:flex

//             h-11
//             w-11

//             items-center
//             justify-center

//             rounded-full

//             bg-white/90

//             text-[#27748E]

//             shadow-lg

//             backdrop-blur

//             transition-all
//             duration-300

//             hover:bg-[#27748E]

//             hover:text-white

//             hover:scale-110
//           "
//         >

//           <span className="text-2xl">
//             ‹
//           </span>

//         </button>


//         {/* =====================================
//             NEXT BUTTON
//         ====================================== */}

//         <button
//           type="button"

//           onClick={
//             goNext
//           }

//           aria-label="Next slide"

//           className="
//             absolute

//             right-4

//             top-1/2

//             z-30

//             hidden

//             -translate-y-1/2

//             sm:flex

//             h-11
//             w-11

//             items-center
//             justify-center

//             rounded-full

//             bg-white/90

//             text-[#27748E]

//             shadow-lg

//             backdrop-blur

//             transition-all
//             duration-300

//             hover:bg-[#27748E]

//             hover:text-white

//             hover:scale-110
//           "
//         >

//           <span className="text-2xl">
//             ›
//           </span>

//         </button>


//         {/* =====================================
//             DOTS
//         ====================================== */}

//         <div
//           className="
//             absolute

//             bottom-4

//             left-1/2

//             z-30

//             -translate-x-1/2

//             flex

//             items-center

//             gap-2

//             rounded-full

//             bg-black/20

//             px-3

//             py-2

//             backdrop-blur-md
//           "
//         >

//           {Images.map(
//             (image, index) => (

//               <button
//                 type="button"

//                 key={image.id ?? index}

//                 onClick={() =>
//                   handleDotClick(
//                     index
//                   )
//                 }

//                 aria-label={`Go to ${image.title}`}

//                 className="
//                   relative

//                   flex
//                   items-center
//                   justify-center

//                   h-4
//                   min-w-2
//                 "
//               >

//                 <motion.span
//                   animate={{
//                     width:
//                       current === index
//                         ? 28
//                         : 8,

//                     opacity:
//                       current === index
//                         ? 1
//                         : 0.55,
//                   }}

//                   transition={{
//                     duration: 0.25,
//                     ease: "easeOut",
//                   }}

//                   className="
//                     block

//                     h-2

//                     rounded-full

//                     bg-white
//                   "
//                 />

//               </button>

//             )
//           )}

//         </div>


//       </div>

//     </section>
//   );
// };


// export default Carousel;





"use client";

import {
  AnimatePresence,
  motion,
  PanInfo,
} from "framer-motion";

import Image from "next/image";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Images } from "../utils/utils";


// ==========================================
// SETTINGS
// ==========================================

const AUTOPLAY_DELAY = 5000;

const MIN_STRIPS = 4;
const MAX_STRIPS = 9;

const STRIP_HEIGHT = 55;


// ==========================================
// COMPONENT
// ==========================================

const Carousel = () => {

  const [current, setCurrent] =
    useState(0);

  const [direction, setDirection] =
    useState<1 | -1>(1);

  /*
   * Actual rendered carousel height.
   */
  const [carouselHeight, setCarouselHeight] =
    useState(0);

  /*
   * Number of strips for the current
   * transition.
   */
  const [stripCount, setStripCount] =
    useState(5);

  /*
   * Lock the number of strips during
   * the animation.
   */
  const transitionStripCount =
    useRef(5);

  /*
   * Carousel width.
   */
  const carouselRef =
    useRef<HTMLDivElement>(null);


  // ==========================================
  // GET IMAGE DIMENSIONS
  // ==========================================

  const currentImage =
    Images[current];

  /*
   * Next.js static image imports contain:
   *
   * src
   * width
   * height
   *
   * Example:
   *
   * {
   *   src: "/_next/static/...",
   *   width: 1600,
   *   height: 800
   * }
   */

  const imageWidth =
    currentImage.src.width;

  const imageHeight =
    currentImage.src.height;

  const imageRatio =
    imageWidth / imageHeight;


  // ==========================================
  // CALCULATE RESPONSIVE HEIGHT
  // ==========================================

  useEffect(() => {

    const element =
      carouselRef.current;

    if (!element) return;


    const updateSize = () => {

      const width =
        element.getBoundingClientRect().width;


      if (!width) return;


      /*
       * Exact height required to show
       * the entire image.
       */
      const height =
        width / imageRatio;


      setCarouselHeight(height);


      /*
       * Calculate number of strips
       * based on actual height.
       */
      const calculated =
        Math.round(
          height / STRIP_HEIGHT
        );


      const nextStripCount =
        Math.min(
          MAX_STRIPS,
          Math.max(
            MIN_STRIPS,
            calculated
          )
        );


      setStripCount(
        nextStripCount
      );
    };


    updateSize();


    const observer =
      new ResizeObserver(
        updateSize
      );


    observer.observe(element);


    window.addEventListener(
      "resize",
      updateSize
    );


    return () => {

      observer.disconnect();

      window.removeEventListener(
        "resize",
        updateSize
      );

    };

  }, [imageRatio]);


  // ==========================================
  // CHANGE SLIDE
  // ==========================================

  const changeSlide = useCallback(
    (
      newIndex: number,
      newDirection: 1 | -1
    ) => {

      /*
       * IMPORTANT:
       *
       * Lock the number of strips
       * before changing the image.
       */
      transitionStripCount.current =
        stripCount;


      setDirection(
        newDirection
      );

      setCurrent(
        newIndex
      );

    },
    [stripCount]
  );


  // ==========================================
  // AUTOPLAY
  // ==========================================

  useEffect(() => {

    const timer =
      setTimeout(() => {

        const next =
          (current + 1) %
          Images.length;


        changeSlide(
          next,
          1
        );

      }, AUTOPLAY_DELAY);


    return () => {
      clearTimeout(timer);
    };

  }, [
    current,
    changeSlide,
  ]);


  // ==========================================
  // NEXT
  // ==========================================

  const goNext = () => {

    const next =
      (current + 1) %
      Images.length;


    changeSlide(
      next,
      1
    );

  };


  // ==========================================
  // PREVIOUS
  // ==========================================

  const goPrevious = () => {

    const previous =
      (current - 1 + Images.length) %
      Images.length;


    changeSlide(
      previous,
      -1
    );

  };


  // ==========================================
  // DRAG / SWIPE
  // ==========================================

  const handleDragEnd = (
    _: MouseEvent |
      TouchEvent |
      PointerEvent,

    info: PanInfo
  ) => {

    const offsetX =
      info.offset.x;

    const velocityX =
      info.velocity.x;


    const swipe =
      Math.abs(offsetX) > 80 ||
      Math.abs(velocityX) > 500;


    if (!swipe) return;


    if (offsetX < 0) {

      goNext();

    } else {

      goPrevious();

    }

  };


  // ==========================================
  // DOT
  // ==========================================

  const handleDotClick = (
    index: number
  ) => {

    if (index === current) {
      return;
    }


    const newDirection =
      index > current
        ? 1
        : -1;


    changeSlide(
      index,
      newDirection
    );

  };


  // ==========================================
  // RENDER
  // ==========================================

  return (

    <section className="w-full">


      {/* =====================================
          RESPONSIVE IMAGE CONTAINER
      ====================================== */}

      <div
        ref={carouselRef}

        className="
          relative
          w-full
          overflow-hidden
          bg-white
          select-none
        "

        style={{
          height:
            carouselHeight
              ? `${carouselHeight}px`
              : "auto",
        }}
      >


        {/* ===================================
            SLIDE
        ==================================== */}

        <AnimatePresence
          initial={false}
          custom={direction}
          mode="sync"
        >

          <motion.div

            key={current}

            custom={direction}

            variants={{

              enter: (
                direction: 1 | -1
              ) => ({
                x:
                  direction === 1
                    ? "100%"
                    : "-100%",

                opacity: 0,
              }),

              center: {
                x: 0,
                opacity: 1,
              },

              exit: (
                direction: 1 | -1
              ) => ({
                x:
                  direction === 1
                    ? "-100%"
                    : "100%",

                opacity: 0,
              }),

            }}

            initial="enter"

            animate="center"

            exit="exit"

            transition={{

              x: {
                type: "spring",
                stiffness: 85,
                damping: 22,
                mass: 0.8,
              },

              opacity: {
                duration: 0.35,
              },

            }}

            drag="x"

            dragConstraints={{
              left: 0,
              right: 0,
            }}

            dragElastic={0.12}

            onDragEnd={
              handleDragEnd
            }

            className="
              absolute
              inset-0
              w-full
              h-full

              cursor-grab
              active:cursor-grabbing

              touch-pan-y
            "
          >


            {/* =================================
                FULL IMAGE
            ================================== */}

            <div
              className="
                absolute
                inset-0

                w-full
                h-full

                overflow-hidden

                pointer-events-none
              "
            >

              <Image

                src={
                  currentImage.src
                }

                alt={
                  currentImage.title
                }

                fill

                priority={
                  current === 0
                }

                sizes="100vw"

                draggable={false}

                className="
                  w-full
                  h-full

                  object-contain
                  object-center

                  pointer-events-none

                  scale-[1.001]
                "
              />

            </div>


            {/* =================================
                SOFT TEXT BACKGROUND
            ================================== */}

            <div
              className="
                absolute
                inset-0

                pointer-events-none

                bg-gradient-to-r

                from-white/90
                via-white/45
                to-transparent
              "
            />


            {/* =================================
                TEXT
            ================================== */}

            <motion.div

              key={`text-${current}`}

              initial={{
                opacity: 0,
                x: -35,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: "easeOut",
              }}

              className="
                pointer-events-none

                absolute
                inset-0

                z-10

                flex
                flex-col
                justify-center

                px-6

                sm:px-10

                md:px-14

                lg:px-20

                xl:px-24

                max-w-[70%]

                sm:max-w-[65%]

                lg:max-w-[58%]
              "
            >

              <h1
                className="
                  text-2xl

                  sm:text-4xl

                  md:text-5xl

                  lg:text-6xl

                  font-extrabold

                  leading-tight

                  tracking-tight

                  text-[#1E293B]
                "
              >
                {
                  currentImage.title
                }
              </h1>


              <p
                className="
                  mt-3

                  sm:mt-4

                  lg:mt-5

                  max-w-xl

                  text-sm

                  sm:text-base

                  md:text-lg

                  lg:text-xl

                  font-medium

                  leading-relaxed

                  text-[#475569]
                "
              >
                {
                  currentImage.description
                }
              </p>

            </motion.div>


          </motion.div>

        </AnimatePresence>


        {/* =====================================
            STRIPE TRANSITION
        ====================================== */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            z-20

            w-full
            h-full

            overflow-hidden
          "
        >

          {Array.from({
            length:
              transitionStripCount.current,
          }).map(
            (_, index) => {

              const count =
                transitionStripCount.current;


              return (

                <motion.div

                  key={`${current}-strip-${index}`}

                  initial={{
                    scaleX: 1,
                    opacity: 1,
                  }}

                  animate={{
                    scaleX: 0,
                    opacity: 0,
                  }}

                  transition={{
                    duration: 0.65,

                    delay:
                      index * 0.045,

                    ease:
                      [0.76, 0, 0.24, 1],
                  }}

                  style={{

                    position:
                      "absolute",

                    left: 0,

                    top:
                      `${(index / count) * 100}%`,

                    width:
                      "100%",

                    height:
                      `${100 / count}%`,

                    transformOrigin:
                      direction === 1
                        ? "right center"
                        : "left center",

                  }}

                  className="
                    bg-[#27748E]/90
                  "
                />

              );

            }
          )}

        </div>


        {/* =====================================
            PREVIOUS
        ====================================== */}

        <button

          type="button"

          onClick={
            goPrevious
          }

          aria-label="Previous image"

          className="
            absolute

            left-4

            top-1/2

            z-30

            hidden

            sm:flex

            -translate-y-1/2

            h-11
            w-11

            items-center
            justify-center

            rounded-full

            bg-white/90

            text-[#27748E]

            shadow-lg

            backdrop-blur-md

            transition-all

            hover:bg-[#27748E]

            hover:text-white

            hover:scale-110
          "
        >

          <span
            className="
              text-2xl
              leading-none
            "
          >
            ‹
          </span>

        </button>


        {/* =====================================
            NEXT
        ====================================== */}

        <button

          type="button"

          onClick={
            goNext
          }

          aria-label="Next image"

          className="
            absolute

            right-4

            top-1/2

            z-30

            hidden

            sm:flex

            -translate-y-1/2

            h-11
            w-11

            items-center
            justify-center

            rounded-full

            bg-white/90

            text-[#27748E]

            shadow-lg

            backdrop-blur-md

            transition-all

            hover:bg-[#27748E]

            hover:text-white

            hover:scale-110
          "
        >

          <span
            className="
              text-2xl
              leading-none
            "
          >
            ›
          </span>

        </button>


        {/* =====================================
            DOTS
        ====================================== */}

        <div
          className="
            absolute

            bottom-4

            left-1/2

            z-30

            -translate-x-1/2

            flex

            items-center

            gap-2

            rounded-full

            bg-black/20

            px-3
            py-2

            backdrop-blur-md
          "
        >

          {Images.map(
            (image, index) => (

              <button

                type="button"

                key={
                  image.id ??
                  index
                }

                onClick={() =>
                  handleDotClick(
                    index
                  )
                }

                aria-label={
                  `Go to ${image.title}`
                }

                className="
                  flex
                  h-4
                  min-w-2
                  items-center
                  justify-center
                "
              >

                <motion.span

                  animate={{

                    width:
                      current === index
                        ? 28
                        : 8,

                    opacity:
                      current === index
                        ? 1
                        : 0.5,

                  }}

                  transition={{
                    duration: 0.25,
                  }}

                  className="
                    block

                    h-2

                    rounded-full

                    bg-white
                  "
                />

              </button>

            )
          )}

        </div>


      </div>

    </section>
  );
};


export default Carousel;