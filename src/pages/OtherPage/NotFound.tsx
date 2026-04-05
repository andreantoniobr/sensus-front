import Button from "../../components/ui/button/Button";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-blue-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-title-2xl font-bold text-custom-blue-100 mb-6">
          404
        </h1>

        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Página não encontrada
        </h2>

        <p className="text-gray-500 mb-6">
          A página que você está tentando acessar não existe ou foi movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => window.history.back()}
            className="font-space font-semibold flex items-center gap-2"
            variant="outline"
            size="sm"
          >
            Voltar para página anterior
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="font-space font-semibold flex items-center gap-2"
            size="sm"
          >
            Voltar para o início
          </Button>
        </div>
      </div>
    </div>
  );
}
