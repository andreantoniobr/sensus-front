import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";
import { HiOutlineClock } from "react-icons/hi2";

export default function EcommerceMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-custom-blue-100 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 shadow-soft-md">
        
        <div className="flex gap-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-1 rounded-xl dark:bg-gray-800">
            <HiOutlineClock className="text-white" size={22} />
          </div>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              48h
            </h4>
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-custom-blue-100 dark:text-gray-400">
              Horas Estudadas
            </span>            
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-custom-blue-100 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 shadow-soft-md">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Orders
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              5,359
            </h4>
          </div>

          <Badge color="error">
            <ArrowDownIcon />
            9.05%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
}
