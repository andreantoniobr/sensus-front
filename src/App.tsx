import { BrowserRouter as Router, Routes, Route } from "react-router";
import { DropdownProvider } from "./lib/context/DropdownContext";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfilesPage from "./pages/UserProfilesPage";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import CalendarPage from "./pages/CalendarPage";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import BlankPage from "./pages/BlankPage";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import AddQuestionCriteria from "./pages/AddQuestionCriteria";
import AddQuestionPage from "./pages/AddQuestionPage";
import AddAssessmentPage from "./pages/AddAssessmentPage";
import TrailsPage from "./pages/TrailsPage";
import QuestionListPage from "./pages/QuestionsListPage";
import RankingPage from "./pages/RankingPage";
import AssessmentsListPage from "./pages/AssessmentsListPage";
import ConstructionPage from "./pages/ConstructionPage";
import MyProgressPage from "./pages/MyProgressPage";
import AnswerPage from "./pages/AnswerPage";
import NotificationsPage from "./pages/NotificationsPage";
import MyGradesPage from "./pages/MyGradesPage";
import StudentAnswerAnalysisPage from "./pages/StudentAnswerAnalysisPage";
import AddListQuestionsPage from "./pages/AddListQuestionsPage";
import QuestionsPage from "./pages/QuestionsPage";

export default function App() {
  return (
    <>
      <Router>
        <DropdownProvider>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfilesPage />} />
            <Route path="/notificacoes" element={<NotificationsPage />} />
            <Route path="/blank" element={<BlankPage />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />

            {/* Student */}
            <Route path="/listas" element={<QuestionListPage />} />
            <Route path="/listas/questoes" element={<QuestionsPage />} />
            <Route path="/avaliacoes" element={<AssessmentsListPage />} />
            <Route path="/notas" element={<MyGradesPage />} />
            <Route path="/trilhas" element={<TrailsPage />} />
            <Route path="/meu-progresso" element={<MyProgressPage />} />
            <Route path="/calendario" element={<CalendarPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/responder-questao" element={<AnswerPage />} />

            {/* Teacher */}
            <Route path="/adicionar-criterio" element={<AddQuestionCriteria />} />
            <Route path="/adicionar-questao" element={<AddQuestionPage />} />
            <Route path="/adicionar-avaliacao" element={<AddAssessmentPage />} />
            <Route path="/analise-ia-resposta" element={<StudentAnswerAnalysisPage />} />
            <Route path="/adicionar-lista-questoes" element={<AddListQuestionsPage />} />

            <Route path="/construcao" element={<ConstructionPage />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </DropdownProvider>

      </Router>
    </>
  );
}
