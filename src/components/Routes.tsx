import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";

const HomePage = lazy(() => import("../pages/HomePage"));
const UserPage = lazy(() => import("../pages/UserPage"));

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UserPage />} />
    </Routes>
  );
}

export default RoutesComponent;

