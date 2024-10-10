import { CardItem } from "@/components/CardItem";
import { ProductLayout} from "@/layouts/ProductLayout";
import { getColdSnacks, getColdSnacksErrors, getColdSnacksLoading } from "@/redux/coldSnacks/selectors/coldSnacksSelectors";
import { fetchNextColdSnacks } from "@/redux/coldSnacks/services/fetchNextColdSnacks";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
   const dispatch = useDispatch();
   const coldSnacks = useSelector(getColdSnacks);
   const loading = useSelector(getColdSnacksLoading);
   const error = useSelector(getColdSnacksErrors);
   const { ref, inView } = useInView({
      threshold: 0,
   }); 
   useEffect(()=>{
      if(!error){
         dispatch(fetchNextColdSnacks())
      }
   }, [dispatch, error, inView])

   const product = coldSnacks.map((el)=>{
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
      <ProductLayout header="Холодные закуски" product={product} error={error} loading={loading}/>
      {!loading && <div ref={ref}></div>}
   </>
   )
}
 
export default MainPage;