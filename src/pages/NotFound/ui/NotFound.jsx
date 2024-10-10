import cls from "./NotFound.module.scss"

const NotFound = () => {
   return ( 
   <section className={cls.notFound}>
      <div className={cls.text}>Такая страница не найдена...</div>
   </section> );
}
 
export default NotFound;