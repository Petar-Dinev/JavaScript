import { del, get, post, put } from "./api.js"


export function getAllPosts() {
    return get('/data/shoes?sortBy=_createdOn%20desc')
}

export function getOne(id) {
    return get('/data/shoes/' + id)
}

export function createPost(postData) {
    return post('/data/shoes', postData)
}

export function editPost(id, postData) {
    return put('/data/shoes/' + id, postData)
}

export function deletePost(id) {
    return del('/data/shoes/' + id)
}

export function getSearch(query) {
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
}