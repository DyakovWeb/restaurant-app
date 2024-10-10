import { Link } from "react-router-dom";
import cls from "./ProductCardLayout.module.scss"
import ShopCart from "@/assets/image/icons/shopp-cart.svg"
import Arrow from "@/assets/image/icons/arrow.svg"
import BackMobile from "@/assets/image/icons/backMobile.svg"
import { useImageURL } from "@/utils/useImage";
import { useProductParamsList } from "@/utils/useProductParamsList";
import { ProductCardParams } from "@/components/ProductCardParams";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductLoading } from "@/redux/productCard/selectors/productCardSelectors";
import { ProductCardLayoutSkeleton } from "./ProductCardLayoutSkeleton";
import { basketActions } from "@/redux/basket/slice/basketSlice";
import { useContext } from "react";
import { LayoutContext } from "@/providers/LayoutContextProvider";
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useMediaQuery } from "@uidotdev/usehooks";

const ProductCardLayout = (props) => {
   const product = useSelector(getProduct);
   const isTablet = useMediaQuery("only screen and (max-width : 1023px)");
   const {params} = props;
   const productParamsList = useProductParamsList();
   const loading = useSelector(getProductLoading);
   const {showPopup} = useContext(LayoutContext);
   const dispatch = useDispatch();
   const itemParams = () => productParamsList.map((item)=><ProductCardParams key={item.name} params={params} name={item.name} value={item.value}/>)
   const ingredients = params.ingred.join(", ");
   const addProductBasket = ()=>{
      dispatch(basketActions.addProduct({...product, count: 1})) && showPopup(true);
   }
   if (loading){
      return <ProductCardLayoutSkeleton/>
   }
   return ( 
      <section className={cls.cardProduct}>
         <div className={cls.wrapper}>
            {isTablet ? null : <Link to={-1} className={cls.link}><Arrow/>Вернуться назад</Link>}
            <div className={cls.card}>
               {isTablet ? <Link to={-1} className={cls.linkMobile}><BackMobile/></Link> : null} 
               <LazyLoadImage className={cls.img} src={useImageURL(params.img)} placeholderSrc={useImageURL(params.placeholder)} alt={params.name} effect="blur"/>
               <div className={cls.description}>
                  <div className={cls.body}>
                     <div className={cls.topContent}>
                        <h2 className="title-2">{params.name}</h2>
                        <div className={cls.text}>
                           <p>{ingredients}</p>
                        </div>
                     </div>
                     <div className={cls.bottomContent}>
                        <div className={cls.weight}>Вес: {params.weight} г</div>
                        <div className={cls.bottomWrapper}>
                           <button className={cls.button} onClick={()=>{addProductBasket()}}>Корзина<ShopCart/></button>
                           <span className={cls.price}>{params.price} &#8381;</span>
                        </div>
                     </div>
                  </div>
                  <div className={cls.footer}>
                     {itemParams()}
                  </div>
               </div>
            </div>
         </div>
      </section>
       
   );
}
 
export {ProductCardLayout};