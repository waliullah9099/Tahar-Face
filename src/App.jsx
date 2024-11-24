import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" exact />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<HomePage />} path="/register" />
        <Route element={<NotFoundPage />} path="*" />
        <Route element={<HomePage />} path="/" />
        <Route element={<ProfilePage />} path="/me" />
      </Routes>
    </>
  );
}

export default App;
