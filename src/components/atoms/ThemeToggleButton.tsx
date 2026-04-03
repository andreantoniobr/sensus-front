import { useTheme } from "../../lib/context/ThemeContext";
import { HiOutlineSun } from "react-icons/hi2";
import { HiOutlineMoon } from "react-icons/hi2";

export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center text-custom-blue-100 transition-colors bg-white rounded-full hover:text-dark-900 h-10 w-10 hover:bg-custom-blue-100 hover:text-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
    >      
      <HiOutlineSun className="hidden dark:block" size={22} />
      <HiOutlineMoon className="dark:hidden" size={22}  />
    </button>
  );
};
