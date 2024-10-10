import cls from "./ButtonBurger.module.scss"
import classNames from "classnames"
const ButtonBurger = ({active, setActive}) => {
   const handleClick = ()=> {
      {active ? document.body.classList.remove("lock"): document.body.classList.add("lock")}
      setActive(!active);
   };
   
   return ( 
   <div className={classNames(`${cls.navIcon} ${active ? cls.navIconActive : ""}`)} onClick={()=>handleClick()}>
      <div className={cls.navIconMiddle}></div>
   </div>
    );
}
 
export {ButtonBurger};