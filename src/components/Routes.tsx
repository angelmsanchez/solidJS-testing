import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

const HomePage = lazy(() => import("../pages/HomePage"));
const UserPage = lazy(() => import("../pages/UserPage"));
const FetchPage = lazy(() => import("../pages/FetchPage"));

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/fetch" element={<FetchPage />} />
    </Routes>
  );
}

export default RoutesComponent;

