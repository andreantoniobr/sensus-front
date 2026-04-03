import { HiOutlineCodeBracket } from "react-icons/hi2";

export default function ChalengeDayCard() {
  return (
    <div className="rounded-2xl p-6 flex flex-col items-center text-center gap-4 
bg-gradient-to-br from-[#122D52] via-[#14519E] to-[#29A8EB] text-white"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
        <HiOutlineCodeBracket className="text-white" size={22} />
      </div>

      <h3 className="text-lg font-semibold">Desafio do Dia</h3>

      <p className="text-sm text-white/80">
        Resolva um problema de algoritmo e ganhe XP!
      </p>

      <button className="mt-auto px-6 py-2 rounded-full bg-blue-500 text-white border border-blue-light-500 text-sm font-semibold font-space hover:bg-blue-400/90 transition">
        Começar desafio
      </button>
    </div>
  );
}
