import { createContext, useState } from "react";

export const LayoutContext = createContext({});

const LayoutContextProvider = ({ children }) => {
   const [popup, setOpenPopup] = useState(false);
   let timeout = null;
   const showPopup = ()=>{
      if(timeout !== null){
         clearTimeout(timeout);
      }
      setOpenPopup(true);
      timeout = setTimeout(()=>{setOpenPopup(false)}, 1000)
   }
   const value = {
      popup,
      showPopup
   };

   return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

export default LayoutContextProvider;