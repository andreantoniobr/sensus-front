import { useState } from "react";
import { motion } from "framer-motion";
import { Atividade } from "../../lib/types/Assessments";

import Badge from "../ui/badge/Badge";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";

import {
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineLockClosed,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlinePlay,
  HiOutlineBookOpen,
  HiOutlineFire,
  HiOutlineExclamationTriangle,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineTrophy,
} from "react-icons/hi2";

// 🔥 AGORA usando cores do Badge
const statusConfig = {
  aberta: {
    label: "Aberta",
    icon: HiOutlinePlay,
    color: "success",
  },
  em_andamento: {
    label: "Em andamento",
    icon: HiOutlineClock,
    color: "warning",
  },
  concluida: {
    label: "Concluída",
    icon: HiOutlineCheckCircle,
    color: "primary",
  },
  encerrada: {
    label: "Encerrada",
    icon: HiOutlineXCircle,
    color: "error",
  },
  agendada: {
    label: "Agendada",
    icon: HiOutlineClock,
    color: "light",
  },
} as const;

const tipoConfig = {
  prova: {
    label: "Prova",
    icon: HiOutlineDocumentText,
    color: "info",
  },
  trabalho: {
    label: "Trabalho",
    icon: HiOutlineBookOpen,
    color: "primary",
  },
  treino: {
    label: "Treino",
    icon: HiOutlineFire,
    color: "warning",
  },
} as const;

export default function AssessmentActivitie({
  atividade,
}: {
  atividade: Atividade;
}) {
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);

  const status = statusConfig[atividade.status];
  const tipo = tipoConfig[atividade.tipo];

  const StatusIcon = status.icon;
  const TipoIcon = tipo.icon;

  const isDone = atividade.status === "concluida";

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <div
        className="h-full rounded-2xl border border-custom-blue-100 bg-white p-5 md:p-6 
  dark:border-gray-800 dark:bg-white/[0.03] shadow-soft-md transition-all
  hover:-translate-y-1 group flex flex-col"
      >
        <div className="flex gap-4">
          {/* ICON */}
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-1">
            <TipoIcon size={20} className="text-white" />
          </div>

          {/* CONTENT */}
          <div className="flex-1 space-y-3">
            {/* HEADER */}
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {/* TIPO */}
                  <Badge size="sm" color={tipo.color}>
                    <TipoIcon size={14} />
                    {tipo.label}
                  </Badge>

                  {/* STATUS */}
                  <Badge size="sm" color={status.color}>
                    <StatusIcon size={14} />
                    {status.label}
                  </Badge>

                  {atividade.status === "agendada" && (
                    <Badge size="sm" color="light">
                      <HiOutlineExclamationTriangle size={16} />
                      Disponível em {atividade.dataAbertura}
                    </Badge>
                  )}

                  {/* SENHA */}
                  {atividade.temSenha && (
                    <Badge size="sm" color="dark">
                      <HiOutlineLockClosed size={14} />
                      Senha
                    </Badge>
                  )}
                </div>

                <h3 className="font-bold text-gray-800 dark:text-white/90 group-hover:text-brand-500 transition-colors">
                  {atividade.titulo}
                </h3>
              </div>

              {/* NOTA */}
              {isDone && atividade.nota !== undefined && (
                <div className="text-right">
                  <div className="flex items-center gap-1 text-primary">
                    <HiOutlineTrophy size={18} />
                    <span className="font-bold">
                      {atividade.nota}/{atividade.notaMaxima}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-custom-blue-100 dark:text-gray-400">
              {atividade.disciplina}
            </p>

            {/* INFO */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-custom-blue-100 dark:text-gray-400">
              {atividade.dataAbertura && (
                <span>Abertura: {atividade.dataAbertura}</span>
              )}

              {atividade.dataEncerramento && (
                <span>Encerramento: {atividade.dataEncerramento}</span>
              )}

              {atividade.duracao && <span>Duração: {atividade.duracao}</span>}
            </div>

            {/* SENHA */}
            {atividade.temSenha && atividade.status === "aberta" && (
              <div className="flex items-center gap-2 pt-1">
                <div className="relative flex-1 max-w-48">
                  <Input
                    type={showSenha ? "text" : "password"}
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="pr-9 h-9 text-sm"
                  />

                  <button
                    onClick={() => setShowSenha(!showSenha)}
                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showSenha ? (
                      <HiOutlineEyeSlash
                        className="text-custom-blue-100 dark:text-gray-400"
                        size={18}
                      />
                    ) : (
                      <HiOutlineEye
                        className="text-custom-blue-100 dark:text-gray-400"
                        size={18}
                      />
                    )}
                  </button>
                </div>

                <Button
                  className="font-space font-semibold"
                  size="sm"
                  disabled={!senha}
                >
                  <HiOutlineLockClosed size={16} /> Entrar
                </Button>
              </div>
            )}

            {/* ACTIONS */}
            <div className="flex items-center gap-2 pt-1">
              {!atividade.temSenha && atividade.status === "aberta" && (
                <Button
                  className="font-space font-semibold"
                  size="xs"
                  fontSize="xs"
                >
                  <HiOutlinePlay size={16} /> Iniciar
                </Button>
              )}

              {atividade.status === "em_andamento" && (
                <Button
                  className="font-space font-semibold"
                  size="xs"
                  fontSize="xs"
                  variant="secondary"
                >
                  <HiOutlinePlay size={16} /> Continuar
                </Button>
              )}

              {isDone && (
                <Button
                  className="font-space font-semibold"
                  size="xs"
                  fontSize="xs"
                  variant="outline"
                >
                  <HiOutlineEye size={16} /> Resultado
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
