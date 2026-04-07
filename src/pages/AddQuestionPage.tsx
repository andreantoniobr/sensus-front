import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import Input from "../components/form/input/InputField";
import Select from "../components/form/Select";
import ComponentCard from "../components/common/ComponentCard";
import TiptapEditor from "../components/atoms/TipTapEditor";
import FormField from "../components/atoms/FormFild";
import CancelButton from "../components/atoms/CancelButton";
import AddButton from "../components/atoms/AddButton";
import QuestionList from "../components/atoms/QuestionList";
import { QuestionItem } from "../components/atoms/QuestionList";
import { useState } from "react";
import Button from "../components/ui/button/Button";
import LineAndTextSeparator from "../components/atoms/LineAndTextSeparator";

export default function AddQuestionPage() {
  const options = [
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "javaScript", label: "JavaScript" },
    { value: "sql", label: "SQL" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const [questions, setQuestions] = useState<QuestionItem[]>([
    { id: "1", text: "Correção de Uso Correto de Lista no Python", score: 10 },
    { id: "2", text: "Criação de Função e Parametros", score: 5 },
    { id: "3", text: "Uso correto do return", score: 5 },
  ]);

  return (
    <div className="space-y-6">
      <PageMeta
        title="Adicionar Critério | Sensus - Plataforma de Avaliação Acadêmica"
        description="Acesse o Sensus para acompanhar suas disciplinas, resolver exercícios, participar de avaliações e receber feedback inteligente com apoio de IA."
      />
      <PageBreadcrumb pageTitle="Adicionando uma Questão" />
      <ComponentCard title="Questão">
        <FormField label="Linguagem de Programação">
          <Select
            options={options}
            placeholder="Selecione uma Linguagem"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </FormField>

        <FormField label="Título da Questão">
          <Input
            type="text"
            id="input"
            placeholder="Insira um título descritivo da questão"
          />
        </FormField>

        <FormField label="Texto da Questão" fullWidth>
          <TiptapEditor />
        </FormField>
      </ComponentCard>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Conteúdo principal */}
        <div className="w-full md:flex-1">
          <ComponentCard title="Critérios da Questão">
               <div className="flex flex-col-reverse gap-3 w-full lg:flex-row lg:justify-end">
              <Button
                className="font-space font-semibold"
                size="xs"
                fontSize="xs"
                variant="success"
              >
                Criar Nova Questão
              </Button>

              <Button
                className="font-space font-semibold"
                variant="outline"
                size="xs"
                fontSize="xs"
              >
                Adicionar Questão do Banco
              </Button>
            </div>
            <QuestionList items={questions} onChange={setQuestions} />

            {/* <pre className="mt-6 text-xs bg-gray-100 p-3 rounded">
          {JSON.stringify(questions, null, 2)}
        </pre> */}

         
          </ComponentCard>
        </div>

        {/* Sidebar (≈ 1/5 da tela) */}
        <div className="w-full md:w-1/5 p-5 xl:p-10 rounded-2xl border border-custom-blue-100 flex flex-col items-center justify-center">
          <Button
            className="w-full font-space font-semibold"
            size="sm"
            variant="success"
          >
            Nova Questão
          </Button>
          <LineAndTextSeparator label="ou" className="w-full"></LineAndTextSeparator>
          <Button
            className="w-full font-space font-semibold"
            variant="outline"
            size="sm"
          >
            Adicionar Questão do Banco
          </Button>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-3 px-2 w-full lg:flex-row lg:justify-end">
        <CancelButton>Cancelar</CancelButton>
        <AddButton>Adicionar Questão</AddButton>
      </div>
    </div>
  );
}
