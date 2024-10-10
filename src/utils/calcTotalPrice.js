export const calcTotalPrice = (products)=>{
   return products.reduce((sum, product)=>{
      return product.price * product.count + sum; 
   }, 0)
}