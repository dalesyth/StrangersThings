import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchPosts, deletePost } from "./ApiCalls";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const user = localStorage.getItem("username");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();

        setPosts(response.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    getPosts();
  }, [posts]);

  const handleSendMessage = (postId, token) => {
    console.log("post ID: ", postId, "token is: ", token);
    localStorage.setItem("postId", postId);
    navigate("/SendMessage");
  };

  const handleEditPost = (postId, token) => {
    console.log("post ID: ", postId, "token is: ", token);
    localStorage.setItem("postId", postId);
    navigate("/EditPost");
  };

  const handleDeletePost = async (postId, token) => {
    try {
      const response = await deletePost(postId, token);

      console.log("Result in handleDeletePost: ", response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Container max-w-screen-lg flex-col justify-center max-auto p-8 h-screen">
      <h1 className="text-center text-3xl font-bold pb-10 text-white">Posts</h1>
      <Link
        to="/createpost"
        className="underline flex justify-center pt-2 text-white hover:text-blue-600"
      >
        Click here to create a new post
      </Link>
      <div className="container mx-auto">
        {posts &&
          posts.map((post) => (
            <>
              <div className="bg-gray-200 my-5 shadow-lg p-3" key={post._id}>
                <h3 className="font-bold underline mb-3">{post.title}</h3>
                <div>{post.description}</div>
                <div>Post ID is {post._id}</div>

                <div>
                  <span className="font-bold">Price:</span> {post.price}
                </div>
                <div>
                  <span className="font-bold">Seller:</span>{" "}
                  {post.author.username}
                </div>
                <div>
                  <span className="font-bold">Location:</span> {post.location}
                </div>
                <div>
                  <span className="font-bold">Will deliver?:</span>{" "}
                  {post.willDeliver ? <span>Yes</span> : <span>No</span>}
                </div>
                <div>
                  <>
                    <span>
                      <button
                        onClick={() => handleSendMessage(post._id, token)}
                        className="w-1/6 shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold m-5"
                      >
                        SEND MESSAGE
                      </button>

                      {post.author.username === user ? (
                        <button
                          onClick={() => handleEditPost(post._id, token)}
                          className="w-1/6 shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold m-5"
                        >
                          EDIT POST
                        </button>
                      ) : null}

                      {post.author.username === user ? (
                        <button
                          onClick={() => handleDeletePost(post._id, token)}
                          className="w-1/6 shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold m-5"
                        >
                          DELETE POST
                        </button>
                      ) : null}
                    </span>
                  </>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Posts;
