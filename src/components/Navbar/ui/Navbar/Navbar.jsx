import { useNavbarListItems } from "@/utils/useNavbarListItems";
import { NavbarItems } from "../NavbarItems/NavbarItems";
import cls from "./Navbar.module.scss"
import classNames from "classnames";

const NavBar = () => {
   const navbarListItems = useNavbarListItems();
   const itemsList = ()=> navbarListItems.map((item)=>(<NavbarItems key={item.path} item={item}/>))
   
   return (<nav className={cls.navbar}>
      <div className={classNames(`container ${cls.container}`)}>
         <div className={cls.navbarList}>
            {itemsList()}
         </div>
      </div>
   </nav>);
}
 
export {NavBar};