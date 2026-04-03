import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md"; // Button size
  fontSize?: "sm" | "md"; // Font size
  variant?: "primary" | "secondary" | "outline"; // Button variant
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
    sm: "px-4 py-3",
    md: "px-5 py-3.5",
  }; 

  const fontClasses = {
    sm: "text-sm",
    md: "text-md",  
  };

  // Variant Classes
  const variantClasses = {
    primary:
      "bg-gradient-2 text-white shadow-theme-xs hover:bg-gradient-2-hover disabled:bg-brand-300",
    secondary: "text-gray-700 transition-colors bg-custom-blue-100 hover:bg-custom-blue-200 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10",
    outline:
      "bg-white text-gray-700 border border-custom-blue-200 hover:bg-custom-blue-200 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
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
