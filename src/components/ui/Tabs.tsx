import { ReactNode } from "react";

export type TabOption<T extends string> = {
  value: T;
  label: string;
  icon?: ReactNode;
};

interface TabsProps<T extends string> {
  options: TabOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

// 👇 AQUI está o ponto importante
export default function Tabs<T extends string>({
  options,
  value,
  onChange,
  className = "",
}: TabsProps<T>) {
  const getButtonClass = (option: T) =>
    value === option
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-lg bg-custom-blue-200 p-1.5 dark:bg-gray-900 ${className}`}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-2 font-medium rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white flex items-center justify-center gap-1 ${getButtonClass(
            opt.value
          )}`}
        >
          {opt.icon}
          {opt.label}
        </button>
      ))}
    </div>
  );
}