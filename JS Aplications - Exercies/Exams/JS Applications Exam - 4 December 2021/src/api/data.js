import { del, get, post, put } from "./api.js"

const url = '/data/albums'

export async function getAllAlbums() {
   return await get(url + '?sortBy=_createdOn%20desc&distinct=name')
}
export async function getOne(id) {
    return await get(url + `/${id}`)
}
export async function createAlbum(albumData) {
    return await post(url, albumData)
}
export async function editAlbum(id, albumData) {
    return await put(`${url}/${id}`, albumData)
}
export async function deleteAlbum(id) {
    return await del(url + `/${id}`)
}

export async function makeSearch(query) {
    return await get(`/data/albums?where=name%20LIKE%20%22${query}%22`)
}
