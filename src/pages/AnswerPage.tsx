import {
  HiMiniArrowLeft,
  HiOutlineRocketLaunch,
  HiMiniDocumentText,
} from "react-icons/hi2";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import ComponentCard from "../components/common/ComponentCard";
import Button from "../components/ui/button/Button";
import CodeEditor from "../components/atoms/CodeEditor";
import { useEditorConfig } from "../hooks/useEditorConfig";

type Question = {
  title: string;
  description: string;
  input: string;
  output: string;
  language: string;
  starterCode: string;
};

export default function AnswerPage() {
  const [code, setCode] = useState<string>("");
  const [language, setLanguage] = useState<string>("python");
  const [question, setQuestion] = useState<Question | null>(null);

  const { config: editorConfig, setConfig: setEditorConfig } =
    useEditorConfig();

  useEffect(() => {
    async function fetchQuestion() {
      const data: Question = {
        title: "Hello World",
        description:
          'O seu primeiro programa deve imprimir "Hello World!" na tela.',
        input: "Este problema não possui entrada.",
        output: 'Imprimir "Hello World!"',
        language: "python",
        starterCode: `# take input from the user
num = int(input("Enter a number: "))

# initialize sum
sum = 0

# find the sum of the cube of each digit
temp = num
while temp > 0:
   digit = temp % 10
   sum += digit ** 3
   temp //= 10

# display the result
if num == sum:
   print(num,"is an Armstrong number")
else:
   print(num,"is not an Armstrong number")
`,
      };

      setQuestion(data);
      setLanguage(data.language);
      setCode(data.starterCode);
    }

    fetchQuestion();
  }, []);

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      <PageMeta
        title="responder Questão | Sensus - Plataforma de Avaliação Acadêmica"
        description="Acesse o Sensus para acompanhar suas disciplinas, resolver exercícios, participar de avaliações e receber feedback inteligente com apoio de IA."
      />

      <PageBreadcrumb pageTitle="Responder Questão" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* ESQUERDA */}
        <ComponentCard title="Questão" className="lg:col-span-2">
          {question ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <HiMiniDocumentText className="w-5 h-5 text-blue-500" />
                <h2 className="font-semibold text-base text-gray-800 dark:text-white/90">
                  {question.title}
                </h2>
              </div>

              <p className="text-sm text-gray-700 dark:text-white/80 leading-relaxed">
                {question.description}
              </p>

              <div>
                <h3 className="font-semibold text-sm mb-1 text-gray-800 dark:text-white/90">
                  Entrada
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  {question.input}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-1 text-gray-800 dark:text-white/90">
                  Saída
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  {question.output}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-sm">Carregando questão...</p>
          )}
        </ComponentCard>

        {/* DIREITA */}
        <ComponentCard
          title="Editor de Código"
          className="lg:col-span-3"
          rightContent={
            <>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                size="xs"
                fontSize="xs"
                onClick={() =>
                  setEditorConfig((prev) => ({
                    ...prev,
                    theme: prev.theme === "dark" ? "light" : "dark",
                  }))
                }
              >
                {editorConfig.theme === "dark" ? "Light" : "Dark"}
              </Button>

              {/* Autocomplete */}
              <Button
                variant="outline"
                className="flex items-center gap-2"
                size="xs"
                fontSize="xs"
                onClick={() =>
                  setEditorConfig((prev) => ({
                    ...prev,
                    autocomplete: !prev.autocomplete,
                  }))
                }
              >
                {editorConfig.autocomplete ? "Auto ON" : "Auto OFF"}
              </Button>
            </>
          }
        >
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-6">            

              {/* EDITOR */}
              <CodeEditor
                code={code}
                setCode={setCode}
                language={language}
                config={editorConfig}
              />

              <div className="flex items-center justify-between mt-4">
                {/* TEXTO */}
                <span className="text-xs text-custom-blue-100 dark:text-gray-400">
                  Quando estiver pronto para terminar, envie!
                </span>

                {/* BOTÕES */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="font-space font-semibold flex items-center gap-2"
                    size="sm"
                  >
                    <HiMiniArrowLeft className="w-4 h-4" />
                    Voltar para questões
                  </Button>

                  <Button
                    className="font-space font-semibold flex items-center gap-2"
                    size="sm"
                  >
                    <HiOutlineRocketLaunch className="w-4 h-4" />
                    Enviar resposta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
