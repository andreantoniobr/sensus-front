import { motion } from "framer-motion";
import {
  HiOutlineWrenchScrewdriver,
  HiOutlineArrowPath,
} from "react-icons/hi2";
import PageMeta from "../components/common/PageMeta";
import PageBreadcrumb from "../components/common/PageBreadCrumb";

export default function ConstructionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageMeta
        title="Em Construção | Sensus - Plataforma de Avaliação Acadêmica"
        description="Acesse o Sensus para acompanhar suas disciplinas, resolver exercícios, participar de avaliações e receber feedback inteligente com apoio de IA."
      />
      <PageBreadcrumb pageTitle="Em Construção" />
      

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-custom-blue-100 bg-white px-5 py-7 space-y-6 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12 shadow-soft-md min-h-max"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br bg-gradient-1 text-white">
            <HiOutlineWrenchScrewdriver size={28} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Página em Construção
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 text-center">
          Estamos trabalhando para trazer essa funcionalidade o mais rápido
          possível.
        </p>

        {/* Loader */}
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          >
            <HiOutlineArrowPath size={28} className="text-primary" />
          </motion.div>
        </div>

      
      </motion.div>
    </div>
  );
}
