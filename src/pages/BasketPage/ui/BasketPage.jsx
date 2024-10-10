import classNames from "classnames";
import cls from "./BasketPage.module.scss";
import { Link } from "react-router-dom";
import Arrow from "@/assets/image/icons/arrow-left.svg";
import EmptyBasket from "@/assets/image/icons/empty-basket.svg";
import { BasketItem } from "@/components/BasketItem";
import { useSelector } from "react-redux";
import { getBasket } from "@/redux/basket/selectors/basketSelectors";
import { useMemo } from "react";
import { ExtraProduct } from "@/components/ExtraProducts";
import { Order } from "@/components/Order";
import { productsName } from "@/const/const";

const BasketPage = () => {
   const basket = useSelector(getBasket);
   const uniqueKey = (product)=> {
      switch (product.product) {
         case productsName.COLDSNACKS:
            return `${product.product} - ${product.id}`;
         case productsName.HOTSNACKS:
            return `${product.product} - ${product.id}`;    
         case productsName.MEATDISHES:
            return `${product.product} - ${product.id}`;
         case productsName.EXTRA:
            return `${product.product} - ${product.id}`;
         default:
            return null;
      }
   }
   const basketItems = useMemo (() => basket.map((product)=> <BasketItem key={uniqueKey(product)} product={product}/>), [basket])
   return ( 
      <section className={cls.basket}>
         <div className={classNames(`container ${cls.container}`)}>
            <div className={cls.header}>
               <Link className={cls.link} to={-1}><Arrow/>к выбору блюда</Link>
               <div className={cls.titleWrapper}>
                   <h2 className="title-2">Корзина</h2>
                   {basket.length > 0 ? <span>(в корзине {basket.length == 1 ? `${basket.length} товар` : `${basket.length} товара`})</span>: <span>(корзина пуста)</span> }
               </div>
            </div>
            <div className={cls.basketItems}>
               {basket.length !== 0 ? basketItems: (
               <div className={cls.empty}>
                  <div className={cls.emptyTitle}>Ваша корзина пуста!</div>
                  <EmptyBasket/>
               </div>
               )}
            </div>
            {basket.length > 0 ? <ExtraProduct/> : null}
            {basket.length > 0 ? <Order/> : null}
         </div>
      </section>
    );
}
 
export default BasketPage;