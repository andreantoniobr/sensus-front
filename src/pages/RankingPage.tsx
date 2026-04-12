import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineTrophy,
  HiOutlineFire,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineCheckCircle,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { FaMedal } from "react-icons/fa";
import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import StatCard from "../components/atoms/StatsCard";
import Badge from "../components/ui/badge/Badge";

interface Student {
  id: number;
  name: string;
  solvedQuestions: number;
  accuracy: number;
  streak: number;
  level: "Iniciante" | "Intermediário" | "Avançado";
}

const students: Student[] = [
  { id: 1, name: "João Mendes", solvedQuestions: 142, accuracy: 94, streak: 21, level: "Avançado" },
  { id: 2, name: "Ana Clara Silva", solvedQuestions: 138, accuracy: 96, streak: 18, level: "Avançado" },
  { id: 3, name: "Pedro Oliveira", solvedQuestions: 130, accuracy: 91, streak: 15, level: "Intermediário" },
  { id: 4, name: "Maria Eduarda Costa", solvedQuestions: 125, accuracy: 89, streak: 12, level: "Intermediário" },
  { id: 5, name: "João Victor Almeida", solvedQuestions: 118, accuracy: 87, streak: 10, level: "Intermediário" },
  { id: 6, name: "Beatriz Ferreira", solvedQuestions: 112, accuracy: 90, streak: 8, level: "Intermediário" },
  { id: 7, name: "Gabriel Santos", solvedQuestions: 105, accuracy: 85, streak: 7, level: "Iniciante" },
  { id: 8, name: "Isabela Rodrigues", solvedQuestions: 98, accuracy: 88, streak: 6, level: "Iniciante" },
  { id: 9, name: "Rafael Lima", solvedQuestions: 92, accuracy: 82, streak: 5, level: "Iniciante" },
  { id: 10, name: "Camila Souza", solvedQuestions: 88, accuracy: 84, streak: 4, level: "Iniciante" },
  { id: 11, name: "Thiago Martins", solvedQuestions: 82, accuracy: 80, streak: 3, level: "Iniciante" },
  { id: 12, name: "Larissa Araújo", solvedQuestions: 76, accuracy: 79, streak: 2, level: "Iniciante" },
  { id: 13, name: "Felipe Barbosa", solvedQuestions: 70, accuracy: 77, streak: 1, level: "Iniciante" },
  { id: 14, name: "Juliana Pereira", solvedQuestions: 65, accuracy: 81, streak: 3, level: "Iniciante" },
  { id: 15, name: "Mateus Gomes", solvedQuestions: 58, accuracy: 75, streak: 1, level: "Iniciante" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

const medalColors = ["text-yellow-400", "text-gray-400", "text-orange-400"];

const podiumBg = [
  "bg-yellow-50 border-yellow-200 dark:bg-yellow-400/10 dark:border-yellow-400/20",
  "bg-gray-50 border-gray-200 dark:bg-gray-400/10 dark:border-gray-400/20",
  "bg-orange-50 border-orange-200 dark:bg-orange-400/10 dark:border-orange-400/20",
];

const levelColor: Record<Student["level"], "success" | "warning" | "info"> = {
  Iniciante: "success",
  Intermediário: "warning",
  Avançado: "info",
};

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}

function accuracyColor(n: number) {
  if (n >= 90) return "success" as const;
  if (n >= 80) return "warning" as const;
  return "error" as const;
}

const podiumOrder = [1, 0, 2];

export default function RankingPage() {
  const [search, setSearch] = useState("");

  const top3 = students.slice(0, 3);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalQuestions = students.reduce((acc, s) => acc + s.solvedQuestions, 0);
  const avgAccuracy = Math.round(students.reduce((acc, s) => acc + s.accuracy, 0) / students.length);
  const avgStreak = Math.round(students.reduce((acc, s) => acc + s.streak, 0) / students.length);

  return (
    <div className="space-y-12">
      <PageMeta
        title="Ranking de Alunos | Sensus"
        description="Veja os alunos com melhor desempenho na plataforma."
      />
      <PageBreadcrumb pageTitle="Ranking de Alunos" />

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">

        <motion.div variants={item} className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">
          <StatCard
            icon={HiOutlineUsers}
            value={String(students.length)}
            label="Total de Alunos"
            gradient="bg-brand-50"
            iconColor="text-brand-500"
          />
          <StatCard
            icon={HiOutlineDocumentText}
            value={String(totalQuestions)}
            label="Questões Resolvidas"
            gradient="bg-blue-light-100"
            iconColor="text-blue-light-500"
          />
          <StatCard
            icon={HiOutlineCheckCircle}
            value={`${avgAccuracy}%`}
            label="Média de Acertos"
            gradient="bg-success-100"
            iconColor="text-success-600"
          />
          <StatCard
            icon={HiOutlineFire}
            value={`${avgStreak}d`}
            label="Sequência Média"
            gradient="bg-warning-100"
            iconColor="text-warning-600"
          />
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-3 gap-6 items-end">
          {podiumOrder.map((idx, visualPos) => {
            const student = top3[idx];
            const pos = idx + 1;
            const isFirst = idx === 0;
            return (
              <motion.div
                key={student.id}
                whileHover={{ y: -4 }}
                transition={{ delay: visualPos * 0.1 }}
                className={`relative flex flex-col items-center rounded-2xl border p-5 shadow-soft-md text-center ${podiumBg[idx]} ${isFirst ? "pb-7 -mt-4" : ""}`}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className={`flex items-center justify-center rounded-full w-7 h-7 text-xs font-bold border-2 ${
                    idx === 0 ? "bg-yellow-400 border-yellow-300 text-yellow-900" :
                    idx === 1 ? "bg-gray-300 border-gray-200 text-gray-700" :
                    "bg-orange-400 border-orange-300 text-orange-900"
                  }`}>
                    {pos}º
                  </div>
                </div>

                <FaMedal className={`text-2xl mb-2 mt-1 ${medalColors[idx]}`} />

                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-2">
                  <span className="text-sm font-bold text-gray-700 dark:text-white/80">
                    {getInitials(student.name)}
                  </span>
                </div>

                <p className="text-sm font-bold text-gray-800 dark:text-white/90 leading-tight mb-2">
                  {student.name}
                </p>

                <Badge size="sm" color={levelColor[student.level]}>
                  {student.level}
                </Badge>

                <div className="mt-3 space-y-1 w-full">
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Questões</span>
                    <span className="font-semibold text-gray-800 dark:text-white/80">{student.solvedQuestions}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Acertos</span>
                    <span className="font-semibold text-gray-800 dark:text-white/80">{student.accuracy}%</span>
                  </div>
                  {student.streak > 0 && (
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Sequência</span>
                      <span className="font-semibold text-orange-500 flex items-center gap-0.5">
                        <HiOutlineFire size={12} /> {student.streak}d
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={item}
          className="rounded-2xl border border-custom-blue-100 bg-white dark:border-gray-800 dark:bg-white/[0.03] shadow-soft-md overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
            <h2 className="text-sm font-bold text-gray-800 dark:text-white/90 flex items-center gap-2">
              <HiOutlineTrophy size={18} className="text-custom-blue-100 dark:text-gray-400" />
              Ranking Completo
            </h2>

            <div className="relative w-56">
              <HiOutlineMagnifyingGlass
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Buscar aluno..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
              />
            </div>
          </div>

          <div className="p-4 space-y-1">
            <div className="hidden sm:grid grid-cols-12 gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-custom-blue-100 dark:text-gray-400">
              <span className="col-span-1 text-center">#</span>
              <span className="col-span-4">Aluno</span>
              <span className="col-span-2 text-center">Nível</span>
              <span className="col-span-2 text-center">Questões</span>
              <span className="col-span-2 text-center">Acertos</span>
              <span className="col-span-1 text-center">🔥</span>
            </div>

            {filtered.map((student, index) => {
              const pos = students.indexOf(student) + 1;
              return (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="grid grid-cols-12 gap-2 items-center px-3 py-3 rounded-xl hover:bg-custom-blue-50 dark:hover:bg-white/5 transition-colors"
                >
                  <div className="col-span-1 flex justify-center">
                    {pos <= 3
                      ? <FaMedal className={`text-base ${medalColors[pos - 1]}`} />
                      : <span className="text-sm font-bold text-gray-400">{pos}º</span>
                    }
                  </div>

                  <div className="col-span-8 sm:col-span-4 flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-gray-600 dark:text-white/70">
                        {getInitials(student.name)}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90 truncate">
                      {student.name}
                    </p>
                  </div>

                  <div className="hidden sm:flex col-span-2 justify-center">
                    <Badge size="sm" color={levelColor[student.level]}>
                      {student.level}
                    </Badge>
                  </div>

                  <div className="hidden sm:block col-span-2 text-center">
                    <span className="text-sm font-semibold text-gray-800 dark:text-white/90">
                      {student.solvedQuestions}
                    </span>
                  </div>

                  <div className="hidden sm:flex col-span-2 justify-center">
                    <Badge size="sm" color={accuracyColor(student.accuracy)}>
                      {student.accuracy}%
                    </Badge>
                  </div>

                  <div className="hidden sm:block col-span-1 text-center">
                    {student.streak > 0 && (
                      <span className="text-sm font-semibold text-orange-500 flex items-center justify-center gap-0.5">
                        <HiOutlineFire size={13} />{student.streak}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {filtered.length === 0 && (
              <p className="text-center text-sm text-gray-400 py-10">
                Nenhum aluno encontrado.
              </p>
            )}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}