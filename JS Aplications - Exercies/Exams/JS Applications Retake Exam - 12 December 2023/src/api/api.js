import { getUserData } from "../utils.js";

const host = "http://localhost:3030";

async function requester(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data != undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const user = getUserData();
  if (user) {
    options.headers["X-Authorization"] = user.accessToken;
  }
  try {
    const response = await fetch(host + url, options);

    if (response.status == 204) {
      return response;
    }

    const result = await response.json();

    if (response.ok == false) {
      console.log("before catch ->   ", result);
      throw new Error(result.message);
    }

    return result;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}

export const get = requester.bind(null, "get");
export const put = requester.bind(null, "put");
export const post = requester.bind(null, "post");
export const del = requester.bind(null, "delete");
