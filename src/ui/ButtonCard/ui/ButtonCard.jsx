import cls from "./ButtonCard.module.scss"
const ButtonCard = (props) => {
   const {children, onClick} = props;
   return ( <button onClick={onClick} className={cls.button}>{children}</button> );
}
 
export {ButtonCard};