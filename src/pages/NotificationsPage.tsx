import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import NotificationCard from "../components/atoms/NotificationCard";

const convites = [
  {
    avatarUrl: "/images/user/sormany.jpg",
    userName: "Sormany Dantas",
    title: "Unifip",
    notificationText: "enviou convite para cargo de Professor",
    badgeText: "Professor",
    time: "5 min atrás",
  },
  {
    userName: "Fernanda Lima",
    title: "Universidade Federal de Tecnologia",
    notificationText: "atribuiu você como coordenador do curso ADS",
    badgeText: "Coordenador",
    time: "1 dia atrás",
  },
];

const notificacoesGerais = [
  {
    avatarUrl: "/images/user/pedro.jpg",
    userName: "Pedro Lucas",
    title: "Unifip",
    notificationText: "se inscreveu na trilha Python Avançado",
    time: "2 min atrás",
  },
  {
    avatarUrl: "/images/user/andre.jpg",
    userName: "André Antônio",
    title: "Unifip",
    notificationText: "se inscreveu na trilha Python Iniciante",
    time: "8 min atrás",
  },
  {
    userName: "Sistema",
    title: "Unifip",
    notificationText: "Nova trilha de React disponível",
    time: "10 min atrás",
  },
  {
    avatarUrl: "/images/user/italo.jpg",
    userName: "Ítalo Souza",
    title: "Unifip",
    notificationText: "finalizou a trilha Python Iniciante",
    time: "1 hora atrás",
  },
  {
    avatarUrl: "/images/user/pedro.jpg",
    userName: "Pedro Lucas",
    title: "Unifip",
    notificationText: "concluiu o módulo de Algoritmos e Lógica de Programação",
    time: "10 min atrás",
  },
  {
    avatarUrl: "/images/user/pedro.jpg",
    userName: "Pedro Lucas",
    title: "Unifip",
    notificationText: "iniciou a trilha React do zero ao avançado",
    time: "25 min atrás",
  },
  {
    avatarUrl: "/images/user/pedro.jpg",
    userName: "Pedro Lucas",
    title: "Unifip",
    notificationText: "enviou atividade prática de JavaScript Básico",
    time: "1 hora atrás",
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <PageMeta
        title="Notificações | Sensus - Plataforma de Avaliação Acadêmica"
        description="Acompanhe convites, atividades e atualizações da plataforma."
      />

      <PageBreadcrumb pageTitle="Notificações" />

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-theme-md font-bold text-gray-800 dark:text-white/90">
            Convites Pendentes
          </h2>

          <span className="text-xs text-gray-400">
            {convites.length} pendente(s)
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {convites.map((item, index) => (
            <NotificationCard key={`convite-${index}`} {...item} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-theme-md font-bold text-gray-800 dark:text-white/90">
            Notificações
          </h2>

          <span className="text-xs text-gray-400">
            {notificacoesGerais.length} recentes
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {notificacoesGerais.map((item, index) => (
            <NotificationCard key={`notif-${index}`} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
