import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";

export async function logout() {
  await get("/users/logout");
  clearUserData();
}
export async function register(username, password) {
  const user = await post("/users/register", {username, password});
  setUserData(user);
  return user;
}

export async function login(username, password) {
    const user = await post("/users/login", {username, password});
    setUserData(user);
    return user;
  }
