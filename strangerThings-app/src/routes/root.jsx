import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="container h-screen justify-center mx-auto p-2 overflow-y-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
