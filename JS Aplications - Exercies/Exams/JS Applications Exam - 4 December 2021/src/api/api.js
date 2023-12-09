import { clearUserData, getUserData } from "../utils.js";

const baseUrl = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };
  if (data) {
    options.headers["Content-type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  const user = getUserData();
  if (user) {
    options.headers["X-Authorization"] = user.accessToken;
  }
  try {
    const response = await fetch(baseUrl + url, options);

    if (response.status == 204) {
      return response;
    }

    const result = await response.json();

    if (response.ok == false) {
      if (response.status == 403) {
        clearUserData();
      }
      throw new Error(result.message);
    }

    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const get = request.bind(null, "get");
export const post = request.bind(null, "post");
export const put = request.bind(null, "put");
export const del = request.bind(null, "delete");
