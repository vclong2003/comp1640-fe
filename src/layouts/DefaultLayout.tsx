import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import { Outlet } from "react-router";
<<<<<<< HEAD
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
=======
>>>>>>> be3d3893675a771b99d00b75c6dca28db315f98b

export default function DefaultLayout(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
