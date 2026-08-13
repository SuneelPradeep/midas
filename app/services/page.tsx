'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ServicesList } from "../utils/utils";
const Services = (props: any) => {
    const { id } = props;
    return (
        <section className='my-8 p-4 bg-logo-dark  '>
            <h2 className="text-center  text-3xl lg:text-5xl font-bold text-slate-200 mb-16 mt-4">
                Our Services
            </h2>
            <div className="grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-8 text-white">
                {ServicesList?.map(item => (
                    <Link
                        key={item?.id + 111}
                        href={`/services/${item.id}`}
                        className="block"
                    >
                        <div className=" group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                            <div key={item?.id} className='relative h-48 md:h-64 lg:h-64 xl:h-84 w-full  '>
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                                <motion.div
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: .7 }}
                                    className="absolute bottom-0 left-0 p-5 text-white"
                                >
                                    <h3 className="text-xl font-bold">
                                        {item.title}
                                    </h3>


                                </motion.div>

                            </div></div></Link>
                ))}
            </div>
        </section>
    )
}
export default Services