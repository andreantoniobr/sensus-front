import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineChevronDown,
  HiOutlineChevronRight,
  HiOutlineTrophy,
  HiOutlineBookOpen,
  HiOutlineDocumentText,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineExclamationTriangle,
} from "react-icons/hi2";
import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import Tabs, { TabOption } from "../components/ui/Tabs";
import StatCard from "../components/atoms/StatsCard";
import Badge from "../components/ui/badge/Badge";

interface Grade {
  id: number;
  title: string;
  type: "exam" | "assignment" | "exercise" | "project";
  grade: number | null;
  weight: number;
  date: string;
  status: "graded" | "pending" | "late";
}

interface Subject {
  id: number;
  name: string;
  professor: string;
  average: number;
  finalAverage: number | null;
  situation: "passed" | "failed" | "ongoing";
  grades: Grade[];
}

const subjects: Subject[] = [
  {
    id: 1,
    name: "Estruturas de Dados",
    professor: "Prof. Carlos Silva",
    average: 8.2,
    finalAverage: null,
    situation: "ongoing",
    grades: [
      { id: 1, title: "Prova 1 - Listas e Pilhas", type: "exam", grade: 8.5, weight: 3, date: "2026-03-10", status: "graded" },
      { id: 2, title: "Trabalho - Implementação AVL", type: "assignment", grade: 9.0, weight: 2, date: "2026-03-20", status: "graded" },
      { id: 3, title: "Exercícios Semana 5", type: "exercise", grade: 7.0, weight: 1, date: "2026-03-25", status: "graded" },
      { id: 4, title: "Prova 2 - Grafos", type: "exam", grade: null, weight: 3, date: "2026-04-15", status: "pending" },
      { id: 5, title: "Projeto Final", type: "project", grade: null, weight: 4, date: "2026-05-01", status: "pending" },
    ],
  },
  {
    id: 2,
    name: "Banco de Dados",
    professor: "Profa. Ana Souza",
    average: 7.5,
    finalAverage: null,
    situation: "ongoing",
    grades: [
      { id: 6, title: "Prova 1 - SQL Básico", type: "exam", grade: 7.0, weight: 3, date: "2026-03-08", status: "graded" },
      { id: 7, title: "Trabalho - Modelagem ER", type: "assignment", grade: 8.5, weight: 2, date: "2026-03-18", status: "graded" },
      { id: 8, title: "Exercícios - Normalização", type: "exercise", grade: 7.0, weight: 1, date: "2026-03-28", status: "graded" },
      { id: 9, title: "Prova 2 - Transações", type: "exam", grade: null, weight: 3, date: "2026-04-20", status: "pending" },
    ],
  },
  {
    id: 3,
    name: "Programação Web",
    professor: "Prof. Ricardo Lima",
    average: 9.1,
    finalAverage: 9.1,
    situation: "passed",
    grades: [
      { id: 10, title: "Prova 1 - HTML/CSS", type: "exam", grade: 9.5, weight: 3, date: "2026-02-15", status: "graded" },
      { id: 11, title: "Projeto React", type: "project", grade: 9.0, weight: 4, date: "2026-03-01", status: "graded" },
      { id: 12, title: "Prova 2 - APIs REST", type: "exam", grade: 8.8, weight: 3, date: "2026-03-15", status: "graded" },
    ],
  },
  {
    id: 4,
    name: "Cálculo II",
    professor: "Prof. Marcos Oliveira",
    average: 4.8,
    finalAverage: 4.8,
    situation: "failed",
    grades: [
      { id: 13, title: "Prova 1 - Integrais", type: "exam", grade: 5.0, weight: 3, date: "2026-02-10", status: "graded" },
      { id: 14, title: "Lista de Exercícios", type: "exercise", grade: 6.0, weight: 1, date: "2026-02-25", status: "graded" },
      { id: 15, title: "Prova 2 - Séries", type: "exam", grade: 3.5, weight: 3, date: "2026-03-10", status: "graded" },
      { id: 16, title: "Prova Final", type: "exam", grade: 5.0, weight: 3, date: "2026-03-25", status: "graded" },
    ],
  },
];

const typeIcon = {
  exam: HiOutlineDocumentText,
  assignment: HiOutlineBookOpen,
  exercise: HiOutlineCheckCircle,
  project: HiOutlineTrophy,
};

const typeLabel = {
  exam: "Prova",
  assignment: "Trabalho",
  exercise: "Exercício",
  project: "Projeto",
};

const situationLabel: Record<Subject["situation"], string> = {
  passed: "Aprovado",
  failed: "Reprovado",
  ongoing: "Cursando",
};

const statusLabel: Record<Grade["status"], string> = {
  graded: "Corrigido",
  pending: "Pendente",
  late: "Atrasado",
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

function situationColor(s: Subject["situation"]) {
  if (s === "passed") return "success" as const;
  if (s === "failed") return "error" as const;
  return "info" as const;
}

function statusColor(s: Grade["status"]) {
  if (s === "graded") return "success" as const;
  if (s === "pending") return "warning" as const;
  return "error" as const;
}

function gradeColor(n: number) {
  if (n >= 7) return "text-success-600 dark:text-success-400";
  if (n >= 5) return "text-warning-600 dark:text-warning-400";
  return "text-error-600 dark:text-error-400";
}

const baseOptions = [
  { value: "all", label: "Todas" },
  { value: "ongoing", label: "Cursando" },
  { value: "passed", label: "Aprovadas" },
  { value: "failed", label: "Reprovadas" },
] as const;

type TabType = (typeof baseOptions)[number]["value"];

function SubjectCard({
  subject,
  isOpen,
  onToggle,
}: {
  subject: Subject;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={item}
      className="rounded-2xl border border-custom-blue-100 bg-white dark:border-gray-800 dark:bg-white/[0.03] shadow-soft-md overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 md:p-6 hover:bg-custom-blue-50 dark:hover:bg-white/5 transition-colors text-left"
      >
        {isOpen
          ? <HiOutlineChevronDown size={16} className="text-gray-400 shrink-0" />
          : <HiOutlineChevronRight size={16} className="text-gray-400 shrink-0" />
        }

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-bold text-gray-800 dark:text-white/90">{subject.name}</h3>
            <Badge size="sm" color={situationColor(subject.situation)}>
              {situationLabel[subject.situation]}
            </Badge>
          </div>
          <p className="text-sm text-custom-blue-100 dark:text-gray-400 mt-1">{subject.professor}</p>
        </div>

        <div className="text-right shrink-0">
          <p className={`text-lg font-bold font-space ${gradeColor(subject.average)}`}>{subject.average.toFixed(1)}</p>
          <p className="text-sm text-custom-blue-100 dark:text-gray-400">média</p>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-5 md:p-6 space-y-1">
              <div className="hidden sm:grid grid-cols-12 gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-custom-blue-100 dark:text-gray-400">
                <span className="col-span-5">Atividade</span>
                <span className="col-span-2">Tipo</span>
                <span className="col-span-1 text-center">Peso</span>
                <span className="col-span-2 text-center">Nota</span>
                <span className="col-span-2 text-right">Status</span>
              </div>

              {subject.grades.map((g) => {
                const Icon = typeIcon[g.type];
                return (
                  <div
                    key={g.id}
                    className="grid grid-cols-12 gap-2 items-center px-3 py-2.5 rounded-xl hover:bg-custom-blue-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <div className="col-span-12 sm:col-span-5 flex items-center gap-2 min-w-0">
                      <Icon size={15} className="text-gray-400 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90 truncate">{g.title}</p>
                        <p className="text-xs text-gray-400">
                          {new Date(g.date).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:block col-span-2">
                      <Badge size="sm" color="light">
                        {typeLabel[g.type]}
                      </Badge>
                    </div>

                    <div className="hidden sm:block col-span-1 text-center">
                      <span className="text-sm text-gray-400">{g.weight}x</span>
                    </div>

                    <div className="hidden sm:block col-span-2 text-center">
                      {g.grade !== null
                        ? <span className={`text-sm font-bold ${gradeColor(g.grade)}`}>{g.grade.toFixed(1)}</span>
                        : <span className="text-sm text-gray-400">—</span>
                      }
                    </div>

                    <div className="hidden sm:block col-span-2 text-right">
                      <Badge size="sm" color={statusColor(g.status)}>
                        {statusLabel[g.status]}
                      </Badge>
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center justify-between p-4 mt-6 rounded-xl bg-custom-blue-50 dark:bg-gray-800/50">
                <span className="text-sm font-medium text-custom-blue-100 dark:text-gray-400">Média ponderada</span>
                <span className={`text-sm font-bold ${gradeColor(subject.average)}`}>
                  {subject.average.toFixed(1)}
                  <span className="text-xs text-gray-400 font-normal ml-1">/ 10.0</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function MyGradesPage() {
  const [tab, setTab] = useState<TabType>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const overallAverage = subjects.reduce((acc, s) => acc + s.average, 0) / subjects.length;
  const passedCount = subjects.filter((s) => s.situation === "passed").length;
  const failedCount = subjects.filter((s) => s.situation === "failed").length;
  const ongoingCount = subjects.filter((s) => s.situation === "ongoing").length;

  const options: TabOption<TabType>[] = useMemo(() =>
    baseOptions.map((opt) => {
      const count =
        opt.value === "all"
          ? subjects.length
          : subjects.filter((s) => s.situation === opt.value).length;
      return { value: opt.value, label: `${opt.label} (${count})` };
    }),
  []);

  const filtered = useMemo(() =>
    tab === "all" ? subjects : subjects.filter((s) => s.situation === tab),
  [tab]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <PageMeta
        title="Minhas Notas | Sensus - Plataforma de Avaliação Acadêmica"
        description="Acompanhe suas notas por disciplina, provas e trabalhos."
      />
      <PageBreadcrumb pageTitle="Minhas Notas" />

      <motion.div variants={item} className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">
        <StatCard
          icon={HiOutlineAcademicCap}
          value={overallAverage.toFixed(1)}
          label="Média Geral"
          gradient="bg-brand-50"
          iconColor="text-brand-500"
        />
        <StatCard
          icon={HiOutlineClock}
          value={String(ongoingCount)}
          label="Cursando"
          gradient="bg-blue-light-100"
          iconColor="text-blue-light-500"
        />
        <StatCard
          icon={HiOutlineCheckCircle}
          value={String(passedCount)}
          label="Aprovadas"
          gradient="bg-success-100"
          iconColor="text-success-600"
        />
        <StatCard
          icon={HiOutlineExclamationTriangle}
          value={String(failedCount)}
          label="Reprovadas"
          gradient="bg-error-100"
          iconColor="text-error-600"
        />
      </motion.div>

      <motion.div variants={item} className="space-y-4">
        <Tabs<TabType> options={options} value={tab} onChange={setTab} />

        <div className="space-y-3">
          {filtered.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              isOpen={expandedId === subject.id}
              onToggle={() => setExpandedId(expandedId === subject.id ? null : subject.id)}
            />
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-sm text-gray-400 py-10">
              Nenhuma disciplina encontrada.
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}