import { Navigate, Route, Routes } from "react-router-dom";
import TopBar from "./Components/TopBar";
import EditNotePage from "./pages/EditNotePage";
import PreviewNotesPage from "./pages/PreviewNotesPage";

const enum ROUTE_PATH {
  MAIN = '',
  NEW ='new',
}

export const enum ROUTE_PARAMS {
  ID = 'id'
}

function App() {
  return (
    <>
    <TopBar />
    <Routes>
      <Route path={`/${ROUTE_PATH.MAIN}`} element= {<PreviewNotesPage />} />
      <Route path={`/${ROUTE_PATH.NEW}`} element= {<EditNotePage/>} />
      <Route path={`/:${ROUTE_PARAMS.ID}`} >
        <Route index element={<EditNotePage/>} />
      </Route>
      <Route path="*" element= {<Navigate to={`/${ROUTE_PATH.MAIN}`} />} />
    </Routes>
    </>
  );
}

export default App;
