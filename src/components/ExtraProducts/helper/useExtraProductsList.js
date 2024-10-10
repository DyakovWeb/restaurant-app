const useExtraProductList = ()=>{
   const extraProductList = [
      {
         id: 1, 
         product: "extra", 
         name: "Липтон",
         image: "lipton.jpg",
         placeholder: "placeholderLipton.jpg",
         ingredients: "Холодный зелёный чай. Освежает и утоляет жажду.",
         price: 130
      },
      {
         id: 2, 
         product: "extra", 
         name: "Любимая кола",
         image: "cola.jpg",
         placeholder: "placeholderCola.jpg",
         ingredients: "Сильногазированный напиток со вкусом колы и сладкими нотками ванили и корицы.",
         price: 165
      },
      {
         id: 3, 
         product: "extra", 
         name: "Вино Abrau Light Zero",
         image: "wine.jpg",
         placeholder: "placeholderWine.jpg",
         ingredients: "Безалкогольное игристое розовое вино. Имеет освежающий аромат с нотками фруктов и цитрусов.",
         price: 350
      },
      {
         id: 4, 
         product: "extra", 
         name: "Лимонад Боржоми",
         image: "limonad.jpg",
         placeholder: "placeholderLimonad.jpg",
         ingredients: "Сильногазированный напиток на основе воды из родников Боржомского ущелья с добавлением сока мандарина.",
         price: 110
      }
   ]
   return extraProductList;
}

export {useExtraProductList}