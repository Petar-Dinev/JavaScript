import { clearUserData, setUserData } from "../utils.js"
import { post, get } from "./api.js"

const url = '/users'

export async function login(email, password) {
    const user = await post(url + '/login', {email, password})
    console.log(user);
    setUserData(user)
}

export async function register(email, password) {
    const user = await post(url + '/register', {email, password})
    setUserData(user)
}
export async function logout() {
    await get(url + '/logout')
    clearUserData()
}