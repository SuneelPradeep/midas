"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Images } from "../utils/utils";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-180 overflow-hidden rounded-xl ">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-blend-color-burn"
        >
          <Image
            src={Images?.[current]?.src}
            alt={Images?.[current]?.title}
            fill
            priority
            className="object-contain w-full rounded-md h-full"
          />

          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}

          {/* Animated Text */}
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="absolute inset-0 flex flex-col justify-center items-start text-white text-center px-6"
          >
            {/* <h1 className="text-start text-5xl font-bold">
              {Images[current].title}
            </h1> */}

            <p className="text-start mt-4 text-xl max-w-xl">
              {Images[current].description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {Images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${current === index ? "bg-white w-8" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;