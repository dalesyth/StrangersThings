import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, deletePost } from "./ApiCalls";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  console.log("posts: ", posts);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();

        console.log("Result in getPosts: ", response);
        setPosts(response.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    getPosts();
  }, [posts]);

  const handleSubmit = (event, postId) => {
    event.preventDefault();
    console.log(
      "handleSubmit value: ",
      event.target.value,
      "post ID: ",
      postId
    );
  };

  const handleDeletePost = async (postId) => {
    console.log("DeletePost postId is: ", postId);

    try {
      const response = await deletePost(postId);

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
              {/* {localStorage.setItem("postId", post._id)} */}
              <div className="bg-gray-200 my-5 shadow-lg p-3" key={post._id}>
                <h3 className="font-bold underline mb-3">{post.title}</h3>
                <div>{post.description}</div>
                <div>Post ID is {post._id}</div>
                {localStorage.setItem("postId", post._id)}

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
                      <Link to="/sendmessage">
                        <button
                          onClick={localStorage.setItem("postId", post._Id)}
                          className="w-1/6 shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold m-5"
                        >
                          SEND MESSAGE
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDeletePost(post._id)}
                        className="w-1/6 shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold m-5"
                      >
                        DELETE POST
                      </button>
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
