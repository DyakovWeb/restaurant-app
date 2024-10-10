import classNames from "classnames";
import { NavLink } from "react-router-dom";

const AppLink = (props) => {
   const {children, to, activeClassName="", className="", onClick = undefined} = props;
   return ( 
      <NavLink onClick={onClick} to={to} className={({isActive})=>classNames(className, {
         [activeClassName]: isActive
      })}>{children}</NavLink>
    );
}
 
export {AppLink};