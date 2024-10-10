import classNames from "classnames";
import cls from "./ButtonUpTop.module.scss";
import ScrollUp from "@/assets/image/icons/scroll-up.svg";
const ButtonUpTop = (props) => {
   const {className} = props;
   const scrollUp = ()=>{
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      })
   }
   return ( <button onClick={scrollUp} className={classNames(`${cls.button} ${className}`)}><ScrollUp/></button> );
}
 
export {ButtonUpTop};