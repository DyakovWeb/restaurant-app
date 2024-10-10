import classNames from "classnames"
import cls from "./Banner.module.scss"
import banner from "@/assets/image/banner/banner.jpg"
import bannerMobile from "@/assets/image/banner/bannerMobile.jpg"
import placeholder from "@/assets/image/banner/placeholder.jpg"
import placeholderMobile from "@/assets/image/banner/placeholderMobile.jpg"
import { useLocation } from "react-router-dom"
import { productsName } from "@/const/const"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useMediaQuery } from "@uidotdev/usehooks"

const Banner = () => {
   const location = useLocation();
   const isMobileS = useMediaQuery("only screen and (max-width : 474px)");
   const bannerRender = (extraClass) => 
   (<section className={classNames(`${cls.banner} ${extraClass ? extraClass : ""}`)}>
      <LazyLoadImage src={isMobileS ? bannerMobile : banner} placeholderSrc={isMobileS ? placeholderMobile : placeholder}  className={cls.bannerImg} effect="blur" alt="Баннер"/>
   </section>)
   
   const showBanner = ()=> {
      switch(location.pathname) {
         case "/":
            return bannerRender();
         case "/" + productsName.HOTSNACKS:
            return bannerRender();
         case "/" + productsName.MEATDISHES:
            return bannerRender();
         default:
            return bannerRender("none");
      }
   }
   return showBanner()  
}
 
export {Banner};