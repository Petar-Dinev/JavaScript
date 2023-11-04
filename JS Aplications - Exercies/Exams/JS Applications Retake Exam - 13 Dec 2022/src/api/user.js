import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";

export async function login(email, password) {
    const user = await post('/users/login', {email, password})
    setUserData(user)
    return user;
}

export async function register(email, password) {
    const user = await post('/users/register', {email, password})
    setUserData(user)
    return user;
}

export async function logout() {
  await get('/users/logout')
  clearUserData()
}