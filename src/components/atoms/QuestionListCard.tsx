import { IconType } from "react-icons";

type QuestionListCardProps = {
  icon?: IconType;
  value: string | number;
  title: string;
  nextChallengeText: string;
  label: string;
  gradient?: string;
  iconColor?: string;
  className?: string;
};

function QuestionListCard({
  icon: Icon,
  value,
  title,
  nextChallengeText,
  label,
  gradient = "bg-gradient-1",
  iconColor = "text-white",
  className = "",
}: QuestionListCardProps) {
  return (
    <div
      className={`rounded-2xl border border-custom-blue-100 bg-white p-5 md:p-6 
      dark:border-gray-800 dark:bg-white/[0.03] shadow-soft-md ${className}`}
    >
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <div
          className={`flex items-center justify-center w-15 h-15 rounded-xl ${gradient} dark:bg-gray-800`}
        >
          {Icon && <Icon className={iconColor} size={34} />}
        </div>

        <div className="grid grid-cols gap-2">
          <h3 className="text-sm font-bold text-gray-800 dark:text-white/90">
            {title}
          </h3>
          <span className="text-sm text-custom-blue-100 dark:text-gray-400">
            {nextChallengeText}
          </span>
          <div className="flex w-full items-center gap-3">
            <div className="relative block h-2 w-full rounded-sm bg-custom-blue-200 dark:bg-gray-800">
              <div
                className="absolute left-0 top-0 flex h-full items-center justify-center rounded-sm bg-gradient-to-r to-blue-400 from-blue-500 text-xs font-medium text-white"
                style={{ width: `${value}%` }}
              />
            </div>
            <p className="font-bold font-space text-gray-800 text-theme-xs dark:text-white/90">
              {value}%
            </p>
          </div>
          <span className="text-xs text-custom-blue-100 dark:text-gray-400">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default QuestionListCard;
