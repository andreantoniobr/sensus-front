import { motion } from "framer-motion";
import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";

import { HiTrophy } from "react-icons/hi2";
import { FaMedal } from "react-icons/fa";

// 🔥 Dados mockados
const ranking = [
  { id: 1, name: "João Silva", points: 1250, level: "Avançado" },
  { id: 2, name: "Maria Souza", points: 1100, level: "Intermediário" },
  { id: 3, name: "Carlos Lima", points: 980, level: "Intermediário" },
  { id: 4, name: "Ana Costa", points: 870, level: "Iniciante" },
  { id: 5, name: "Pedro Alves", points: 820, level: "Iniciante" },
  { id: 6, name: "Fernanda Rocha", points: 780, level: "Intermediário" },
  { id: 7, name: "Lucas Martins", points: 720, level: "Iniciante" },
];

// 🎯 animações
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

// 🎨 cores por posição
const medalColors = [
  "text-yellow-400", // 🥇
  "text-gray-400",   // 🥈
  "text-orange-400", // 🥉
];

export default function RankingPage() {
  return (
    <>
      <PageMeta
        title="Ranking de Alunos | Sensus"
        description="Veja os alunos com melhor desempenho na plataforma"
      />

      <PageBreadcrumb pageTitle="Ranking de Alunos" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {/* 🏆 TOP 3 */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {ranking.slice(0, 3).map((user, index) => (
            <motion.div
              key={user.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 text-center shadow-sm"
            >
              <FaMedal className={`mx-auto text-3xl mb-2 ${medalColors[index]}`} />
              <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                {user.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {user.level}
              </p>
              <p className="mt-2 font-semibold text-primary">
                {user.points} pts
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 📊 LISTA GERAL */}
        <motion.div
          variants={item}
          className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-4"
        >
          <h2 className="font-bold text-gray-800 dark:text-white mb-4">
            Classificação Geral
          </h2>

          <div className="space-y-2">
            {ranking.map((user, index) => (
              <motion.div
                key={user.id}
                variants={item}
                whileHover={{ scale: 1.01 }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition"
              >
                {/* posição + nome */}
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/10 text-sm font-bold">
                    {index + 1}
                  </span>

                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {user.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {user.level}
                    </p>
                  </div>
                </div>

                {/* pontos */}
                <div className="flex items-center gap-2">
                  {index < 3 && (
                    <HiTrophy className={medalColors[index]} />
                  )}
                  <span className="font-semibold text-primary">
                    {user.points} pts
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}