import { ButtonUpTop } from "@/ui/ButtonUpTop";
import cls from "./Footer.module.scss"
import Logo from "@/assets/image/logo/logo-footer.svg";

const Footer = () => {
   return ( 
      <footer className={cls.footer}>
         <div className="container">
            <div className={cls.wrapper}>
               <div className={cls.row}>
                  <div className={cls.description}>
                     <Logo/>
                     <div className={cls.text}>
                        <p>&copy; ООО СК &laquo;АПШЕРОН&raquo; </p>
                        <p>Все права защищены. 2010-2024</p>
                     </div>
                     <div className={cls.links}>
                        <a href="#">Пользовательское соглашение</a>
                        <a href="#">Карта сайта</a>
                        <a href="#">Политика конфиденциальности</a>
                     </div>
                  </div>
                  <nav className={cls.nav}>                
                     <a href="#">О ресторане</a>
                     <a href="#">Условия доставки</a>
                     <a href="#">Возврат товара</a>
                     <a href="#">Акции</a>
                  </nav>
               </div>
               <ButtonUpTop className={cls.btnScrollUp}/>
            </div>
         </div>
      </footer> 
   );
}
 
export {Footer};