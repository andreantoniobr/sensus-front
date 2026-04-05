import { ReactNode } from "react";
import Label from "../form/Label";

type LabelWidth = "sm" | "md" | "lg";

const widthMap: Record<LabelWidth, string> = {
  sm: "md:w-32",
  md: "md:w-48",
  lg: "md:w-64",
};

interface FormFieldProps {
  label: string;
  children: ReactNode;
  fullWidth?: boolean;
  labelWidth?: LabelWidth;
}

export default function FormField({
  label,
  children,
  fullWidth = false,
  labelWidth = "md",
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2 w-full md:flex-row md:items-center md:gap-6">
      
      <Label className={`${widthMap[labelWidth]} md:shrink-0 text-custom-blue-100`}>
        {label}
      </Label>

      <div className={`flex-1 ${fullWidth ? "w-full" : "max-w-md"}`}>
        {children}
      </div>

    </div>
  );
}