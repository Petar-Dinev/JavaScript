import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

export async function login(email, password) {
    const user = await post('/users/login', {email, password})
    setUserData(user);
    return user;
}
export async function register(data) {
    const user =  await post('/users/register', data);
    setUserData(user);
    return user;
}
export async function logout() {
    await get('/users/logout');
    clearUserData()
}