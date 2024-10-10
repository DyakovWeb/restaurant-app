import { Skeleton } from "@/ui/Skeleton";
import cls from "./CardItem.module.scss"
const CardSkeleton = () => {
   return ( 
   <div className={cls.card}>
      <Skeleton width={"100%"} height={227}/>
      <div className={cls.info}>
         <div className={cls.body}>
            <div className={cls.bodyWrapper}>
            <Skeleton width={"100%"} height={27}/>
            </div>
            <Skeleton width={"100%"} height={34}/>
         </div>
         <div className={cls.footer}>
            <Skeleton width={53} height={24}/>
            <Skeleton width={137} height={44} border={10}/>
         </div>
      </div>
   </div> 
   );
}
 
export {CardSkeleton};