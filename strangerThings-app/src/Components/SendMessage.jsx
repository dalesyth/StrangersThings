import { useState } from "react";
import { sendMessage } from "./ApiCalls";

const SendMessage = () => {
  const [content, setContent] = useState("");
  const postId = localStorage.getItem("postId");

  console.log("Post ID is: ", postId)

  const handleMessage = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

   

    try {
      const response = await sendMessage(postId, content);

      console.log("Result in component: ", response);
      alert("Message Sent")
    } catch (err) {
      console.error(err)
    }


    
    setContent("");
  };

  return (
    <div className="Container w-1/2 h-3/4 flex justify-center items-center m-auto mt-10 p-8 bg-gray-100 shadow-lg">
      <div className="login max-w-md w-full">
        <h1 className="text-3xl text-center font-bold mb-4">
          Send New Message
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="message">
              Message
            </label>
            <input
              className="w-full rounded shadow-lg"
              type="message"
              id="message"
              value={content}
              onChange={handleMessage}
              required
            ></input>
          </div>

          <div className="mb-4">
            <button
              className="w-full shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold"
              type="submit"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMessage;





// Post ID is:  6487d2ac0911550014fe1621