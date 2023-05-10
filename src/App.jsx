import SurveyDashboard from "./pages/SurveyDashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import SurveyEdit from "./pages/SurveyEdit";
import PublicSurvey from "./pages/PublicSurvey";

function App() {
  return (
    <div className="cursor-default">
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace={true} />} />
        <Route element={<SurveyDashboard />} path={"/"} />
        <Route element={<SurveyEdit />} path={"/survey_edit"} />
        <Route element={<PublicSurvey />} path={"/public_survey"} />
      </Routes>
    </div>
  );
}

export default App;
