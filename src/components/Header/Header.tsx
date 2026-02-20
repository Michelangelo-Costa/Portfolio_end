import { Link, NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { HeaderLinkProps } from "@/types";

import SidebarDrawer from "@/components/ui/vaul";

import { PersonIcon, SlashIcon } from "@/lib/icons";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-4 pb-2">
      <Link to="/">
        <Avatar className="size-10 hover:scale-105 active:scale-95 transition-all duration-200 rounded">
          <AvatarImage
            className="object-cover"
            src="/src/icons/Foto_Perfil.jpg"
            alt="Avatar"
          />
          <AvatarFallback className="size-10 rounded">
            <PersonIcon
              className="opacity-60 text-foreground"
              aria-hidden="true"
            />
          </AvatarFallback>
        </Avatar>
      </Link>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex gap-1.5 text-muted-foreground text-sm items-center">
          <HeaderLink title="Sobre" to="/" />
          <SlashIcon className="text-foreground/50" />
          <HeaderLink title="Projetos" to="/projects" />
        </div>
        <SidebarDrawer />
      </div>
    </header>
  );
};

function HeaderLink({ to, title }: HeaderLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "text-foreground dark:text-foreground" : "text-foreground/50 hover:text-muted-foreground/80 dark:hover:text-foreground/80"}`
      }
    >
      {title}
    </NavLink>
  );
}

export default Header;
