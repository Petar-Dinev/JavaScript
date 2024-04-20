import { del, get, post, put } from "./api.js"

const baseUrl = '/data/characters'

export async function getAll() {
    return await get(baseUrl + '?sortBy=_createdOn%20desc')
}
export async function getOne(id) {
    return await get(baseUrl + '/' + id)
}

export async function create(characterData) {
    return await post(baseUrl, characterData)
}

export async function edit(id, characterData) {
    return await put(`${baseUrl}/${id}`, characterData)
}
export async function remove(id) {
    return await del(`${baseUrl}/${id}`)
}