import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineCheck,
  HiOutlineXMark,
  HiOutlineEllipsisVertical,
  HiOutlinePencilSquare,
  HiOutlineBookOpen,
} from "react-icons/hi2";
import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import Badge from "../components/ui/badge/Badge";

interface Criterion {
  id: number;
  status: "correct" | "error";
  label: string;
  title: string;
  description: string;
  score: number;
  maxScore: number;
}

interface FeedbackItem {
  id: number;
  title: string;
  description: string;
}

interface Question {
  id: number;
  title: string;
  code: string;
  correctItems: string[];
  criteria: Criterion[];
  similarity: number;
  feedback: FeedbackItem[];
  suggestedScore: number;
  maxScore: number;
}

const questions: Question[] = [
  {
    id: 1,
    title: "Questão 01 - Soma de Valores de Uma Lista",
    code: `def soma_lista(lista):
  total = 0
  for i in range(len(lista)):
    total += lista(i)
  return total`,
    correctItems: [
      'Definição correta da função "soma_lista"',
      "Estrutura de loop adequada para percorrer a lista",
      "Retorno correto do valor somado",
    ],
    criteria: [
      { id: 1, status: "correct", label: "Acerto", title: "Definição da Função", description: 'A função "soma_lista" foi definida corretamente, com uma lista como parâmetro.', score: 10, maxScore: 10 },
      { id: 2, status: "correct", label: "Acerto", title: "Estrutura do Loop", description: 'O loop "for" foi usado corretamente para percorrer a lista.', score: 10, maxScore: 10 },
      { id: 3, status: "correct", label: "Acerto", title: "Uso do Return", description: "o return retorna corretamente o valor somado no final.", score: 10, maxScore: 10 },
      { id: 4, status: "error", label: "Erro", title: 'Uso incorreto de "lista(i)"', description: 'O índice "lista(i)" foi usado incorretamente, deveria ser "lista[i]"', score: 0, maxScore: 10 },
    ],
    similarity: 75,
    feedback: [
      { id: 1, title: "Corrigir Índice:", description: 'Você usou "lista(i)". Mudar para "lista[i]" para corrigir.' },
      { id: 2, title: "Estrutura de Loop:", description: 'Bom uso do "For" para percorrer a lista. Parabéns!' },
      { id: 3, title: "Verificação de Lista Vazia Ausente", description: "Incluir uma verificação para listas vazias antes da soma." },
    ],
    suggestedScore: 2.5,
    maxScore: 3,
  },
  {
    id: 2,
    title: "Questão 02 - Verificação de Números Primos",
    code: `def is_primo(n):
  if n < 2:
    return False
  for i in range(2, n):
    if n % i == 0:
      return False
  return True`,
    correctItems: [
      "Verificação de números menores que 2",
      "Loop de divisão correto",
      "Retorno booleano adequado",
    ],
    criteria: [
      { id: 5, status: "correct", label: "Acerto", title: "Caso Base", description: "Verificação correta para números menores que 2.", score: 10, maxScore: 10 },
      { id: 6, status: "correct", label: "Acerto", title: "Estrutura do Loop", description: "Loop percorre os divisores corretamente.", score: 10, maxScore: 10 },
      { id: 7, status: "error", label: "Erro", title: "Otimização do Loop", description: "O loop deveria ir até sqrt(n) para melhor performance.", score: 5, maxScore: 10 },
    ],
    similarity: 60,
    feedback: [
      { id: 4, title: "Otimizar Loop:", description: "Use range(2, int(n**0.5)+1) para melhor performance." },
      { id: 5, title: "Lógica Correta:", description: "A lógica geral está correta, apenas otimize o loop." },
    ],
    suggestedScore: 2,
    maxScore: 3,
  },
  {
    id: 3,
    title: "Questão 03 - Sinal de SOS",
    code: `def sos(mensagem):
  codigo = ""
  for letra in mensagem:
    codigo += letra
  return codigo`,
    correctItems: [],
    criteria: [
      { id: 8, status: "error", label: "Erro", title: "Conversão para Morse", description: "A função não converte para código Morse.", score: 0, maxScore: 10 },
      { id: 9, status: "error", label: "Erro", title: "Uso de Dicionário", description: "Não utiliza dicionário de mapeamento Morse.", score: 0, maxScore: 10 },
    ],
    similarity: 15,
    feedback: [
      { id: 6, title: "Implementar Morse:", description: "Use um dicionário para mapear letras ao código Morse." },
      { id: 7, title: "Lógica Ausente:", description: "A função atual apenas concatena letras, sem conversão." },
    ],
    suggestedScore: 0,
    maxScore: 3,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

function SimilarityChart({ value }: { value: number }) {
  const options: ApexOptions = {
    chart: { type: "donut", sparkline: { enabled: true } },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Similaridade",
              fontSize: "11px",
              color: "#6B7280",
              formatter: () => `${value}%`,
            },
            value: {
              show: false,
            },
          },
        },
      },
    },
    colors: ["#17B26A", "#E5E7EB"],
    series: [value, 100 - value],
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: { width: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <ReactApexChart options={options} series={options.series as number[]} type="donut" width={200} height={200} />
      <p className="text-xs text-gray-500 dark:text-gray-400 -mt-2">Código Similar ao esperado</p>
    </div>
  );
}

function QuestionCard({ question }: { question: Question }) {
  const [isOpen, setIsOpen] = useState(question.id === 1);

  return (
    <motion.div
      variants={item}
      className="rounded-2xl border border-custom-blue-100 bg-white dark:border-gray-800 dark:bg-white/[0.03] shadow-soft-md overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 hover:bg-custom-blue-50 dark:hover:bg-white/5 transition-colors text-left"
      >
        <h3 className="text-sm font-bold text-gray-800 dark:text-white/90">{question.title}</h3>
        {isOpen
          ? <HiOutlineChevronUp size={18} className="text-gray-400 shrink-0" />
          : <HiOutlineChevronDown size={18} className="text-gray-400 shrink-0" />
        }
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-5 md:p-6 space-y-6">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-white/[0.02] p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-custom-blue-100 dark:text-gray-400 mb-3 flex items-center gap-2">
                    <HiOutlineBookOpen size={14} />
                    Código do Aluno
                  </p>
                  <pre className="text-xs text-gray-700 dark:text-gray-300 font-mono leading-6 overflow-x-auto">
                    {question.code.split("\n").map((line, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="select-none text-gray-400 w-4 shrink-0">{i + 1}</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </pre>
                </div>

                <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-white/[0.02] p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-custom-blue-100 dark:text-gray-400 mb-3 flex items-center gap-2">
                    <HiOutlineCheckCircle size={14} />
                    Resumo de Acertos do Código
                  </p>
                  {question.correctItems.length > 0 ? (
                    <ul className="space-y-3">
                      {question.correctItems.map((ci, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <HiOutlineCheckCircle size={16} className="text-success-500 shrink-0 mt-0.5" />
                          {ci}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-400">Nenhum acerto identificado.</p>
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-gray-800 dark:text-white/90 mb-4">
                  Análise com Base nos Critérios
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 items-start">
                  <SimilarityChart value={question.similarity} />

                  <div className="space-y-3">
                    {question.criteria.map((c) => (
                      <div
                        key={c.id}
                        className={`rounded-xl border p-3 px-4 ${
                          c.status === "correct"
                            ? "bg-success-50 border-success-100 dark:bg-success-500/10 dark:border-success-500/20"
                            : "bg-error-50 border-error-100 dark:bg-error-500/10 dark:border-error-500/20"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            {c.status === "correct"
                              ? <HiOutlineCheckCircle size={15} className="text-success-500 shrink-0" />
                              : <HiOutlineXCircle size={15} className="text-error-500 shrink-0" />
                            }
                            <span className={`text-xs font-bold ${c.status === "correct" ? "text-success-600 dark:text-success-400" : "text-error-600 dark:text-error-400"}`}>
                              {c.label}:
                            </span>
                            <span className="text-sm font-semibold text-gray-800 dark:text-white/90">{c.title}</span>
                          </div>
                          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 shrink-0">
                            {c.score} / {c.maxScore}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 ml-5">{c.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-xl border border-custom-blue-100 dark:border-gray-800 bg-white dark:bg-white/[0.02] p-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-bold text-gray-800 dark:text-white/90">Feedback Proposto</p>
                    <HiOutlineEllipsisVertical size={18} className="text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    {question.feedback.map((f, i) => (
                      <div key={f.id} className="flex items-start justify-between gap-3 pb-3 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
                        <div className="flex items-start gap-3 min-w-0">
                          <span className="text-xs font-bold text-custom-blue-100 dark:text-gray-400 shrink-0 w-5 h-5 rounded-full bg-custom-blue-50 dark:bg-gray-800 flex items-center justify-center">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-800 dark:text-white/90">{f.title}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{f.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-white bg-brand-500 rounded-lg hover:bg-brand-600 transition-colors">
                            <HiOutlineCheck size={12} /> Aceitar
                          </button>
                          <button className="p-1 text-gray-400 hover:text-error-500 transition-colors">
                            <HiOutlineXMark size={14} />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                            <HiOutlineEllipsisVertical size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-custom-blue-100 dark:border-gray-800 bg-white dark:bg-white/[0.02] p-4">
                  <p className="text-sm font-bold text-gray-800 dark:text-white/90 mb-4">Sugestão de Pontuação da Questão</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-brand-500">{question.suggestedScore}</span>
                      <span className="text-xl text-gray-400 font-medium">/ {question.maxScore}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-brand-500 rounded-lg hover:bg-brand-600 transition-colors">
                        <HiOutlineCheck size={13} /> Salvar
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <HiOutlinePencilSquare size={13} /> Ajustar
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-custom-blue-50 dark:bg-gray-800/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Pontuação sugerida pela IA</span>
                      <Badge size="sm" color="success">{Math.round((question.suggestedScore / question.maxScore) * 100)}%</Badge>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-500 rounded-full"
                        style={{ width: `${(question.suggestedScore / question.maxScore) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function StudentAnswerAnalysisPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <PageMeta
        title="Análise de Respostas | Sensus - Plataforma de Avaliação Acadêmica"
        description="Análise detalhada das respostas do aluno com feedback gerado por IA."
      />
      <PageBreadcrumb pageTitle="Análise da Resposta" />

      <motion.div variants={item} className="flex items-center gap-2">
        <h1 className="text-theme-md font-bold text-gray-800 dark:text-white/90">
          Análise das Respostas do Aluno
        </h1>
        <span className="text-theme-md font-bold text-brand-500">Lucas Medeiros da Silva</span>
      </motion.div>

      <div className="space-y-4">
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </motion.div>
  );
}