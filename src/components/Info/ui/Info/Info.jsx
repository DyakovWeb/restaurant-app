import { useCardsInfo } from "@/utils/useCardsInfo";
import cls from "./Info.module.scss"
import { InfoItems } from "../InfoItems/InfoItems";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { productsName } from "@/const/const";
import { useMediaQuery } from "@uidotdev/usehooks";

const Info = () => {
   const location = useLocation();
   const cardsInfo = useCardsInfo();
   const isTablet = useMediaQuery("only screen and (max-width : 1023px)");
   const cardItems = ()=>cardsInfo.map((card)=>(<InfoItems key={card.id} card={card}/>));
   const infoSection = (extraClass)=>(
      <section className={classNames(`${cls.info} ${extraClass ? extraClass: ""}`)}>
         <div className="container">
            <div className={cls.content}>
               <div className={cls.description}>
                  <h1 className="title-1">Наше кафе</h1>
                  <div className={cls.text}>
                     <p>Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                  </div>
                  <button className={cls.button}>Посмотреть меню</button>
               </div>
               <div className={cls.cards}>{cardItems()}</div>
            </div>
         </div>
      </section>
   )
   
   const showInfoSection = ()=> {
      switch(location.pathname) {
         case "/":
            return  isTablet ? null : infoSection();
         case "/" + productsName.HOTSNACKS:
            return  isTablet ? null : infoSection();
         case "/" + productsName.MEATDISHES:
            return  isTablet ? null : infoSection();
         default:
            return isTablet ? null : infoSection("none");
      }
   }
   return showInfoSection()
}
 
export {Info};