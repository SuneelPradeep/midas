"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Product = {
    id: string | number;
    title: string;
    src: any;
};

export default function ProductsMarquee({
    data, title
}: {
    data: Product[];
    title: string;
}) {
    const x = useMotionValue(0);

    const speed = useRef(0.7);

    // duplicate 3x for seamless loop
    const items = [...data, ...data, ...data];

    useAnimationFrame(() => {
        let latest = x.get();

        latest -= speed.current;

        const width = data.length * 340;

        if (Math.abs(latest) >= width) {
            latest = 0;
        }

        x.set(latest);
    });

    return (
        <section className="relative overflow-hidden py-24 bg-linear-to-b from-white via-slate-50 to-white">

            <h2 className="text-center text-3xl lg:text-5xl font-bold logo-color mb-16">
                {title || ''}
            </h2>

            {/* Left Fade */}

            <div className="absolute left-0 top-0 z-20 h-full w-24 bg-linear-to-r from-white to-transparent" />

            {/* Right Fade */}

            <div className="absolute right-0 top-0 z-20 h-full w-24 bg-linear-to-l from-white to-transparent" />

            <motion.div
                drag="x"
                dragElastic={0.05}
                dragMomentum
                whileTap={{ cursor: "grabbing" }}
                style={{ x }}
                onDragStart={() => {
                    speed.current = 0;
                }}
                onDragEnd={() => {
                    speed.current = 0.7;
                }}
                className="flex gap-8 cursor-grab"
            >
                {items.map((product, index) => (
                    <motion.div
                        key={`${product.id}-${index}`}
                        whileHover={{
                            y: -12,
                            scale: 1.03,
                        }}
                        transition={{
                            duration: .35,
                        }}
                        className="
                min-w-75
                sm:min-w-[320px]
                lg:min-w-90
                rounded-3xl
                overflow-hidden
                bg-white
                shadow-xl
                hover:shadow-2xl
                border
                border-slate-200
                hover:border-[#27748E]
                transition-all
            "
                    >
                        <div className="relative h-72 sm:h-36 md:h-48 lg:h-64 overflow-hidden bg-slate-50">

                            <motion.div
                                whileHover={{
                                    scale: 1.08,
                                }}
                                transition={{
                                    duration: .5,
                                }}
                                className="h-full"
                            >
                                <Image
                                    src={product.src}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-8"
                                />
                            </motion.div>

                        </div>

                        <div className="p-6">

                            <h3 className="text-xl font-semibold text-center text-slate-800">
                                {product.title}
                            </h3>

                            <div className="mt-4 flex justify-center">

                                {/* <button
                                    className="
                    rounded-full
                    bg-[#27748E]
                    px-5
                    py-2
                    text-white
                    hover:bg-[#1d5d72]
                    transition
                  "
                                >
                                    Learn More →
                                </button> */}

                            </div>

                        </div>

                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
}