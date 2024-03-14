import React from "react";

import { Outlet } from "react-router";

export default function DefaultLayout(): JSX.Element {
  return (
    <>
      <>Default layout</>
      <Outlet />
    </>
  );
}
