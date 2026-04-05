import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "xs" | "sm" | "md"; // Button size
  fontSize?: "xs" | "sm" | "md"; // Font size
  variant?: "primary" | "secondary" | "success"| "black" | "outline"; // Button variant
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  fontSize = "sm",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
}) => {
  // Size Classes
  const sizeClasses = {
    xs: "px-3 py-2",
    sm: "px-4 py-3",
    md: "px-5 py-3.5",
  }; 

  const fontClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",  
  };

  // Variant Classes
  const variantClasses = {
    primary:
      "bg-gradient-2 text-white shadow-theme-xs hover:bg-gradient-2-hover disabled:bg-brand-300",
    secondary: "text-gray-700 transition-colors bg-custom-blue-100 hover:bg-custom-blue-200 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10",
    success: "border border-success-200 bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500",
    black: "bg-black text-white dark:bg-white/5",
    outline:
      "bg-transparent text-gray-700 border border-custom-blue-200 hover:bg-custom-blue-200 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg hover:scale-[1.02] transition-all  ${className} ${
        fontClasses[fontSize]
      } ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
