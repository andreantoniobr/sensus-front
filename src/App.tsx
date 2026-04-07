import { BrowserRouter as Router, Routes, Route } from "react-router";
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
import Blank from "./pages/Blank";
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

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfilesPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/blank" element={<Blank />} />

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

            <Route path="/listas" element={<QuestionListPage />} />
            <Route path="/avaliacoes" element={<AssessmentsListPage />} />
            <Route path="/trilhas" element={<TrailsPage />} />
            <Route path="/calendario" element={<CalendarPage />} />
            <Route path="/ranking" element={<RankingPage />} />

            {/* Teacher */}
            <Route path="/adicionar-criterio" element={<AddQuestionCriteria />} />
            <Route path="/adicionar-questao" element={<AddQuestionPage />} />
            <Route path="/adicionar-avaliacao" element={<AddAssessmentPage />} />

            <Route path="/construcao" element={<ConstructionPage />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
