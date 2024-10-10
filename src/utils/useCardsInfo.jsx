import Onion from "@/assets/image/icons/onion.svg"
import Flash from "@/assets/image/icons/flash.svg"
import Chef from "@/assets/image/icons/chef.svg"

const useCardsInfo = ()=>{
   const cardsItems = [
      {
         id: 1,
         image: <Onion/>,
         text: "Свежайшие продукты"
      },
      {
         id: 2,
         image: <Flash/>,
         text: "Быстрая доставка"
      },
      {
         id: 3,
         image: <Chef/>,
         text: "Лучшие повора"
      },
      {
         id: 4,
         image: <Onion/>,
         text: "Свежайшие продукты"
      }
   ]

   return cardsItems
}

export {useCardsInfo}