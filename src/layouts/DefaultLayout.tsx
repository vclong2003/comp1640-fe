import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import { Outlet } from "react-router";

export default function DefaultLayout(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
