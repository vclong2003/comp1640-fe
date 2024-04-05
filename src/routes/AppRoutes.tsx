import { Route, Routes } from "react-router";
import DefaultLayout from "src/layouts/DefaultLayout";
// import ManagementLayout from "@components/Layouts/ManagementLayout/ManagementLyout";
import ManagementLayout from "src/layouts/ManagementLayout/ManagementLayout";
import AuthLayout from "src/layouts/AuthLayout";
import { defaultLayoutRoutes } from "./defaultLayoutRoutes";
import { authRoutes } from "./authRoutes";
import { managementRoutes } from "./managementRoutes";
import LandingPage from "@pages/LandingPage/LandingPage";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<DefaultLayout />}>
        {defaultLayoutRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route element={<AuthLayout />}>
        {authRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route element={<ManagementLayout />}>
        {managementRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
    </Routes>
  );
}
