import Facebook from "@/assets/image/social/facebook.svg";
import Insta from "@/assets/image/social/instagram.svg";
import Vk from "@/assets/image/social/vkontakte.svg";
import Youtube from "@/assets/image/social/youtube.svg";

const useSocialIcons = ()=>{
   const socialIcons = [
      {
         name: "Facebook",
         icon: <Facebook/>
      },
      {
         name: "Vk",
         icon: <Vk/>
      },
      {
         name: "Youtube",
         icon: <Youtube/>
      },
      {
         name: "Insta",
         icon: <Insta/>
      }
   ]
   return socialIcons;
}

export {useSocialIcons}