import { DropdownItem } from "../atoms/DropdownItem";
import { Dropdown } from "../atoms/Dropdown";
import { Link } from "react-router";
import UserImage from "../atoms/UserImage";

import { useDropdown } from "../../lib/context/DropdownContext";

import { HiChevronDown } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

export default function UserDropdown() {
  const { openId, toggle, close } = useDropdown();

  const isOpen = openId === "user-dropdown";

  return (
    <div className="relative">
      <button
        onClick={() => toggle("user-dropdown")}
        className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
      >
        <UserImage />

        <HiChevronDown
          size={20}
          className={`text-custom-blue-100 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={close}
        className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border bg-white p-3 shadow-soft-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <div>
          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
            José Matheus
          </span>
          <span className="mt-0.5 block text-theme-xs text-custom-blue-100 dark:text-gray-400">
            josematheuslima25@gmail.com
          </span>
        </div>

        <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-custom-blue-100 dark:border-gray-800">
          <li>
            <DropdownItem
              onItemClick={close}
              tag="a"
              to="/profile"
              className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-custom-blue-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <HiOutlineUserCircle size={22} />
              Meu Perfil
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={close}
              tag="a"
              to="/profile"
              className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-custom-blue-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <HiOutlineCog8Tooth size={22} />
              Configurações
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={close}
              tag="a"
              to="/profile"
              className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-custom-blue-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <HiOutlineQuestionMarkCircle size={22} />
              Ajuda
            </DropdownItem>
          </li>
        </ul>

        <Link
          to="/signin"
          onClick={close}
          className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-error-500 rounded-lg group text-theme-sm hover:bg-custom-blue-100 dark:text-gray-400 dark:hover:bg-white/5"
        >
          <HiArrowRightOnRectangle size={22} />
          Sair
        </Link>
      </Dropdown>
    </div>
  );
}