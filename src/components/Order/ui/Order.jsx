import { useSelector } from "react-redux";
import cls from "./Order.module.scss"
import { getBasketTotalPrice } from "@/redux/basket/selectors/basketSelectors";
import classNames from "classnames";

const Order = () => {
   const totalPrice = useSelector(getBasketTotalPrice);
   return ( 
      <div className={cls.order}>
         <div className={cls.wrapper}>
            <div className={cls.price}>
               <div className={cls.priceTotal}>Итого: <span>{totalPrice} &#8381;</span></div>
               <div className={cls.freeDelivery}>{3000 - totalPrice <= 0 ? "Доставка бесплатная" : "До бесплатной доставки не хватает:"} {3000 - totalPrice <= 0 ? null : <span>{3000 - totalPrice} &#8381;</span>}</div>
               <div className={cls.minAmount}>Минимальная сумма заказа 1500 &#8381;</div>
            </div>
            <button className={classNames(`${cls.button} ${totalPrice >= 1500 ? "": cls.notActive}`)}>Оформить заказ</button>
         </div>
      </div>
    );
}
 
export {Order};