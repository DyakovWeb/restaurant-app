import cls from "./ProductLayout.module.scss"
import { CardSkeleton } from "@/components/CardItem";

const ProductLayout = (props) => {
   const {header, product, error, loading} = props;
   return ( 
      <section className={cls.products}>
         <div className="container">
            <div className="title-wrapper">
               <h2 className="title-2">{header}</h2>
            </div>
            {error && (
            <div className="error">Упс... Произошла ошибка! Попробуйте позже</div>
            )}
            <div className={cls.cards}>
               {product}
               {loading && new Array(4).fill(0).map((_,i)=>(
               <CardSkeleton key={i}/>
            ))}
            </div>
         </div>
      </section> 
   );
}
 
export {ProductLayout};