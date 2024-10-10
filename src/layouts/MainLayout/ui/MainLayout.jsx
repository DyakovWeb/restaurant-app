import {Outlet} from "react-router-dom"
import cls from "./MainLayout.module.scss"
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { NavBar } from "@/components/Navbar";
import { Info } from "@/components/Info";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

const MainLayout = () => {
   return ( 
   <div id="app" className={cls.app}>
      <Header/>
      <Banner />
      <main className={cls.main}>
         <NavBar/>
         <Outlet/>
         <Info/>
         <Contacts/>
      </main>
      <Footer/>
   </div> 
   );
}
 
export {MainLayout};