import { clearUserData, setUserData } from "../util.js";
import { post, get } from "./api.js";

const host = "/users/";

export async function login(email, password) {
  const user = await post(host + "login", { email, password });
  setUserData(user);
  return user;
}

export async function register(email, password) {
  const user = await post(host + "register", { email, password });
  setUserData(user);
  return user;
}

export async function logout() {
  await get(host + 'logout');
  clearUserData();
}
