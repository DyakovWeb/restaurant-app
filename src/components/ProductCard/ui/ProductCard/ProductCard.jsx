import { useSelector } from "react-redux";
import { getProduct } from "@/redux/productCard/selectors/productCardSelectors";
import { productsName } from "@/const/const";
import ProductCardColdSnack from "../ProductCardColdSnack/ProductCardColdSnack";
import ProductCardHotSnack from "../ProductCardHotSnack/ProductCardHotSnack";
import ProductCardMeatDishe from "../ProductCardMeatDishe/ProductCardMeatDishe";

const ProductCard = () => {
   const product = useSelector(getProduct);
   const productOptions = ()=>{
      switch (product.product) {
         case productsName.COLDSNACKS:
            return <ProductCardColdSnack/>;
         case productsName.HOTSNACKS:
            return <ProductCardHotSnack/>   
         case productsName.MEATDISHES:
            return <ProductCardMeatDishe/>
         default:
            return null;
      }
   }
   return ( 
      <>
         {productOptions()}
      </>
   );
}
 
export {ProductCard};