import { LightModeIcon, DarkModeIcon } from "@/lib/icons";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
   const { setTheme, resolvedTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return (
         <button className="p-2 rounded-md hover:bg-muted transition-all duration-100 group cursor-pointer">
            <div className="w-5 h-5" />
         </button>
      );
   }

   const isDark = resolvedTheme === "dark";

   return (
      <button
         onClick={() => setTheme(isDark ? "light" : "dark")}
         className="p-2 rounded-md hover:bg-muted transition-all duration-100 group cursor-pointer"
         aria-label={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
      >
         <div className="relative w-5 h-5">
            <LightModeIcon
               className={`w-5 h-5 absolute inset-0 transition-all duration-100 text-muted-foreground group-hover:text-foreground ${isDark ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
            />
            <DarkModeIcon
               className={`w-5 h-5 absolute inset-0 transition-all duration-100 text-muted-foreground group-hover:text-foreground ${isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
            />
         </div>
      </button>
   );
};

export default ThemeToggle;
