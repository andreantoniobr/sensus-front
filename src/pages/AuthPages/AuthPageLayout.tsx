import React from "react";
import { Link } from "react-router";
import ThemeTogglerTwo from "../../components/atoms/ThemeTogglerButtonTwo";

export default function AuthLayout({
  authHero,
  children,
}: {
  authHero: React.ReactNode;
  children: React.ReactNode;  
}) {
  return (
    <div className="relative p-6 bg-custom-blue-50 z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">        
        {authHero}
        {children}
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
