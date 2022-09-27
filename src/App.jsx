import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/app.css";
import ProfilePage from "./pages/ProfilePage";
import Error from "./components/Error";

/** APP
 * @return {JSX.Element}
 */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<ProfilePage />} />
        <Route path="*" element={<Error code={"ERR_BAD_REQUEST"} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
