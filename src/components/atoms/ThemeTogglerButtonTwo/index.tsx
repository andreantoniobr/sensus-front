import { useTheme } from "../../../lib/context/ThemeContext";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

export default function ThemeTogglerTwo() {
  const { toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center text-white transition-colors rounded-full size-14 bg-brand-500 hover:bg-brand-600"
    >      
      <IoSunnyOutline className="hidden dark:block" size={22} />
      <IoMoonOutline className="dark:hidden" size={22} />
    </button>
  );
}
