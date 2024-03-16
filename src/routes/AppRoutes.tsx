import React from "react";

import { Route, Routes } from "react-router";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import ManagementLayout from "../components/Layouts/ManagementLyout";
import AuthLayout from "../components/Layouts/AuthLayout";
import { defaultLayoutRoutes } from "./defaultLayoutRoutes";
import { authRoutes } from "./authRoutes";
import Admin from "../pages/Admin/Admin";
import { AdminAccount } from "../pages/Admin/AdminAccount/Account";
import AdminFaculty from "../pages/Admin/AdminFaculty/Faculty";
export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {defaultLayoutRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route element={<AuthLayout />}>
        {authRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route path="/management" element={<ManagementLayout />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/admin/account" element={<AdminAccount />}></Route>
      <Route path="/admin/faculty" element={<AdminFaculty />}></Route>
    </Routes>
  );
}
