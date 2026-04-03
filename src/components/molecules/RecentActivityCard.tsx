import RecentActivity from "../atoms/RecentActivity";

import { HiOutlineCheckCircle } from "react-icons/hi2";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineTrophy } from "react-icons/hi2";

type RecentActivityCardProps = {
  className?: string;
};

function RecentActivityCard({ className = "" }: RecentActivityCardProps) {
  return (
    <div
      className={`rounded-2xl border border-custom-blue-100 bg-white px-5 md:px-6 py-2 
      dark:border-gray-800 dark:bg-white/[0.03] shadow-soft-md divide-y divide-gray-100 dark:divide-gray-800 ${className}`}
    >
      <RecentActivity
        icon={HiOutlineCheckCircle}
        title="Completou Desafio: Loops em Python"
        time="2 horas atrás"
      />
      <RecentActivity
        icon={HiOutlineRocketLaunch}
        title="Iniciou uma Lista: React.js na Prática"
        time="Ontem"
      />
      <RecentActivity
        icon={HiOutlineTrophy}
        title="Conquistou Badge: 24h estudadas"
        time="Há 3 dias"
      />
    </div>
  );
}

export default RecentActivityCard;
