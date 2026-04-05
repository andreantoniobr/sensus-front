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
import { HiOutlineUserPlus } from "react-icons/hi2";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="w-full max-w-md mx-auto mb-5 sm:pt-10">
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
              Criar conta
            </h1>
            <p className="text-sm text-custom-blue-100 dark:text-gray-400">
              Preencha dos dados abaixo para começar
            </p>
          </div>
          <div>
            <form>
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* <!-- First Name --> */}
                  <div className="sm:col-span-1">
                    <Label>Nome</Label>
                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Seu nome"
                    />
                  </div>
                  {/* <!-- Last Name --> */}
                  <div className="sm:col-span-1">
                    <Label>Sobrenome</Label>
                    <Input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Seu sobrenome"
                    />
                  </div>
                </div>
                {/* <!-- Email --> */}
                <div>
                  <Label>E-mail</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                  />
                </div>
                {/* <!-- Password --> */}
                <div>
                  <Label>Senha</Label>
                  <div className="relative">
                    <Input
                      placeholder="Insira sua senha"
                      type={showPassword ? "text" : "password"}
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
                {/* <!-- Checkbox --> */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    className="w-5 h-5"
                    checked={isChecked}
                    onChange={setIsChecked}
                  />
                  <p className="inline-block text-sm text-custom-blue-100 dark:text-gray-400">
                    Declaro que aceito os{" "}
                    <Link
                      to="/signin"
                      className="text-brand-500 hover:text-brand-600 dark:text-white"
                    >
                      Termos de Uso,
                    </Link>{" "}
                    e a{" "}
                    <Link
                      to="/signin"
                      className="text-brand-500 hover:text-brand-600 dark:text-white"
                    >
                      Política de Privacidade
                    </Link>
                  </p>
                </div>
                {/* <!-- Button --> */}
                <div>
                  <Button className="w-full font-space font-semibold" size="sm">
                    <HiOutlineUserPlus size="20" />
                    Criar Conta
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400">
                Já possui uma conta? {""}
                <Link
                  to="/signin"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Entrar
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
                Criar com o Google
              </Button>

              <Button
                className="w-full"
                variant="secondary"
                size="sm"
                startIcon={<XIcon />}
              >
                Criar com o X
              </Button>             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
