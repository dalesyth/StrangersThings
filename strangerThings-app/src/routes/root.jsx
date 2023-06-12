import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="container h-screen justify-center mx-auto p-2">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
