import cls from "./Header.module.scss"
import Logo from "@/assets/image/logo/logo.svg"
import Pin from "@/assets/image/icons/pin.svg"
import Search from "@/assets/image/icons/search.svg"
import Phone from "@/assets/image/icons/phone.svg"
import BasketMobile from "@/assets/image/icons/basketIconMobile.svg"
import classNames from "classnames"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { getBasket } from "@/redux/basket/selectors/basketSelectors"
import { useContext, useState } from "react"
import { LayoutContext } from "@/providers/LayoutContextProvider"
import { useMediaQuery } from "@uidotdev/usehooks"
import { ButtonBurger } from "@/ui/ButtonBurger"
import { useNavbarListItems } from "@/utils/useNavbarListItems"
import { AppLink } from "@/ui/AppLink"

const Header = () => {
   const [active, setActive] = useState(false);
   const isTablet = useMediaQuery("only screen and (max-width : 1023px)");
   const navbarListItems = useNavbarListItems();
   const location = useLocation();
   const itemsList = ()=> navbarListItems.map((item)=>(<AppLink onClick = {()=>{setActive(false); document.body.classList.remove("lock")}} key={item.path} to={item.path} className={cls.link} activeClassName={location.pathname === item.path ? `${cls.active}`: "" }>
                                                         <span>{item.text}</span>
                                                      </AppLink>))
   const basket = useSelector(getBasket);
   const {popup} = useContext(LayoutContext);
   const desktopHeader = (
      <div className={cls.сontent}>
         <Logo className={cls.logo}/>
         <form className={cls.searchForm}>
            <Pin className={cls.pin}/>
            <div className={cls.formItem}>
               <input type="text" placeholder="Введите адрес доставки"/>
            </div>
            <button className={cls.btnSearch}><Search/></button>
         </form>
         <div className={cls.contacts}>
            <div className={cls.contactsIcon}><Phone/></div>
            <div className={cls.contactsPhone}>Контакты: <br/> <a href="tel:+79999999999">+7 (999) 999-99-99</a></div>
         </div>
         <div className={cls.buttons}>
            <Link className={cls.button} to={"basket"}>
               <p>Корзина</p>
               <span>{basket.length}</span>
            </Link>
         </div>
      </div>
   );
   const mobileHeader = (
      <div className={cls.сontent}>
         <div className={cls.mobileWrapper}>
            <ButtonBurger active={active} setActive={setActive}/>
            <Logo className={cls.logo}/>
            <div className={cls.buttons}>
               <Link className={cls.button} to={"basket"}>
                  <BasketMobile/>
                  <p>корзина</p>
               </Link>
            </div>
         </div>
         <form className={cls.searchForm}>
            <Pin className={cls.pin}/>
            <div className={cls.formItem}>
               <input type="text" placeholder="Введите адрес доставки"/>
            </div>
            <button className={cls.btnSearch}><Search/></button>
         </form>
         <div className={classNames(`${cls.headerMenu} ${active ? cls.active : ""} `)}>
            <div className={cls.headerMenuContent}>
               <ul>
                  {itemsList()}
               </ul>
            </div>
         </div>
      </div>
   );
   return ( 
      <header className={cls.header}>
         <div className={classNames(`container ${cls.container}`)}>
            {isTablet ? mobileHeader : desktopHeader}
            {popup && <p className={cls.popup}>Товар был добавлен в корзину!</p>}
         </div>
      </header> 
   );
}
 
export {Header};