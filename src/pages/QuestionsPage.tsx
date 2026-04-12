import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineChevronRight,
  HiMagnifyingGlass,
  HiAdjustmentsHorizontal,
} from "react-icons/hi2";
import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import Badge from "../components/ui/badge/Badge";
import { BadgeColor } from "../components/ui/badge/Badge";
import Input from "../components/form/input/InputField";
import Button from "../components/ui/button/Button";
import ComponentCard from "../components/common/ComponentCard";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  title: string;
  difficulty: "Fácil" | "Médio" | "Difícil";
  status: "Respondido" | "Pendente";
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "Soma de Dois Números",
    difficulty: "Fácil",
    status: "Respondido",
    category: "Lógica",
  },
  {
    id: 2,
    title: "Palíndromo",
    difficulty: "Fácil",
    status: "Respondido",
    category: "Strings",
  },
  {
    id: 3,
    title: "FizzBuzz",
    difficulty: "Fácil",
    status: "Pendente",
    category: "Lógica",
  },
  {
    id: 4,
    title: "Ordenação por Bolha",
    difficulty: "Médio",
    status: "Pendente",
    category: "Algoritmos",
  },
  {
    id: 5,
    title: "Busca Binária",
    difficulty: "Médio",
    status: "Respondido",
    category: "Algoritmos",
  },
  {
    id: 6,
    title: "Lista Encadeada",
    difficulty: "Médio",
    status: "Pendente",
    category: "Estruturas",
  },
  {
    id: 7,
    title: "Árvore Binária de Busca",
    difficulty: "Difícil",
    status: "Pendente",
    category: "Estruturas",
  },
  {
    id: 8,
    title: "Dijkstra - Menor Caminho",
    difficulty: "Difícil",
    status: "Pendente",
    category: "Grafos",
  },
  {
    id: 9,
    title: "Merge Sort",
    difficulty: "Médio",
    status: "Respondido",
    category: "Algoritmos",
  },
  {
    id: 10,
    title: "Programação Dinâmica - Mochila",
    difficulty: "Difícil",
    status: "Pendente",
    category: "DP",
  },
];

const statusFilters = [
  { value: "Todos", label: "Todos" },
  { value: "Respondido", label: "Respondido" },
  { value: "Pendente", label: "Pendente" },
] as const;

type StatusFilter = (typeof statusFilters)[number]["value"];

const difficultyColor: Record<Question["difficulty"], BadgeColor> = {
  Fácil: "success",
  Médio: "warning",
  Difícil: "error",
};

const statusColor: Record<Question["status"], BadgeColor> = {
  Respondido: "success",
  Pendente: "light",
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function QuestionsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("Todos");

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      const matchSearch =
        q.title.toLowerCase().includes(search.toLowerCase()) ||
        q.category.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "Todos" || q.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-12"
    >
      <PageMeta
        title="Lista de Questões | Sensus - Plataforma de Avaliação Acadêmica"
        description="Resolva problemas de lógica e programação."
      />
      <PageBreadcrumb pageTitle="Lista de Questões" />

      <motion.div variants={item} className="space-y-4">
        <div className="relative max-w-md mx-auto">
          <HiMagnifyingGlass
            size={18}
            className="absolute z-30 -translate-y-1/2 right-4 top-1/2 text-custom-blue-100 dark:text-gray-400"
          />
          <Input
            type="text"
            placeholder="Buscar questão..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <HiAdjustmentsHorizontal
            size={18}
            className="text-custom-blue-100 dark:text-gray-400 self-center"
          />
          {statusFilters.map((f) => (
            <Button
              key={f.value}
              size="xs"
              fontSize="xs"
              variant={statusFilter === f.value ? "black" : "outline"}
              onClick={() => setStatusFilter(f.value)}
              className="font-space font-semibold rounded-full px-4 py-2 text-xs"
            >
              {f.label}
            </Button>
          ))}
        </div>
      </motion.div>

      <ComponentCard title="Questões">
        <motion.div variants={item}>
          <div className="hidden sm:grid grid-cols-[40px_1fr_110px_130px_120px_32px] gap-4 px-5 py-5 bg-gray-50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-gray-800 text-xs font-bold uppercase tracking-wider text-custom-blue-100 dark:text-gray-400">
            <span>#</span>
            <span>Problema</span>
            <span>Categoria</span>
            <span>Dificuldade</span>
            <span>Status</span>
            <span />
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {filtered.map((q, i) => (
              <Link to="/responder-questao">
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="grid grid-cols-[40px_1fr_32px] sm:grid-cols-[40px_1fr_110px_130px_120px_32px] gap-4 px-5 py-4 items-center hover:bg-custom-blue-50 dark:hover:bg-white/5 transition-colors cursor-pointer group"
                >
                  <span className="text-sm text-custom-blue-100 dark:text-gray-400 font-space">
                    {String(q.id).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-2 min-w-0">
                    <HiOutlineClipboardDocumentList
                      size={16}
                      className="text-gray-400 shrink-0"
                    />
                    <h3 className="text-sm font-medium text-gray-800 dark:text-white/90 truncate">
                      {q.title}
                    </h3>
                  </div>

                  <div className="hidden sm:block">
                    <Badge size="sm" color="light">
                      {q.category}
                    </Badge>
                  </div>

                  <div className="hidden sm:block">
                    <Badge size="sm" color={difficultyColor[q.difficulty]}>
                      {q.difficulty}
                    </Badge>
                  </div>

                  <div className="hidden sm:block">
                    <Badge size="sm" color={statusColor[q.status]}>
                      {q.status}
                    </Badge>
                  </div>

                  <HiOutlineChevronRight
                    size={15}
                    className="text-gray-300 dark:text-gray-600 group-hover:text-brand-500 transition-colors"
                  />
                </motion.div>
              </Link>
            ))}

            {filtered.length === 0 && (
              <div className="py-12 text-center text-sm text-gray-400">
                Nenhuma questão encontrada.
              </div>
            )}
          </div>
        </motion.div>
      </ComponentCard>
    </motion.div>
  );
}
