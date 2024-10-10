import { Skeleton } from "@/ui/Skeleton";
import cls from "./ProductCardLayout.module.scss"
import { Link } from "react-router-dom";
import Arrow from "@/assets/image/icons/arrow.svg"
import { useMediaQuery } from "@uidotdev/usehooks";

const ProductCardLayoutSkeleton = () => {
   const isLaptop = useMediaQuery("only screen and (max-width : 1439px)");
   const isTablet = useMediaQuery("only screen and (max-width : 1023px)");
   const isMobileS = useMediaQuery("only screen and (max-width : 474px)");
   return (
   <section className={cls.cardProduct}>
      <div className={cls.wrapper}>
         {isTablet ? null : <Link to={-1} className={cls.link}><Arrow/>Вернуться назад</Link>}
         <div className={cls.card}>
            <Skeleton width={isLaptop ? 500 : 600} height={400}/>
            <div className={cls.description}>
               <div className={cls.body}>
                  <div className={cls.topContent}>
                     <Skeleton width={200} height={30}/>
                     <Skeleton width={isMobileS ? 300 : 410} height={40}/>
                  </div>
                  <div className={cls.bottomContent}>
                     <Skeleton width={60} height={16}/>
                     <div className={cls.bottomWrapper}>
                        <Skeleton width={145} height={50} border={10}/>
                        <Skeleton width={60} height={30}/>
                     </div>
                  </div>
               </div>
               <div className={cls.footer}>
                  {new Array(4).fill(0).map((_,i)=>(
                     <Skeleton width={35} height={40} key={i}/>
                  ))}
               </div>
            </div>
         </div> 
      </div>
   </section>             
   );
}
 
export {ProductCardLayoutSkeleton};