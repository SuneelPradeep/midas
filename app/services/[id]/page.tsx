'use client'
import { ServicesList } from "@/app/utils/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ServicePage({ params }: Props) {
  const { id } = await params;

  const service = ServicesList.find(
    (item) => item?.id == id
  );

  if (!service) {
    notFound();
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-3xl lg:text-5xl font-bold text-center mb-14 logo-color">
        {service.title}
      </h1>

      <div className="flex flex-col items-center gap-12">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-2/3 flex justify-center "
        >
          <Image
            src={service.anotherSrc}
            alt={service.title}
            width={900}
            height={600}
            priority
            className="
          w-full
          
          h-auto
          rounded-2xl
          shadow-lg
          object-cover
        "
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full "
        >
          <p className="text-md lg:text-lg leading-9 text-gray-700">
            {service.description}
          </p>
        </motion.div>

      </div>

    </section>
  );
}