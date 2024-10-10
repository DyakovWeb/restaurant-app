import { ButtonCard } from "@/ui/ButtonCard";
import Cart from "@/assets/image/icons/cart.svg"
import cls from "./CardItem.module.scss"
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "@/redux/productCard/services/fetchProductCard";
import { useImageURL } from "@/utils/useImage";
import { basketActions } from "@/redux/basket/slice/basketSlice";
import { useContext } from "react";
import { LayoutContext } from "@/providers/LayoutContextProvider";
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import classNames from "classnames";
import { getBasket } from "@/redux/basket/selectors/basketSelectors";
import Increase from "@/assets/image/icons/increase.svg";
import Decrease from "@/assets/image/icons/decrease.svg";

const CardItem = (props) => {
   const basket = useSelector(getBasket);
   const {id, name, product, image, desc, weight, price, placeholder, count} = props;
   const ingredients = desc.join(", ");
   const {showPopup} = useContext(LayoutContext)
   const index = basket.findIndex((el)=> el.id === id && el.product === product ? el : null)
   const dispatch = useDispatch();
   const showButtonAdd = () =>(
      <>
         <div className={cls.price}>{price} &#8381;</div>
         <ButtonCard onClick={addProduct}>
            <span>В корзину</span>
            <Cart/>
         </ButtonCard>      
      </>
   )
   const showCountersButton = () =>(
      <>
         <button className={cls.decrease} onClick={()=>{dispatch(basketActions.minusProduct(basket[index]))}}><Decrease/></button>
         <div className={cls.price}>{price * basket[index].count} &#8381;</div>
         <button className={cls.increase} onClick={()=>{dispatch(basketActions.addProduct(basket[index]))}}><Increase/></button>
      </>
   )
   const onClickProduct = ()=>{
      dispatch(fetchProduct({
         id: id, 
         product: product
      }))
   }

   const addProduct = ()=>{
      try {
         dispatch(basketActions.addProduct({
            id,
            product,
            name,
            image,
            ingredients,
            placeholder,
            price,
            count
         })) && showPopup(true)
       } catch (err) {
         console.log("Произошла ошибка!")
       }
   }
   return (
   <div className={cls.card}>
      <div className={classNames(`${cls.count} ${index == -1 ? "none" : ""}`)}>{index !== -1 && basket.length > 0 ? basket[index].count : 0}</div>
      <div className={cls.imgWrapper}>
         <LazyLoadImage src={useImageURL(image)} placeholderSrc={useImageURL(placeholder)} alt={name} effect="blur"/>
      </div>
      <div className={cls.info}>
         <Link className={cls.body} to={`/${product}/${id}`} onClick={onClickProduct}>
            <div className={cls.bodyWrapper}>
               <h4 className="title-4">{name}</h4>
               <div className={cls.weight}>Вес: {weight} г</div>
            </div>
            <span className={cls.ingredients}>{ingredients}</span>
         </Link>
         <div className={cls.footer}>
            {index !== -1 && basket.length > 0 ? showCountersButton() : showButtonAdd()}
         </div>
      </div>
   </div> 
   );
}
 
export {CardItem};