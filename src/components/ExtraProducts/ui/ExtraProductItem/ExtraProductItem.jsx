import cls from "./ExtraProductItem.module.scss";
import { useImageURL } from "@/utils/useImage";
import Increase from "@/assets/image/icons/increase.svg";
import { useDispatch } from "react-redux";
import { basketActions } from "@/redux/basket/slice/basketSlice";
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

const ExtraProductItem = ({product}) => {
   const dispatch = useDispatch()
   const extraProduct = {...product, count: 1}
   return ( 
      <div className={cls.product}>
         <div className={cls.wrapperImg}>
            <LazyLoadImage className={cls.img} src={useImageURL(extraProduct.image)} placeholderSrc={useImageURL(extraProduct.placeholder)} alt={extraProduct.name} effect="blur"/>
         </div>
         <div className={cls.wrapperContent}>
            <div className={cls.title}>{extraProduct.name}</div>
            <div className={cls.wrapperFooter}>
               <button className={cls.button} onClick={()=>{dispatch(basketActions.addProduct(extraProduct))}}>Добавить <div className={cls.wrapper}><Increase/></div></button>
               <div className={cls.price}>{extraProduct.price} &#8381;</div>
            </div>
         </div>
      </div>
    );
}
 
export {ExtraProductItem};