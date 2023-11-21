import { del, get, post, put } from "./api.js"

const paths = {
 getAll: '/data/posts?sortBy=_createdOn%20desc',
 createOne: '/data/posts',
 getOne: '/data/posts/',
 updateOne: '/data/posts/',
 deleteOne: '/data/posts/',
}

export async function getMyPosts(userId) {
    return await get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getAllPosts() {
    return await get(paths.getAll)
}

export async function createPost(postData) {
    return await post(paths.createOne, postData)
}

export async function updatePost(postId, postData) {
    return await put(paths.updateOne + postId, postData)
}
export async function deletePost(postId) {
    return await del(paths.deleteOne + postId)
}
export async function getPostById(postId) {
    return await get(paths.getOne + postId)
}