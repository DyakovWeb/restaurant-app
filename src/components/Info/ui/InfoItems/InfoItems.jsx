import cls from "./InfoItems.module.scss"

const InfoItems = ({card}) => {
   return ( 
      <div className={cls.card}>
         {card.image}
         <div className={cls.text}>
            {card.text}
         </div>
      </div> 
   );
}
 
export {InfoItems};