import { IconType } from "react-icons";

type RecentActivityProps = {
  icon?: IconType;
  title: string;
  time: string;
};

function RecentActivity({ icon: Icon, title, time }: RecentActivityProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6 py-4">
      <div
        className={`flex items-center justify-center w-9 h-9 rounded-xl bg-custom-blue-200 dark:bg-gray-800`}
      >
        {Icon && (
          <Icon
            className="text-blue-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
            size={18}
          />
        )}
      </div>

      <div className="grid grid-cols gap-2">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white/90">
          {title}
        </h3>

        <span className="text-xs text-custom-blue-100 dark:text-gray-400">
          {time}
        </span>
      </div>
    </div>
  );
}

export default RecentActivity;
