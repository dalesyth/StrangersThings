import { useState } from "react";
import { createPost } from "./ApiCalls";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const handleCreatePost = async () => {
      try {
        const response = await createPost(
          token,
          title,
          description,
          price,
          location,
          isChecked
        );

        console.log("Result in handleCreatePost", response);
      } catch (err) {
        console.error(err);
      }
    };
    handleCreatePost(title, description, price, isChecked);
    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    setIsChecked(false);
    navigate("/posts");
  };

  return (
    <div className="Container w-1/2 h-3/4 flex justify-center items-center m-auto mt-10 p-8 bg-gray-100 shadow-lg">
      <div className="login max-w-md w-full">
        <h1 className="text-3xl text-center font-bold mb-4">Create New Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="w-full rounded shadow-lg"
              type="title"
              id="title"
              value={title}
              onChange={handleTitle}
              required
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="description">
              Description
            </label>
            <input
              className="w-full rounded shadow-lg"
              type="description"
              id="description"
              value={description}
              onChange={handleDescription}
              required
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="w-full rounded shadow-lg"
              type="price"
              id="price"
              value={price}
              onChange={handlePrice}
              required
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="location">
              Location
            </label>
            <input
              className="w-full rounded shadow-lg"
              type="location"
              id="location"
              value={location}
              onChange={handleLocation}
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="deliver">
              Willing to Deliver? Check Box for Yes
            </label>
            <input
              className="w-full rounded shadow-lg"
              type="checkbox"
              checked={isChecked}
              id="location"
              value={location}
              onChange={handleCheckbox}
            ></input>
          </div>

          <div className="mb-4">
            <button
              className="w-full shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold"
              type="submit"
            >
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
