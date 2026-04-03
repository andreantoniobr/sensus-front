import StatCard from "../atoms/StatsCard";
import { HiOutlineClock } from "react-icons/hi2";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { HiOutlineBookOpen } from "react-icons/hi2";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">      
      <StatCard
        icon={HiOutlineClock}
        value="48h"
        label="Horas Estudadas"
      />
      <StatCard
        icon={HiOutlineCheckCircle}
        value="7"
        label="Tilhas Concluidas"
      />
      <StatCard
        icon={HiOutlineCodeBracket}
        value="27"
        label="Questões Respondidas"
      />
      <StatCard
        icon={HiOutlineBookOpen}
        value="3"
        label="Listas de Questões Concluídas"
      />
    </div>
  );
}
