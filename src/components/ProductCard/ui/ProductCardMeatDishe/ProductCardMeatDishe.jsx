import { ProductCardLayout } from "@/layouts/ProductCardLayout";
import { useProductCardParams } from "../../helper/useProductCardParams";

const ProductCardMeatDishe = () => {
   const newParams = useProductCardParams();
   return ( <ProductCardLayout params={newParams}/> );
}
 
export default ProductCardMeatDishe;