import Increase from "@/assets/image/icons/increase.svg";
import Decrease from "@/assets/image/icons/decrease.svg";
import Delete from "@/assets/image/icons/delete.svg";
import cls from "./BasketItem.module.scss"
import { useImageURL } from "@/utils/useImage";
import { useDispatch } from "react-redux";
import { basketActions } from "@/redux/basket/slice/basketSlice";
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useMediaQuery } from "@uidotdev/usehooks";

const BasketItem = ({product}) => {
   const dispatch = useDispatch();
   const isMobile = useMediaQuery("only screen and (max-width : 767px)");
   return ( 
      <div className={cls.basketItem}>
         <div className={cls.basketItemContent}>
            <div className={cls.imgWrapper}>
               <LazyLoadImage src={useImageURL(product.image)} placeholderSrc={useImageURL(product.placeholder)} alt={product.title}/>
            </div>
            <div className={cls.wrapper}>
               <div className={cls.basketItemText}>
                  <div className={cls.basketItemTitle}>{product.name}</div>
                  {isMobile ? null : <div className={cls.basketItemIngredients}>{product.ingredients}</div>}
               </div>
               <div className={cls.basketButtons}>
               <div className={cls.counter}>
                  <button className={cls.decrease} onClick={()=>{dispatch(basketActions.minusProduct(product))}}><Decrease/></button>
                  <div className={cls.quantity}>{product.count}</div>
                  <button className={cls.increase} onClick={()=>{dispatch(basketActions.addProduct(product))}}><Increase/></button>
               </div>
               <div className={cls.basketButtonsWrapper}>
                  <div className={cls.price}>{product.count * product.price} &#8381;</div>
                  <button className={cls.delete} onClick={()=>{dispatch(basketActions.deleteProduct(product))}}><Delete/></button>
               </div>
               </div>
            </div>
         </div>
      </div>
    );
}
 
export {BasketItem};