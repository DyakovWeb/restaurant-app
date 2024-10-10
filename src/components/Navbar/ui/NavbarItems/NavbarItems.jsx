import { useLocation } from "react-router-dom";
import cls from "./NavbarItems.module.scss"
import { AppLink } from "@/ui/AppLink";

const NavbarItems = ({item}) => {
   const location = useLocation();
   return ( 
      <AppLink to={item.path} className={cls.link} activeClassName={location.pathname === item.path ? `${cls.active}`: "" }>
         <span className={cls.text}>{item.text}</span>
      </AppLink>
    );
}
 
export {NavbarItems};