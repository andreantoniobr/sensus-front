import { useState } from "react";
import { motion } from "framer-motion";
import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import Button from "../components/ui/button/Button";
import Input from "../components/form/input/InputField";
import QuestionListCard from "../components/atoms/QuestionListCard";
import { useNavigate } from "react-router";

import {
  HiMagnifyingGlass,
  HiAdjustmentsHorizontal,
  HiCodeBracket,
} from "react-icons/hi2";

import {
  AiOutlinePython,
  AiOutlineJavaScript,
} from "react-icons/ai";
import { LiaReact } from "react-icons/lia";

type Difficulty = "all" | "iniciante" | "intermediario" | "avancado";

const questions = [
  {
    id: 1,
    title: "Python do Zero ao Avançado",
    difficulty: "iniciante" as Difficulty,
    progress: 68,
    total: 42,
    resolved: 28,
    next: "Listas e Tuplas",
    icon: AiOutlinePython,
    iconColor: "text-yellow-300",
  },
  {
    id: 2,
    title: "JavaScript Moderno (ES6+)",
    difficulty: "iniciante" as Difficulty,
    progress: 35,
    total: 38,
    resolved: 13,
    next: "Promises & Async/Await",
    icon: AiOutlineJavaScript,
    iconColor: "text-orange-300",
  },
  {
    id: 3,
    title: "React.js na Prática",
    difficulty: "intermediario" as Difficulty,
    progress: 12,
    total: 30,
    resolved: 4,
    next: "Componentes e Props",
    icon: LiaReact,
    iconColor: "text-sky-300",
  },
  {
    id: 4,
    title: "Node.js e APIs REST",
    difficulty: "intermediario" as Difficulty,
    progress: 50,
    total: 20,
    resolved: 10,
    next: "Middleware e Rotas",
    icon: HiCodeBracket,
    iconColor: "text-green-300",
  },
  {
    id: 5,
    title: "TypeScript Completo",
    difficulty: "intermediario" as Difficulty,
    progress: 22,
    total: 25,
    resolved: 5,
    next: "Generics",
    icon: HiCodeBracket,
    iconColor: "text-blue-300",
  },
  {
    id: 6,
    title: "Estruturas de Dados",
    difficulty: "avancado" as Difficulty,
    progress: 15,
    total: 40,
    resolved: 6,
    next: "Árvores Binárias",
    icon: HiCodeBracket,
    iconColor: "text-purple-300",
  },
  {
    id: 7,
    title: "Algoritmos Avançados",
    difficulty: "avancado" as Difficulty,
    progress: 10,
    total: 35,
    resolved: 3,
    next: "Programação Dinâmica",
    icon: HiCodeBracket,
    iconColor: "text-red-300",
  },
  {
    id: 8,
    title: "Banco de Dados SQL",
    difficulty: "iniciante" as Difficulty,
    progress: 70,
    total: 20,
    resolved: 14,
    next: "JOINs",
    icon: HiCodeBracket,
    iconColor: "text-cyan-300",
  },
  {
    id: 9,
    title: "Docker para Devs",
    difficulty: "intermediario" as Difficulty,
    progress: 30,
    total: 18,
    resolved: 5,
    next: "Docker Compose",
    icon: HiCodeBracket,
    iconColor: "text-indigo-300",
  },
  {
    id: 10,
    title: "Testes com Jest",
    difficulty: "iniciante" as Difficulty,
    progress: 55,
    total: 16,
    resolved: 9,
    next: "Mocks",
    icon: HiCodeBracket,
    iconColor: "text-pink-300",
  },
];

const difficulties = [
  { value: "all" as Difficulty, label: "Todos os Níveis" },
  { value: "iniciante" as Difficulty, label: "Iniciante" },
  { value: "intermediario" as Difficulty, label: "Intermediário" },
  { value: "avancado" as Difficulty, label: "Avançado" },
];

const QuestionListPage = () => {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty>("all");
  const navigate = useNavigate();

  const filtered = questions.filter((q) => {
    const matchSearch = q.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDiff = difficulty === "all" || q.difficulty === difficulty;

    return matchSearch && matchDiff;
  });

  return (
    <div>
      <PageMeta
        title="Listas de Questões | Sensus"
        description="Resolva listas de questões filtradas por dificuldade."
      />
      <PageBreadcrumb pageTitle="Listas de Questões" />

      <div>
        {/* 🔎 FILTROS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 space-y-4"
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <HiMagnifyingGlass
              size={18}
              className="absolute z-30 -translate-y-1/2 right-4 top-1/2 text-custom-blue-100 dark:text-gray-400"
            />
            <Input
              type="text"
              placeholder="Buscar listas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Dificuldade */}
          <div className="flex flex-wrap justify-center gap-2">
            <HiAdjustmentsHorizontal
              size={18}
              className="text-custom-blue-100 self-center"
            />
            {difficulties.map((d) => (
              <Button
                key={d.value}
                size="xs"
                fontSize="xs"
                variant={difficulty === d.value ? "black" : "outline"}
                onClick={() => setDifficulty(d.value)}
                className="font-space font-semibold rounded-full px-4 py-2 text-xs"
              >
                {d.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* 📊 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((q, i) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <QuestionListCard
                onClick={() => navigate("/listas/questoes")}
                icon={q.icon}
                iconColor={q.iconColor}
                value={q.progress}
                title={q.title}
                nextChallengeText={`Próximo desafio: ${q.next}`}
                label={`${q.resolved} de ${q.total} desafios`}
              />
            </motion.div>
          ))}
        </div>

        {/* ❌ EMPTY */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <HiCodeBracket
              size={48}
              className="mx-auto text-muted-foreground/40 mb-4"
            />
            <p className="text-muted-foreground">
              Nenhuma lista de questões encontrada.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionListPage;