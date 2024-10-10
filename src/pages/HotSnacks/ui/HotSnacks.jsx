import { CardItem } from "@/components/CardItem";
import { ProductLayout} from "@/layouts/ProductLayout";
import { getHotSnacks, getHotSnacksErrors, getHotSnacksLoading } from "@/redux/hotSnacks/selectors/hotSnacksSelectors";
import { fetchNextHotSnacks } from "@/redux/hotSnacks/services/fetchNextHotSnacks";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const HotSnacks = () => {
   const dispatch = useDispatch();
   const hotSnacks = useSelector(getHotSnacks);
   const loading = useSelector(getHotSnacksLoading);
   const error = useSelector(getHotSnacksErrors);
   const { ref, inView } = useInView({
      threshold: 0,
    }); 
   useEffect(()=>{
      if(!error){
         dispatch(fetchNextHotSnacks())
      }
   }, [dispatch, error, inView])
   const product = hotSnacks.map((el)=>{
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
      <ProductLayout header="Горячие закуски" product={product} error={error} loading={loading}/>
      {!loading && <div ref={ref}></div>}
   </> 
   );
}
 
export default HotSnacks;