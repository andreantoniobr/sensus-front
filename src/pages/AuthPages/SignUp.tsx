import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/molecules/auth/SignUpForm";
import AuthHero from "./AuthHero";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Criar Conta | Sensus - Plataforma de Avaliação Acadêmica"
        description="Acesse o Sensus para acompanhar suas disciplinas, resolver exercícios, participar de avaliações e receber feedback inteligente com apoio de IA."
      />
      <AuthLayout
        authHero={
          <AuthHero
            heroTitle="Junte-se ao Sensus!"
            heroText="Crie sua conta e descubra uma nova forma de ensinar e aprender."
          />
        }
        children={<SignUpForm />}
      ></AuthLayout>
    </>
  );
}
