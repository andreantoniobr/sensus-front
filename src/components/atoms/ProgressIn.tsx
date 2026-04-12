type ProgressInProps = { 
  value: string | number;
  title: string;
  className?: string;
};

function ProgressIn({ value, title, className = "" }: ProgressInProps) {
  return (
    <div className={`grid grid-cols gap-2 ${className}`}>
      <span className="text-sm text-custom-blue-100 dark:text-gray-400">
        {title}
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
    </div>
  );
}

export default ProgressIn;
