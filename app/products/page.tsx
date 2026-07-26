'use client';

import Image from 'next/image';
import Products from '../images/Radar_Electronics.jpg';

const ProductsPage = () => {
  return (
    <section className="flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-10">

        <div className="order-2 lg:order-1 flex-1">
          <h1 className="font-extrabold text-xl lg:text-3xl text-gray-800 dark:logo-color  mb-6">
            Products We Offer
          </h1>

          <div className="space-y-3 text-md lg:text-lg ">
            <p>• Active Antenna Array Unit (AAAU)</p>
            <p>• Transmit Receive (T/R) Modules</p>
            <p>• Wideband T/R Modules (5–18 GHz)</p>
            <p>• Central Unit</p>
            <p>• Exciters & Receivers</p>
            <p>• Up & Down Converters</p>
            <p>• Antenna Beam Forming & Tx CAL Units</p>
            <p>• Array Group Receivers</p>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex-1 flex justify-center">
          <div className="relative w-full max-w-3xl aspect-768/523">
            <Image
              src={Products}
              alt="Products"
              width={768}
              height={523}
           className="w-full max-w-3xl h-auto object-contain rounded-lg"
    priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsPage;