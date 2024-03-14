import React from "react";

import { Route, Routes } from "react-router";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import ManagementLayout from "../components/Layouts/ManagementLyout";
import AuthLayout from "../components/Layouts/AuthLayout";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}></Route>

      {/* Management Layout */}
      <Route path="/management" element={<ManagementLayout />}></Route>

      {/* Auth Layout */}
      <Route path="/auth" element={<AuthLayout />}></Route>
    </Routes>
  );
}
