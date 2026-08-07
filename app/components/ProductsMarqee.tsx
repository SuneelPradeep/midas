"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Product = {
    id: string | number;
    title: string;
    src: any;
};

export default function ProductsMarqee({
    products,
}: {
    products: Product[];
}) {
    // Duplicate the array for seamless looping
    const items = [...products, ...products]

    return (
        <section className="overflow-hidden py-16 bg-slate-50">

            <h2 className="text-center text-4xl font-bold logo-color mb-12">
                Our Products
            </h2>

            <motion.div
                className="flex gap-8 cursor-grab active:cursor-grabbing"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                }}
                drag="x"
                dragConstraints={{ left: -300, right: 300 }}
            >
                {items.map((product, index) => (
                    <motion.div
                        key={`${product.id}-${index}`}
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                        }}
                        transition={{ duration: 0.3 }}
                        className="
              min-w-70
              rounded-2xl
              bg-white
              shadow-lg
              overflow-hidden
              border
              border-gray-200
            "
                    >
                        <div className="relative h-56">
                            <Image
                                src={product.src}
                                alt={product.title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-center">
                                {product.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}