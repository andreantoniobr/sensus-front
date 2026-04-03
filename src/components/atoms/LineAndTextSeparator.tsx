type LineAndTextSeparatorProps = {
  label: string;
  className?: string;
};

function LineAndTextSeparator({
  label,
  className = "",
}: LineAndTextSeparatorProps) {
  return (
    <div className={`relative py-3 sm:py-5 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="p-2 text-custom-blue-100 bg-custom-blue-50 dark:bg-gray-900 sm:px-5 sm:py-2">
          {label}
        </span>
      </div>
    </div>
  );
}

export default LineAndTextSeparator;
