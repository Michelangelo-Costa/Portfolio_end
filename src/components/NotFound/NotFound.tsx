import { Link } from "react-router";

const NotFound = () => {
   return (
      <div className="flex flex-col justify-center mt-10 items-center gap-2">
         <h1 className="text-center text-xl font-medium text-foreground">Pagina não encontrada!</h1>
         <p className="text-center text-sm text-muted-foreground mb-2">
            A página que você está procurando não existe.
         </p>
         <div className="relative w-50 h-50 self-center mb-3">
            <div className="absolute inset-0 w-full h-full bg-muted animate-pulse rounded-xl" />
            <img
               loading="lazy"
               src="https://i.pinimg.com/736x/46/e2/9e/46e29ee150063636f4fb137b1fbfcf69.jpg"
               alt="Imagem de personagem confuso"
               className="absolute inset-0 w-full h-full object-cover select-none rounded-xl"
            />
         </div>{" "}
         <Link
            to="/"
            className="text-xs px-4 py-2 border border-border text-muted-foreground hover:text-foreground transition-all duration-100"
         >
            Voltar para o Início
         </Link>
      </div>
   );
};

export default NotFound;
