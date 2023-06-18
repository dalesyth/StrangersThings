import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  console.log(
    "token before handleLogout func: ",
    localStorage.getItem("token")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You are now logged out");
    navigate('/login')
  };

  console.log("token after handleLogout func: ", localStorage.getItem("token"));

  return (
    <div className="Container w-1/2 h-1/2 flex justify-center items-center m-auto mt-10 p-8 bg-gray-100 shadow-lg">
      <div className="login max-w-md w-full flex justify-center">
        <button
          onClick={handleLogout}
          className="text-3xl text-center font-bold mb-4 hover:text-blue-500"
        >
          Click here to log out
        </button>
      </div>
    </div>
  );
};

export default Logout;
