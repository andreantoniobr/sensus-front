import { IconType } from "react-icons";

type StatCardProps = {
  icon?: IconType;
  value: string | number;
  label: string;
  gradient?: string;
  iconColor?: string;
  className?: string;
};

function StatCard({
  icon: Icon,
  value,
  label,
  gradient = "bg-gradient-1",
  iconColor = "text-white",
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`rounded-2xl border border-custom-blue-100 bg-white p-5 md:p-6 
      dark:border-gray-800 dark:bg-white/[0.03] shadow-soft-md ${className}`}
    >
      <div className="flex gap-4">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-xl ${gradient} dark:bg-gray-800`}
        >
          {Icon && <Icon className={iconColor} size={22} />}
        </div>

        <h4 className="font-bold text-gray-800 text-title-sm dark:text-white/90">
          {value}
        </h4>
      </div>

      <div className="flex items-end justify-between mt-5">
        <span className="text-sm text-custom-blue-100 dark:text-gray-400">
          {label}
        </span>
      </div>
    </div>
  );
}

export default StatCard;
