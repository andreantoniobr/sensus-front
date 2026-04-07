import { useMemo, useState } from "react";
import Tabs, { TabOption } from "../components/ui/Tabs";
import AssessmentActivitie from "../components/atoms/AssessmentActivitie";
import { Atividade } from "../lib/types/Assessments";
import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";

// 🔥 derive o tipo automaticamente (melhor prática)
const baseOptions = [
  { value: "todas", label: "Todas" },
  { value: "prova", label: "Provas" },
  { value: "trabalho", label: "Trabalhos" },
  { value: "treino", label: "Treino" },
] as const;

type TabType = (typeof baseOptions)[number]["value"];

export default function AtividadesAvaliativas() {
  const [tab, setTab] = useState<TabType>("todas");

 // ✅ MOCK LOCAL
const atividades: Atividade[] = [
  {
    id: "1",
    titulo: "Prova 1 — Estruturas de Dados",
    tipo: "prova",
    status: "aberta",
    disciplina: "Estruturas de Dados",
    dataAbertura: "06/04/2026 08:00",
    dataEncerramento: "06/04/2026 22:00",
    duracao: "2h",
    notaMaxima: 10,
    questoes: 15,
    temSenha: true,
    descricao: "Listas, Filas, Pilhas e Árvores Binárias.",
  },
  {
    id: "2",
    titulo: "Prova 2 — Banco de Dados",
    tipo: "prova",
    status: "agendada",
    disciplina: "Banco de Dados",
    dataAbertura: "12/04/2026 14:00",
    dataEncerramento: "12/04/2026 18:00",
    duracao: "1h30",
    notaMaxima: 10,
    questoes: 20,
    temSenha: true,
    descricao: "SQL avançado, normalização e transações.",
  },
  {
    id: "3",
    titulo: "Prova 1 — Algoritmos",
    tipo: "prova",
    status: "concluida",
    disciplina: "Algoritmos",
    dataAbertura: "20/03/2026 08:00",
    dataEncerramento: "20/03/2026 12:00",
    duracao: "2h",
    nota: 8.5,
    notaMaxima: 10,
    questoes: 12,
    temSenha: false,
    descricao: "Ordenação, busca e recursão.",
  },
  {
    id: "4",
    titulo: "Prova 3 — Redes",
    tipo: "prova",
    status: "encerrada",
    disciplina: "Redes de Computadores",
    dataAbertura: "01/03/2026 10:00",
    dataEncerramento: "01/03/2026 14:00",
    duracao: "2h",
    notaMaxima: 10,
    questoes: 18,
    temSenha: false,
    descricao: "Camadas OSI e protocolos TCP/IP.",
  },
  {
    id: "5",
    titulo: "Trabalho — API REST com Node.js",
    tipo: "trabalho",
    status: "aberta",
    disciplina: "Programação Web",
    dataEncerramento: "15/04/2026 23:59",
    notaMaxima: 10,
    questoes: 1,
    temSenha: false,
    descricao:
      "Desenvolver uma API RESTful com autenticação JWT e CRUD completo.",
  },
  {
    id: "6",
    titulo: "Trabalho — Modelagem UML",
    tipo: "trabalho",
    status: "concluida",
    disciplina: "Engenharia de Software",
    dataEncerramento: "10/03/2026 23:59",
    nota: 9.0,
    notaMaxima: 10,
    questoes: 1,
    temSenha: false,
    descricao:
      "Diagramas de classe, sequência e caso de uso para um sistema ERP.",
  },
  {
    id: "7",
    titulo: "Trabalho — Dashboard React",
    tipo: "trabalho",
    status: "em_andamento",
    disciplina: "Programação Web",
    dataEncerramento: "20/04/2026 23:59",
    notaMaxima: 10,
    questoes: 1,
    temSenha: false,
    descricao:
      "Criar um dashboard responsivo com gráficos usando Recharts.",
  },
  {
    id: "8",
    titulo: "Modo Treino — Lógica de Programação",
    tipo: "treino",
    status: "aberta",
    disciplina: "Lógica de Programação",
    notaMaxima: 100,
    questoes: 30,
    temSenha: false,
    descricao:
      "Pratique com 30 questões de lógica e raciocínio.",
  },
  {
    id: "9",
    titulo: "Modo Treino — SQL Básico",
    tipo: "treino",
    status: "em_andamento",
    disciplina: "Banco de Dados",
    notaMaxima: 100,
    questoes: 25,
    temSenha: false,
    descricao:
      "SELECT, INSERT, UPDATE e DELETE com exercícios práticos.",
  },
  {
    id: "10",
    titulo: "Modo Treino — Algoritmos Avançados",
    tipo: "treino",
    status: "concluida",
    disciplina: "Algoritmos",
    nota: 85,
    notaMaxima: 100,
    questoes: 20,
    temSenha: false,
    descricao:
      "Grafos, programação dinâmica e backtracking.",
  },
];

  // 🔥 options com contagem (memoizado)
  const options: TabOption<TabType>[] = useMemo(() => {
    return baseOptions.map((opt) => {
      const count =
        opt.value === "todas"
          ? atividades.length
          : atividades.filter((a) => a.tipo === opt.value).length;

      return {
        value: opt.value,
        label: `${opt.label} (${count})`,
      };
    });
  }, [atividades]);

  // 🔥 filtro otimizado
  const filtered = useMemo(() => {
    if (tab === "todas") return atividades;
    return atividades.filter((a) => a.tipo === tab);
  }, [tab, atividades]);

  return (
    <div className="p-6 space-y-6">
      <PageMeta
        title="Atividades Avaliativas | Sensus"
        description="Provas, trabalhos e modo treino — tudo em um só lugar."
      />
      <PageBreadcrumb pageTitle="Atividades Avaliativas" />

      {/* TABS */}
      <Tabs<TabType>
        options={options}
        value={tab}
        onChange={setTab}
      />

      {/* LISTA */}
      
        <div
          key={tab}
          className="grid md:grid-cols-2 xl:grid-cols-2 gap-6 items-stretch"          
        >
          {filtered.map((atividade) => (
            <AssessmentActivitie
              key={atividade.id}
              atividade={atividade}
            />
          ))}
        </div>
      

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div className="text-center text-sm text-gray-500 py-10">
          Nenhuma atividade encontrada.
        </div>
      )}
    </div>
  );
}