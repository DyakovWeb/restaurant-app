import { ProductCardLayoutSkeleton } from "@/layouts/ProductCardLayout"
import { BasketPage } from "@/pages/BasketPage";
import { HotSnacks } from "@/pages/HotSnacks";
import { MainPage } from "@/pages/MainPage";
import { MeatDishes } from "@/pages/MeatDishes";
import { NotFound } from "@/pages/NotFound";
import { ProductPage } from "@/pages/ProductPage";
import { Suspense } from "react";

const routerNavigations = [
   {
      path: "/",
      element: <MainPage/>
            
   },
   {
      path: "/hotsnacks",
      element: <HotSnacks/>
   },
   {
      path: "/meatdishes",
      element: <MeatDishes/>     
   },
   {
      path: "/coldsnacks/:id",
      element: <Suspense fallback={<ProductCardLayoutSkeleton/>}><ProductPage/></Suspense>    
   },
   {
      path: "/hotsnacks/:id",
      element: <Suspense fallback={<ProductCardLayoutSkeleton/>}><ProductPage/></Suspense>      
   },
   {
      path: "/meatdishes/:id",
      element: <Suspense fallback={<ProductCardLayoutSkeleton/>}><ProductPage/></Suspense>      
   },
   {
      path: "/basket",
      element: <BasketPage/>
   },
   {
      path: "*",
      element: <NotFound/>
   },
]

export {routerNavigations}