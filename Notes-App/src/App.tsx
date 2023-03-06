import { Navigate, Route, Routes } from "react-router-dom";
import TopBar from "./Components/TopBar";
import EditNotePage from "./pages/EditNotePage";
import PreviewNotesPage from "./pages/PreviewNotesPage";

export const enum ROUTE_PATH {
  MAIN = "",
}

export const enum ROUTE_PARAMS {
  ID = "id",
}

function App() {
  return (
    <>
      <Routes>
        <Route element={<TopBar />}>
          <Route path={`/${ROUTE_PATH.MAIN}`} element={<PreviewNotesPage />} />
          <Route path={`/:${ROUTE_PARAMS.ID}`} element={<EditNotePage />} />
          <Route path="*" element={<Navigate to={`/${ROUTE_PATH.MAIN}`} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
