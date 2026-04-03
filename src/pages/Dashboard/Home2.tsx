import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import StatsCards from "../../components/molecules/StatsCards";


import QuestionListCard from "../../components/atoms/QuestionListCard";
import RecentActivityCard from "../../components/molecules/RecentActivityCard"; 
import ChalengeDayCard from "../../components/atoms/ChalengeDayCard";

import { AiOutlinePython } from "react-icons/ai";
import { AiOutlineJavaScript } from "react-icons/ai";
import { LiaReact } from "react-icons/lia";

export default function Home2() {
  return (
    <>
      <PageMeta
        title="Sensus"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6 md:gap-y-12">
        

        <div className="col-span-12 xl:col-span-12 space-y-6">
          <div className="col-span-12 xl:col-span-12">
          <h1 className="font-bold text-gray-800 text-theme-xl dark:text-white/90">
            Visão Geral
          </h1>
        </div>
          <StatsCards />
        </div>
        

        <div className="col-span-12 space-y-6 xl:col-span-7">
          <h2 className="text-theme-md font-bold text-gray-800 dark:text-white/90">Minha Lista de Questões</h2>
          <QuestionListCard
            icon={AiOutlinePython}
            iconColor="text-yellow-300"
            value="68"
            title="Python do Zero ao Avançado"
            nextChallengeText="Próximo desafio: Listas e Tuplas"
            label="28 de 42 Desafios"
          />
          <QuestionListCard
            icon={AiOutlineJavaScript}
            iconColor="text-orange-300"
            value="35"
            title="JavaScript Modeno (ES6+)"
            nextChallengeText="Próximo desafio: Promises & Asynk/Await"
            label="13 de 38 desafios"
          />
          <QuestionListCard
            icon={LiaReact}
            iconColor="text-sky-300"
            value="12"
            title="React.js na Prática"
            nextChallengeText="Próximo desafio: Componentes e Props"
            label="04 de 30 desafios"
          />
        </div>

        <div className="col-span-12 xl:col-span-5 space-y-6">
          <h2 className="text-theme-md font-bold text-gray-800 dark:text-white/90">Atividade Recente</h2>
          <RecentActivityCard/>
          <div className="flex-1">
            <ChalengeDayCard />
          </div>
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
