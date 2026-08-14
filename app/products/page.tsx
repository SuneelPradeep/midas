import ProductsMarqee from "../components/ProductsMarqee";
import { Products } from "../utils/utils";

export default function ProductsPage() {
  return (
    <ProductsMarqee data={Products} title="Our Products" />
  );
}
