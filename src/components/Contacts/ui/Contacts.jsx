import cls from "./Contacts.module.scss"
import Pin from "@/assets/image/icons/pin.svg";
import Email from "@/assets/image/icons/email.svg";
import Map from "@/assets/image/map/map.jpg";
import Placeholder from "@/assets/image/map/placeholder.jpg";
import { useSocialIcons } from "@/utils/useSocialIcons";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Contacts = () => {
   const socialIcons = useSocialIcons();
   const location = useLocation();
   const contactSection = (extraClass)=>(
      <section className={classNames(`${cls.contacts} ${extraClass ? extraClass : ""}`)}>
         <div className={cls.contact}>
            <div className={cls.contactHeader}>
               <h3 className="title-3">Контакты</h3>
            </div>
            <div className={cls.contactBody}>
               <div className={cls.address}>
                  <Pin/>
                  <div className={cls.description}>
                     <div className={cls.title}>Наш адрес:</div>
                     <div className={cls.text}>
                        <p>МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10</p>
                     </div>
                  </div>
               </div>
               <div className={cls.email}>
                  <Email/>
                  <div className={cls.description}>
                     <div className={cls.title}>Наша почта:</div>
                     <div className={cls.text}>
                        <a href="mailto:restaurant@email.ru">restaurant@email.ru</a>
                     </div>
                  </div>
               </div>
            </div>
            <div className={cls.contactFooter}>
               <button className={cls.button}>Забронировать стол</button>
               <div className={cls.phone}>
                  <a href="tel:+79999999999">+7 (999) 999-99-99</a>
                  <p>Звоните или оставляйте заявку</p>
               </div>
            </div>
            <div className={cls.contactSocial}>
               <p>Мы в соц сетях:</p>
               <div className={cls.socialIcons}>
               {socialIcons.map((icon)=> (<a href="#" key={icon.name}>{icon.icon}</a>))}
               </div>
            </div>
         </div>
         <LazyLoadImage src={Map} placeholderSrc={Placeholder} className={cls.contactsImgBg} effect="blur" alt="Карта"/>
      </section> 
   )
   const showContactSection = ()=>{
      switch(location.pathname){
         case "/basket":
            return contactSection("none");
         default:
            return contactSection();
      }
   }
   return showContactSection();
}
 
export {Contacts};