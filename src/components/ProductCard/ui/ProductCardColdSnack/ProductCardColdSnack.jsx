import { ProductCardLayout } from "@/layouts/ProductCardLayout";
import { useProductCardParams } from "../../helper/useProductCardParams";

const ProductCardColdSnack = () => {
   const newParams = useProductCardParams();
   return ( <ProductCardLayout params={newParams}/> );
}
 
export default ProductCardColdSnack;