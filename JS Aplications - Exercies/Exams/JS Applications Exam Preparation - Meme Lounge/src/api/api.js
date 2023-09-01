import { notify } from "../notify.js";
import { clearUserData, getUserData } from "../util.js";

const host = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data !== undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const user = getUserData();
  if(user) {
    options.headers['X-Authorization'] = user.accessToken;
  }

  try {
    const res = await fetch(host + url, options);

    if (res.ok == false) {
       if(res.status == 403) {
        clearUserData()
       }

      const err = await res.json();
      throw new Error(err.message);
    }

    if(res.status == 204) {
        return res;
    } else {
        return res.json()
    }
  } catch (err) {
    notify(err.message);
    throw err;
  }
}

export const get = request.bind(null, 'GET')
export const post = request.bind(null, 'POST')
export const put = request.bind(null, 'PUT')
export const del = request.bind(null, 'DELETE')
