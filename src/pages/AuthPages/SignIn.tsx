import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/molecules/auth/SignInForm";
import AuthHero from "./AuthHero";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Entrar na Conta | Sensus - Plataforma de Avaliação Acadêmica"
        description="Acesse o Sensus para acompanhar suas disciplinas, resolver exercícios, participar de avaliações e receber feedback inteligente com apoio de IA."
      />
      <AuthLayout
        authHero={
          <AuthHero
            heroTitle="Bem-vindo de volta!"
            heroText="Acesse sua conta e continue sua jornada de aprendizado."
          />
        }
        children={<SignInForm />}
      ></AuthLayout>
    </>
  );
}
