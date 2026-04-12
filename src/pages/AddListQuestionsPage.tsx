import { useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import Input from "../components/form/input/InputField";
import ComponentCard from "../components/common/ComponentCard";
import FormField from "../components/atoms/FormFild";
import CancelButton from "../components/atoms/CancelButton";
import AddButton from "../components/atoms/AddButton";
import QuestionList from "../components/atoms/QuestionList";
import { QuestionItem } from "../components/atoms/QuestionList";
import Button from "../components/ui/button/Button";

export default function AddListQuestionsPage() {
  const [questions, setQuestions] = useState<QuestionItem[]>([
    { id: "1", text: "Manipulação de Variáveis e Tipos de Dados em Python", score: 3 },
    { id: "2", text: "Uso de Estruturas Condicionais (if, elif, else)", score: 3 },
    { id: "3", text: "Repetições com Laços (for e while)", score: 4 },
  ]);

  return (
    <div className="space-y-12">
      <PageMeta
        title="Criar uma nova Lista de Questões | Sensus - Plataforma de Avaliação Acadêmica"
        description="Acesse o Sensus para acompanhar suas disciplinas, resolver exercícios, participar de avaliações e receber feedback inteligente com apoio de IA."
      />
      <PageBreadcrumb pageTitle="Criar uma nova Lista de Questões" />
      <ComponentCard title="Detalhes da Lista de Questões">
        <FormField label="Título da Lista">
          <Input
            type="text"
            id="input"
            placeholder="Insira um título descritivo da Lista de Questões"
          />
        </FormField>

        <FormField label="Data da Abertura">
          <Input
            type="text"
            id="input"
            placeholder="Insira a data de abertura da Lista de Questões"
          />
        </FormField>        
      </ComponentCard>

      <ComponentCard
        title="Questões da Lista"
        rightContent={
          <>
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
          </>
        }
      >
        <div className="flex flex-col-reverse gap-3 w-full lg:flex-row lg:justify-end"></div>
        <QuestionList items={questions} onChange={setQuestions} />

        {/* <pre className="mt-6 text-xs bg-gray-100 p-3 rounded">
          {JSON.stringify(questions, null, 2)}
        </pre> */}
      </ComponentCard>

      <div className="flex flex-col-reverse gap-3 px-2 w-full lg:flex-row lg:justify-end">
        <CancelButton>Cancelar</CancelButton>
        <AddButton>Adicionar Lista de Questões</AddButton>
      </div>
    </div>
  );
}
