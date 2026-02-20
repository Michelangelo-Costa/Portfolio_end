import { useEffect } from "react";
import type { PageTitleProps } from "@/types";

const PageTitle: React.FC<PageTitleProps> = ({ title, suffix }) => {
   useEffect(() => {
      const originalTitle = document.title;
      if (suffix) {
         document.title = title + " | Michelangelo Costa"
      } else {
         document.title = title;
      }


      return () => {
         document.title = originalTitle;
      };
   }, [title, suffix]);

   return null;
};

export default PageTitle;
