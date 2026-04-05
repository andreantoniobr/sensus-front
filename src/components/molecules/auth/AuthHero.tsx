import React, { useMemo } from "react";
import { Link } from "react-router";
import AuthHeroSVG from "../../atoms/AuthHeroSVG";

interface AuthHeroProps {
  heroTitle?: string;
  heroText?: string;
}

const AuthHero: React.FC<AuthHeroProps> = ({ heroTitle, heroText }) => {
  const showLogo = useMemo(() => Math.random() < 0.5, []);

  return (
    <div className="items-center hidden w-full h-full lg:w-1/2 bg-gradient-1 dark:bg-white/5 lg:grid">
      <div className="relative flex items-center justify-center z-1">
        <div className="flex flex-col items-center max-w-xs">          
          {showLogo ? (
            <Link to="/" className="block mb-8">
              <img
                width={231}
                height={48}
                src="/images/logo/logo-dark.svg"
                alt="Logo"
              />
            </Link>
          ) : (
            <Link to="/" className="block mb-8">
              <AuthHeroSVG/>
            </Link>
          )}
          <h3 className="text-center text-2xl font-bold text-white dark:text-white/60 mb-4">
            {heroTitle}
          </h3>
          <p className="text-center text-white/80 dark:text-white/60">
            {heroText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthHero;
