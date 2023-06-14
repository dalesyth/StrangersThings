import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const cohortName = "2303-mt-ftb-web-pt";
  const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

  // console.log("posts: ", posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${APIURL}/posts`);
      // console.log("response: ", response)
      const data = await response.json();
      const allPosts = data.data.posts;
      setPosts(allPosts);
      // console.log(data)
    };
    fetchPosts();
  }, []);

  return (
    <div className="Container max-w-screen-lg flex-col justify-center max-auto p-8 h-screen overflow-y-scroll">
      <h1 className="text-center text-3xl font-bold pb-10 text-white">Posts</h1>
      {posts &&
        posts.map((post) => (
          <div className="bg-gray-200 my-5 shadow-lg p-3" key={post.id}>
            <h3 className="font-bold underline mb-3">{post.title}</h3>
            <div>{post.description}</div>
            <div>
              <span className="font-bold">Price:</span> {post.price}
            </div>
            <div>
              <span className="font-bold">Seller:</span> {post.author.username}
            </div>
            <div>
              <span className="font-bold">Location:</span> {post.location}
            </div>
            <button className="w-1/6 shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold m-5">
              SEND MESSAGE
            </button>
          </div>
        ))}
    </div>
  );
};

export default Posts;
