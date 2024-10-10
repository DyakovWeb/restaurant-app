import { ProductCardLayout } from "@/layouts/ProductCardLayout";
import { useProductCardParams } from "../../helper/useProductCardParams";

const ProductCardHotSnack = () => {
   const newParams = useProductCardParams();
   return ( <ProductCardLayout params={newParams}/> );
}
 
export default ProductCardHotSnack;