import { getProduct } from "@/redux/productCard/selectors/productCardSelectors"
import { useSelector } from "react-redux"

export const useProductCardParams = ()=>{
   const product = useSelector(getProduct);
   return {
      id: product.id,
      product: product.product,
      name: product.name,
      img: product.image,
      ingred: product.ingredients,
      weight: product.weight,
      squirrels: product.squirrels,
      fats: product.fats,
      carbohydrates: product.carbohydrates,
      calories: product.calories,
      price: product.price,
      placeholder: product.placeholder
   }
}