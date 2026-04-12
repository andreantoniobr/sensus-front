import { IconType } from "react-icons";

type AchievementCardProps = {
  icon?: IconType;
  title: string;
  description: string;
  gradient?: string;
  iconColor?: string;
  className?: string;
};

function AchievementCard({
  icon: Icon,
  title,
  description,
  gradient = "bg-gradient-1",
  iconColor = "text-white",
  className = "",
}: AchievementCardProps) {
  return (
    <div
      className={`rounded-2xl border border-custom-blue-100 bg-white p-5 md:p-6 
      dark:border-gray-800 dark:bg-white/[0.03] shadow-soft-md 
      hover:-translate-y-1 transition-all duration-300 
      flex flex-col items-center text-center gap-3 cursor-pointer ${className}`}
    >
      {/* Ícone central */}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-xl ${gradient} dark:bg-gray-800`}
      >
        {Icon && <Icon className={iconColor} size={24} />}
      </div>

      {/* Título */}
      <h3 className="text-sm font-bold text-gray-800 dark:text-white/90">
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-xs text-custom-blue-100 dark:text-gray-400 line-clamp-1">
        {description}
      </p>
    </div>
  );
}

export default AchievementCard;