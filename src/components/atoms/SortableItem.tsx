import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Input from "../form/input/InputField";
import { useState } from "react";
import { Dropdown } from "../atoms/Dropdown";
import { DropdownItem } from "../atoms/DropdownItem";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

interface SortableItemProps {
  id: string;
  index: number;
  text: string;
  score: number;
  onScoreChange: (id: string, value: number) => void;
}

export function SortableItem({
  id,
  index,
  text,
  score,
  onScoreChange,
}: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="p-4 mb-3 bg-white dark:bg-white/5 border border-custom-blue-200 dark:border-gray-800 rounded-lg flex items-center gap-4"
    >
      {/* Drag handle */}
      <button {...attributes} {...listeners}>
        <HiBars3 className="text-custom-blue-100 cursor-grab" size={20} />
      </button>

      <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-custom-blue-200 dark:bg-gray-800 text-sm font-space text-blue-500 group-hover:text-gray-700 dark:text-gray-400">
        {index + 1}
      </span>

      <p className="flex-1 text-sm font-space font-semibold dark:text-gray-400 ">
        {text}
      </p>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium dark:text-gray-400 text-custom-blue-100">
          Pontuação:
        </span>

        <div className="w-20">
          <Input
            type="number"
            value={score}
            onChange={(e) => onScoreChange(id, Number(e.target.value))}
          />
        </div>
      </div>

      <div className="relative inline-block">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <HiOutlineEllipsisVertical
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 "
            size={20}
          />
        </button>
        <Dropdown isOpen={isOpen} onClose={closeDropdown} className="w-40 p-2">
          <DropdownItem
            onItemClick={closeDropdown}
            className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
          >
            Editar
          </DropdownItem>
          <DropdownItem
            onItemClick={closeDropdown}
            className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
          >
            Excluir
          </DropdownItem>
        </Dropdown>
      </div>
    </div>
  );
}
