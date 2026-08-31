"use client";

import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
            <div className="relative flex h-24 w-24 items-center justify-center">

                {/* Outer pulse */}
                <motion.div
                    className="
            absolute
            h-24
            w-24
            rounded-full
            border
            border-[#27748E]/10
          "
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Spinner */}
                <motion.div
                    className="
            h-16
            w-16
            rounded-full
            border-4
            border-[#27748E]/20
            border-t-[#27748E]
          "
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

            </div>
        </div>
    );
};

export default Loader;