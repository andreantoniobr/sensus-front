export type AtividadeStatus =
  | "aberta"
  | "em_andamento"
  | "concluida"
  | "encerrada"
  | "agendada";

export type AtividadeTipo = "prova" | "trabalho" | "treino";

export interface Atividade {
  id: string;
  titulo: string;
  tipo: AtividadeTipo;
  status: AtividadeStatus;
  disciplina: string;
  dataAbertura?: string;
  dataEncerramento?: string;
  duracao?: string;
  nota?: number;
  notaMaxima: number;
  questoes: number;
  temSenha: boolean;
  descricao: string;
}