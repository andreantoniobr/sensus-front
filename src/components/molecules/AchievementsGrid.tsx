import {
  HiOutlineAcademicCap,
  HiOutlineFire,
  HiOutlineStar,
  HiOutlineClipboardDocumentList,
  HiOutlineBolt,
  HiOutlineCodeBracketSquare,
} from "react-icons/hi2";

import AchievementCard from "../atoms/AchievementCard";

export default function AchievementsGrid() {
  const achievements = [
    {
      icon: HiOutlineAcademicCap,
      title: "Primeira Prova",
      description: "Completou sua primeira prova",
    },
    {
      icon: HiOutlineFire,
      title: "Sequência de 7 dias",
      description: "Resolveu questões por 7 dias seguidos",
    },
    {
      icon: HiOutlineStar,
      title: "Nota Máxima",
      description: "Tirou 10 em uma atividade",
    },
    {
      icon: HiOutlineClipboardDocumentList,
      title: "50 Questões",
      description: "Resolveu 50 questões no modo treino",
    },
    {
      icon: HiOutlineBolt,
      title: "Maratonista",
      description: "Resolveu 20 questões em um dia",
    },
    {
      icon: HiOutlineCodeBracketSquare,
      title: "Full Stack",
      description: "Completou módulos de front e back",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((item, index) => (
        <AchievementCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}