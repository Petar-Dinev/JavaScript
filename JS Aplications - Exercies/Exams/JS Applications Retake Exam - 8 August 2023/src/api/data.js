import { del, get, post, put } from "./api.js";

export async function getAll() {
    return await get('/data/motorcycles?sortBy=_createdOn%20desc')
}

export async function getOne(id) {
    return await get('/data/motorcycles/' + id)
}

export async function create(data) {
    return await post('/data/motorcycles', data)
}
export async function update(id, data) {
    return await put('/data/motorcycles/' + id, data)
}

export async function deleteById(id) {
    return await del('/data/motorcycles/' + id)
}

export async function getSearch(query) {
    return await get(`/data/motorcycles?where=model%20LIKE%20%22${query}%22`)
}