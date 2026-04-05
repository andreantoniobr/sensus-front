import { useState } from "react";
import { Link } from "react-router";

import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import Checkbox from "../../form/input/Checkbox";
import Button from "../../ui/button/Button";
import LineAndTextSeparator from "../../atoms/LineAndTextSeparator";
import GoogleIcon from "../../atoms/GoogleIcon";
import XIcon from "../../atoms/XIcon";

import { HiArrowLeft } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { HiOutlineArrowRightEndOnRectangle } from "react-icons/hi2";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <HiArrowLeft className="me-2" size={18} />
          Voltar
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-3 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Entrar com seu e-mail
            </h1>
            <p className="text-sm text-custom-blue-100 dark:text-gray-400">
              Insira suas credenciais para acessar a plataforma.
            </p>
          </div>
          <div>
            <form>
              <div className="space-y-6">
                <div>
                  <Label>E-mail</Label>
                  <Input placeholder="seu@email.com" />
                </div>
                <div>
                  <Label>Senha</Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Insira sua senha"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <HiOutlineEye
                          className="text-custom-blue-100 dark:text-gray-400"
                          size={20}
                        />
                      ) : (
                        <HiOutlineEyeSlash
                          className="text-custom-blue-100 dark:text-gray-400"
                          size={20}
                        />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Lembrar-me
                    </span>
                  </div>
                  <Link
                    to="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <div>
                  <Button className="w-full font-space font-semibold" size="sm">
                    <HiOutlineArrowRightEndOnRectangle size="20" /> Entrar
                  </Button>
                </div>
              </div>
            </form>
            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400">
                Não tem conta? {""}
                <Link
                  to="/signup"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Cadastre-se
                </Link>
              </p>
            </div>
            <LineAndTextSeparator label="Ou" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
              <Button
                className="w-full"
                variant="secondary"
                size="sm"
                startIcon={<GoogleIcon />}
              >
                Entrar com o Google
              </Button>

              <Button
                className="w-full"
                variant="secondary"
                size="sm"
                startIcon={<XIcon />}
              >
                Entrar com o X
              </Button>             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
