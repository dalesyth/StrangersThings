import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="container h-screen justify-center mx-auto p-2 overflow-y-scroll">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
