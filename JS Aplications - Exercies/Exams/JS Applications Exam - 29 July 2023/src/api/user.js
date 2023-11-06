import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

const host = "/users/";

export function logout() {
  get(host + "logout");
  clearUserData();
}

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
