
import { HiOutlineCheckCircle } from "react-icons/hi2";
function StudyTrails() {
  return (
    <div className="rounded-2xl border border-custom-blue-100 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 shadow-soft-md">
      <div className="flex gap-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-1 rounded-xl dark:bg-gray-800">          
          <HiOutlineCheckCircle className="text-white" size={22} />
        </div>
        <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
          7
        </h4>
      </div>
      <div className="flex items-end justify-between mt-5">
        <div>
          <span className="text-sm text-custom-blue-100 dark:text-gray-400">
            Tilhas Concluidas
          </span>
        </div>
      </div>
    </div>
  );
}

export default StudyTrails;
