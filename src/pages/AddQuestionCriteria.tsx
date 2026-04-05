import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import Input from "../components/form/input/InputField";
import TiptapEditor from "../components/atoms/TipTapEditor";
import FormField from "../components/atoms/FormFild";
import CancelButton from "../components/atoms/CancelButton";
import AddButton from "../components/atoms/AddButton";

export default function AddQuestionCriteria() {
  return (
    <div>
      <PageMeta
        title="Adicionar Critério | Sensus - Plataforma de Avaliação Acadêmica"
        description="Acesse o Sensus para acompanhar suas disciplinas, resolver exercícios, participar de avaliações e receber feedback inteligente com apoio de IA."
      />
      <PageBreadcrumb pageTitle="Adicionando um novo Critério" />
      <div className="rounded-2xl border border-custom-blue-100 bg-white px-5 py-7 space-y-6 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12 shadow-soft-md">
        <FormField label="Nome do Critério">
          <Input
            type="text"
            id="input"
            placeholder="Insira um nome descritivo para seu critério"
          />
        </FormField>

        <FormField label="Texto do Critério" fullWidth>
          <TiptapEditor />
        </FormField>

        <div className="flex flex-col-reverse gap-3 px-2 mt-6 w-full lg:flex-row lg:justify-end">
          <CancelButton>Cancelar</CancelButton>
          <AddButton>Adicionar Critério</AddButton>
        </div>
      </div>
    </div>
  );
}
