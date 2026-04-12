import StatCard from "../atoms/StatsCard";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineCheckBadge,
  HiOutlineFire,
  HiOutlineTrophy,
} from "react-icons/hi2";

export default function MyProgressCard() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">
      <StatCard
        icon={HiOutlineClipboardDocumentList}
        value="127"
        label="Questões Resolvidas"
        gradient="bg-success-100"
        iconColor="text-success-600"
      />
      <StatCard
        icon={HiOutlineCheckBadge}
        value="4"
        label="Provas realizadas"
        gradient="bg-blue-light-100"
        iconColor="text-blue-light-500"
      />
      <StatCard
        icon={HiOutlineFire}
        value="05"
        label="Sequência Atual"
        gradient="bg-warning-100"
        iconColor="text-warning-600"
      />
      <StatCard
        icon={HiOutlineTrophy }
        value="3/6"
        label="Conquistas obtidas"
        gradient="bg-purple-100"
        iconColor="text-purple-600"
      />
    </div>
  );
}
