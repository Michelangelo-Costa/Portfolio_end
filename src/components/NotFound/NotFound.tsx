import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 gap-4">
      <div className="text-6xl font-bold text-primary/20">404</div>
      <h1 className="text-xl font-bold text-foreground">
        Página não encontrada
      </h1>
      <p className="text-sm text-muted-foreground text-center max-w-md">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="mt-2 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg
              hover:bg-primary/90 transition-colors"
      >
        Voltar ao Início
      </Link>
    </div>
  );
};

export default NotFound;
