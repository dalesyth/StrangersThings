const cohortName = "2303-mt-ftb-web-pt";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchPosts() {
  try {
    const response = await fetch(`${APIURL}/posts`);

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function createPost(
  token,
  title,
  description,
  price,
  location,
  isChecked
) {
  try {
    const response = await fetch(`${APIURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver: isChecked,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function deletePost(postId, token) {
  try {
    const response = await fetch(`${APIURL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function sendMessage(postId, content, token) {
  try {
    const response = await fetch(`${APIURL}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function editPost(
  postId,
  token,
  title,
  description,
  price,
  location,
  isChecked
) {
  try {
    const response = await fetch(`${APIURL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver: isChecked,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
}
