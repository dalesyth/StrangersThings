import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "./ApiCalls";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  console.log("token is", token);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await registerUser(username, password);

      console.log("Result in Component: ", response);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      alert("You are now registered");
    } catch (err) {
      console.error(err);
    }

    setUsername("");
    setPassword("");
    navigate('/home')
  };

  return (
    <div className="Container w-1/2 h-1/2 flex justify-center items-center m-auto mt-10 p-8 bg-gray-100 shadow-lg">
      <div className="login max-w-md w-full">
        <h1 className="text-3xl text-center font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full rounded shadow-lg"
              type="username"
              id="username"
              value={username}
              onChange={handleUsername}
              required
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full rounded shadow-lg"
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
              required
            ></input>
          </div>
          <div className="mb-4">
            <button
              className="w-full shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold"
              type="submit"
            >
              SUBMIT
            </button>
            <Link
              to="/login"
              className="underline flex justify-center pt-6 text-blue-600"
            >
              Already have an account? Log in here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
