import Button from "../ui/button/Button";
import { HiMiniXMark } from "react-icons/hi2";
import { ReactNode } from "react";
import useGoBack from "../../hooks/useGoBack";

interface CancelButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function CancelButton({
  children,
  icon,
  onClick,
  disabled,
}: CancelButtonProps) {
  const goBack = useGoBack();

  return (
    <Button
      className="font-space font-semibold flex items-center gap-2"
      variant="outline"
      size="sm"
      onClick={onClick ?? goBack}
      disabled={disabled}
    >
      {icon ?? <HiMiniXMark size={20} />}
      <span>{children}</span>
    </Button>
  );
}
