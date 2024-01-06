import { get, post } from "./api.js"

export async function register(email, password) {
    return await post(`/users/register`, {email, password})
}
export async function login(email, password) {
    return await post(`/users/login`, {email, password})
}
export async function logout() {
    await get(`/users/logout`)
}