interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  desc?: string;
  rightContent?: React.ReactNode;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = "",
  desc = "",
  rightContent,
}) => {
  return (
    <div
      className={`rounded-2xl border border-custom-blue-100 bg-white dark:border-gray-800 dark:bg-white/[0.03] shadow-soft-md ${className}`}
    >
      <div className="px-6 py-5 flex items-center justify-between">
        <div>
          <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
            {title}
          </h3>

          {desc && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {desc}
            </p>
          )}
        </div>

        {rightContent && (
          <div className="flex flex-col gap-3 lg:flex-row lg:justify-end">{rightContent}</div>
        )}
      </div>

      <div className="p-5 xl:p-10 border-t border-gray-100 dark:border-gray-800 sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard;
