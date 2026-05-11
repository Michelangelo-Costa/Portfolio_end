import { useEffect } from "react";
import type { PageTitleProps } from "@/types";

const PageTitle: React.FC<PageTitleProps> = ({ title, suffix }) => {
   useEffect(() => {
      if (suffix) {
         document.title = title + " | Michelangelo Costa"
      } else {
         document.title = title;
      }
   }, [title, suffix]);

   return null;
};

export default PageTitle;
