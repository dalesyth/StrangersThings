import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [posts, setPosts] = useState([]);
  const cohortName = "2303-mt-ftb-web-pt";
  const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;
  const token = localStorage.getItem("token");

  console.log("token in messages is: ", token);

  useEffect(() => {
    const myData = async () => {
      try {
        const response = await fetch(`${APIURL}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        console.log("result: ", result);
        console.log("Messages: ", result.data.messages);
        console.log("Posts: ", result.data.posts);
        setMessages(result.data.messages);
        setPosts(result.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    myData();
  }, []);

  return (
    <>
      <div className="Container max-w-screen-lg flex-col justify-center p-8 h-screen">
        {token ? (
          <div className="text-white font-bold flex justify-center underline pb-5">
            Please see your messages and posts below
          </div>
        ) : (
          <div className="text-white font-bold flex justify-center underline pb-5">
            Please
            <Link className="text-blue-500 font-bold underling" to="/login">
              log in
            </Link>
            to see your messages and posts
          </div>
        )}
        <h1 className="text-center text-3xl font-bold pb-10 text-white">
          My Messages
        </h1>

        <div className="container mx-auto">
          {messages &&
            messages.map((message) => (
              <div className="bg-gray-200 my-5 shadow-lg p-3" key={message._id}>
                <h3 className="font-bold underline mb-3">
                  {message.post.title}
                </h3>
                <div className="font=bold">
                  <span className="font-bold">From:</span>{" "}
                  {message.fromUser.username}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="Container max-w-screen-lg flex-col justify-center max-auto p-8 h-screen">
        <h1 className="text-center text-3xl font-bold pb-10 text-white">
          My Posts
        </h1>
        <div className="container mx-auto">
          {posts &&
            posts.map((post) => (
              <>
                {post.active ? (
                  <div
                    className="bg-gray-200 my-5 shadow-lg p-3"
                    key={post._id}
                  >
                    <h3 className="font-bold underline mb-3">{post.title}</h3>
                    <div>{post.description}</div>

                    <div>
                      <span className="font-bold">Price:</span> {post.price}
                    </div>

                    <div>
                      <span className="font-bold">Location:</span>{" "}
                      {post.location}
                    </div>
                  </div>
                ) : null}
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
