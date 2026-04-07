import { useState } from "react";
import { motion } from "framer-motion";
import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import Badge, { type BadgeColor } from "../components/ui/badge/Badge";
import Button from "../components/ui/button/Button";
import Input from "../components/form/input/InputField";
import {
  HiMagnifyingGlass,
  HiClock,
  HiUserGroup,
  HiStar,
  HiCodeBracket,
  HiAdjustmentsHorizontal,
} from "react-icons/hi2";

type Difficulty = "all" | "iniciante" | "intermediario" | "avancado";
type Category = "all" | "web" | "mobile" | "data" | "devops" | "fundamentos";

const courses = [
  {
    id: 1,
    title: "Python do Zero ao Avançado",
    category: "fundamentos" as Category,
    difficulty: "iniciante" as Difficulty,
    duration: "40h",
    students: 2340,
    rating: 4.9,
    image: "🐍",
    tags: ["Python", "Lógica"],
  },
  {
    id: 2,
    title: "JavaScript Moderno (ES6+)",
    category: "web" as Category,
    difficulty: "iniciante" as Difficulty,
    duration: "35h",
    students: 3120,
    rating: 4.8,
    image: "⚡",
    tags: ["JavaScript", "Web"],
  },
  {
    id: 3,
    title: "React.js na Prática",
    category: "web" as Category,
    difficulty: "intermediario" as Difficulty,
    duration: "30h",
    students: 1850,
    rating: 4.9,
    image: "⚛️",
    tags: ["React", "Frontend"],
  },
  {
    id: 4,
    title: "Node.js & APIs REST",
    category: "web" as Category,
    difficulty: "intermediario" as Difficulty,
    duration: "28h",
    students: 1420,
    rating: 4.7,
    image: "🟢",
    tags: ["Node.js", "Backend"],
  },
  {
    id: 5,
    title: "Java & Orientação a Objetos",
    category: "fundamentos" as Category,
    difficulty: "iniciante" as Difficulty,
    duration: "45h",
    students: 1980,
    rating: 4.6,
    image: "☕",
    tags: ["Java", "OOP"],
  },
  {
    id: 6,
    title: "React Native - Apps Mobile",
    category: "mobile" as Category,
    difficulty: "intermediario" as Difficulty,
    duration: "32h",
    students: 920,
    rating: 4.8,
    image: "📱",
    tags: ["React Native", "Mobile"],
  },
  {
    id: 7,
    title: "Banco de Dados SQL & NoSQL",
    category: "data" as Category,
    difficulty: "iniciante" as Difficulty,
    duration: "20h",
    students: 1650,
    rating: 4.5,
    image: "🗄️",
    tags: ["SQL", "MongoDB"],
  },
  {
    id: 8,
    title: "Docker & Kubernetes",
    category: "devops" as Category,
    difficulty: "avancado" as Difficulty,
    duration: "25h",
    students: 780,
    rating: 4.9,
    image: "🐳",
    tags: ["Docker", "DevOps"],
  },
  {
    id: 9,
    title: "Estruturas de Dados & Algoritmos",
    category: "fundamentos" as Category,
    difficulty: "avancado" as Difficulty,
    duration: "50h",
    students: 1100,
    rating: 4.7,
    image: "🧠",
    tags: ["Algoritmos", "Lógica"],
  },
  {
    id: 10,
    title: "TypeScript Completo",
    category: "web" as Category,
    difficulty: "intermediario" as Difficulty,
    duration: "22h",
    students: 1340,
    rating: 4.8,
    image: "🔷",
    tags: ["TypeScript", "Web"],
  },
  {
    id: 11,
    title: "Data Science com Python",
    category: "data" as Category,
    difficulty: "intermediario" as Difficulty,
    duration: "38h",
    students: 890,
    rating: 4.6,
    image: "📊",
    tags: ["Python", "Data"],
  },
  {
    id: 12,
    title: "C para Iniciantes",
    category: "fundamentos" as Category,
    difficulty: "iniciante" as Difficulty,
    duration: "30h",
    students: 1560,
    rating: 4.5,
    image: "⚙️",
    tags: ["C", "Fundamentos"],
  },
];

const categories = [
  { value: "all" as Category, label: "Todos" },
  { value: "fundamentos" as Category, label: "Fundamentos" },
  { value: "web" as Category, label: "Web" },
  { value: "mobile" as Category, label: "Mobile" },
  { value: "data" as Category, label: "Dados" },
  { value: "devops" as Category, label: "DevOps" },
];

const difficulties = [
  { value: "all" as Difficulty, label: "Todos os Níveis" },
  { value: "iniciante" as Difficulty, label: "Iniciante" },
  { value: "intermediario" as Difficulty, label: "Intermediário" },
  { value: "avancado" as Difficulty, label: "Avançado" },
];

const difficultyBadgeColor: Record<string, BadgeColor> = {
  iniciante: "success",
  intermediario: "warning",
  avancado: "error",
};

const difficultyLabels: Record<string, string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediário",
  avancado: "Avançado",
};

const TrailsPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [difficulty, setDifficulty] = useState<Difficulty>("all");

  const filtered = courses.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchCat = category === "all" || c.category === category;
    const matchDiff = difficulty === "all" || c.difficulty === difficulty;
    return matchSearch && matchCat && matchDiff;
  });

  return (
    <div>
      <PageMeta
        title="Trilhas de Aprendizado | Sensus - Plataforma de Avaliação Acadêmica"
        description="Acesse o Sensus para acompanhar suas disciplinas, resolver exercícios, participar de avaliações e receber feedback inteligente com apoio de IA."
      />
      <PageBreadcrumb pageTitle="Trilhas de Aprendizado" />

      <div>
   


        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10 space-y-4"
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <HiMagnifyingGlass
              size={18}
              className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2 text-custom-blue-100 dark:text-gray-400"
            />
            <Input
              type="text"
              placeholder="Buscar trilhas, linguagens..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
   
            />
          </div>

          

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <Button
                key={c.value}
                size="xs"
                fontSize="xs"
                variant={category === c.value ? "primary" : "secondary"}
                onClick={() => setCategory(c.value)}
                className="font-space font-semibold rounded-full px-4 py-2 text-xs transition-all"
              >
                {c.label}
              </Button>
            ))}
          </div>

          {/* Difficulty */}
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
                className="font-space font-semibold rounded-full px-4 py-2 text-xs transition-all"
              >
                {d.label}
              </Button>              
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-white  dark:bg-white/[0.03] shadow-soft-md border border-custom-blue-100 dark:border-gray-800 overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-32 bg-gradient-1 flex items-center justify-center text-5xl relative">
                <span>{course.image}</span>
                <div className="absolute top-0 right-3">
                  <Badge
                    size="sm"
                    variant="light"
                    color={difficultyBadgeColor[course.difficulty]}
                  >
                    {difficultyLabels[course.difficulty]}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-800 dark:text-white/90 mb-3 group-hover:text-brand-500 transition-colors">
                  {course.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {course.tags.map((tag) => (
                    <Badge key={tag} size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-custom-blue-100 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <HiClock size={18} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1 ">
                    <HiUserGroup size={18} /> {course.students.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiStar size={18} className="text-amber-500" />{" "}
                    {course.rating}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <HiCodeBracket
              size={48}
              className="mx-auto text-muted-foreground/40 mb-4"
            />
            <p className="text-muted-foreground">
              Nenhum curso encontrado com esses filtros.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailsPage;
