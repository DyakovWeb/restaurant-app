import { CardItem } from "@/components/CardItem";
import { ProductLayout} from "@/layouts/ProductLayout";
import { getMeatDishes, getMeatDishesErrors, getMeatDishesLoading } from "@/redux/meatDishes/selectors/meatDishesSelectors";
import { fetchNextMeatDishes } from "@/redux/meatDishes/services/fetchNextMeatDishes";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const MeatDishes = () => {
   const dispatch = useDispatch();
   const meatDishes = useSelector(getMeatDishes);
   const loading = useSelector(getMeatDishesLoading);
   const error = useSelector(getMeatDishesErrors);
   const { ref, inView } = useInView({
      threshold: 0,
   });
   useEffect(()=>{
      if(!error){
         dispatch(fetchNextMeatDishes())
      }
   }, [dispatch, error, inView])
   
   const product = meatDishes.map((el)=>{
      const props = {
         key: el.id,
         id: el.id,
         product: el.product,
         image: el.image,
         placeholder: el.placeholder,
         name: el.name, 
         desc: el.ingredients,
         weight: el.weight,
         price: el.price,
         count: 1
      }

      return (<CardItem {...props} />)
   })
   return ( 
      <>
         <ProductLayout header="Мясные блюда" product={product} error={error} loading={loading}/>
         {!loading && <div ref={ref}></div>}
      </> 
   );
}
 
export default MeatDishes;