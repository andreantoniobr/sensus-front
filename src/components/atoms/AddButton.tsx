import Button from "../ui/button/Button";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { ReactNode } from "react";

interface AddButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function AddButton({
  children,
  icon,
  onClick,
  disabled,
}: AddButtonProps) {
  return (
    <Button
      className="font-space font-semibold flex items-center gap-2"
      size="sm"
      onClick={onClick}
      disabled={disabled}
    >
      {icon ?? <HiOutlineInboxArrowDown size={20} />}
      <span>{children}</span>
    </Button>
  );
}