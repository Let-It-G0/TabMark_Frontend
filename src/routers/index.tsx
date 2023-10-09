import { Navigate, Route, Routes } from "react-router-dom";
import RecentlyPage from "../pages/RecentlyPage";
import MyTagsPage from "../pages/MyTagsPage";
import AuthLoadingPage from "../pages/AuthPage/AuthLoadingPage";
import SignInPage from "../pages/AuthPage/SignInPage";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/recently" />} />
      <Route path="/recently" element={<RecentlyPage />} />
      <Route path="/mytags" element={<MyTagsPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/callback" element={<AuthLoadingPage />} />
    </Routes>
  );
}
