import Carousel from "./components/Carousel";
import ProductsMarqee from "./components/ProductsMarqee";
import Mission from "./mission/page";
import Services from "./services/page";
import { Products } from "./utils/utils";

export default function Home() {
  return (
    <div
    // className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <main
      // className="flex flex-1 w-full h-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"
      >
        <div className='flex flex-col gap-4 '>
          <Carousel />
          <Mission />
          <Services color />
          <ProductsMarqee products={Products} />
        </div>
      </main>
    </div>
  );
}
