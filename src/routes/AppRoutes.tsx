import React from "react";

import { Route, Routes } from "react-router";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import ManagementLayout from "../components/Layouts/ManagementLyout";
import AuthLayout from "../components/Layouts/AuthLayout";
import { defaultLayoutRoutes } from "./defaultLayoutRoutes";
import { authRoutes } from "./authRoutes";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        {authRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route path="/" element={<DefaultLayout />}>
        {defaultLayoutRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route path="/management" element={<ManagementLayout />}></Route>
    </Routes>
  );
}
