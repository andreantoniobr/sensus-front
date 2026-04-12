import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import ComponentCard from "../components/common/ComponentCard";
import ProgressIn from "../components/atoms/ProgressIn";
import ChartEvolutionOfGrades from "../components/atoms/ChartEvolutionOfGrades";
import MyProgressCard from "../components/molecules/MyProgressCards";
import AchievementsGrid from "../components/molecules/AchievementsGrid";

export default function MyProgressPage() {
  return (
    <div className="space-y-12">
      <PageMeta
        title="Meu progresso | Sensus - Plataforma de Avaliação Acadêmica"
        description="Acesse o Sensus para acompanhar suas disciplinas, resolver exercícios, participar de avaliações e receber feedback inteligente com apoio de IA."
      />
      <PageBreadcrumb pageTitle="Meu progresso" />

      <MyProgressCard />

      <ComponentCard title="Evolução de Notas (média mensal)">
        <ChartEvolutionOfGrades />
      </ComponentCard>

      <div className="space-y-6 xl:col-span-7">
        <h2 className="text-theme-md font-bold text-gray-800 dark:text-white/90">
          Minhas Conquistas
        </h2>
        <AchievementsGrid />
      </div>

      <ComponentCard title="Progresso nas Listas de Questões">
        <ProgressIn title="Lógica de Programação" value={100} />
        <ProgressIn title="Prog. Orientada a Objetos" value={100} />
        <ProgressIn title="Python do Zero ao Avançado" value={68} />
        <ProgressIn title="JavaScript Modeno (ES6+)" value={35} />
        <ProgressIn title="React.js na Prática" value={12} />
        <ProgressIn title="APIs & Backend" value={0} />
        <ProgressIn title="Frontend & Frameworks" value={0} />
        <ProgressIn title="DevOps & Deploy" value={0} />
      </ComponentCard>
    </div>
  );
}
