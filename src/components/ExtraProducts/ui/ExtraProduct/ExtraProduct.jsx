import { useMemo } from "react";
import { useExtraProductList } from "../../helper/useExtraProductsList";
import { ExtraProductItem } from "../ExtraProductItem/ExtraProductItem";
import cls from "./ExtraProduct.module.scss";

const ExtraProduct = () => {
   const extraProducts = useExtraProductList();
   const extraProductList = useMemo(()=>extraProducts.map((product)=> (<ExtraProductItem key={product.id} product={product}/>)), [extraProducts])
   return ( 
      <div className={cls.extra}>
         <div className={cls.title}>Добавить к заказу</div>
         <div className={cls.products}>
            {extraProductList}
         </div>
      </div>
    );
}
 
export {ExtraProduct};