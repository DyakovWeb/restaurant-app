import cls from "./PageLoader.module.scss"

const PageLoader = () => {
   return ( <div className={cls.pageLoader}>
      <div className="loader"></div>
   </div> );
}
 
export {PageLoader};