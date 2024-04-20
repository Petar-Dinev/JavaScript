import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";

const baseUrl = '/users'


export async function login(email, password) {
    const user = await post(baseUrl + '/login', { email, password })
    setUserData(user)
    return user
}

export async function register(email, password) {
    const user = await post(baseUrl + '/register', { email, password })
    setUserData(user)
    return user
}

export async function logout() {
    await get(baseUrl + '/logout')
    clearUserData()
}