const useNavbarListItems = () => {
   const navbarListItems = [
      {
         path: "/",
         text: "Холодные закуски"
      },
      {
         path: "/hotsnacks",
         text: "Горячие закуски"
      },
      {
         path: "/meatdishes",
         text: "Мясные блюда"
      },
      {
         path: "/soups",
         text: "Супы"
      },
      {
         path: "/fishdishes",
         text: "Рыбные блюда"
      },
      {
         path: "/grillmenu",
         text: "Гриль меню"
      },
      {
         path: "/specialtydishess",
         text: "Фирменные блюда"
      },
      {
         path: "/drinks",
         text: "Напитки"
      },
   ]

   return navbarListItems;
}
 
export {useNavbarListItems};