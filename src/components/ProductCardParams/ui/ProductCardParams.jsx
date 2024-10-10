import cls from "./ProductCardParams.module.scss"

const ProductCardParams = (props) => {
   const {name, value, params} = props;
   return (
   <div className={cls.parameter}>
      <div className={cls.parameterName}>
         {name}
      </div>
      <div className={cls.parameterValue}>
         {params[value]}
         {params.weight === params[value] ? " г" : null}
      </div>
   </div> 
   );
}
 
export {ProductCardParams};