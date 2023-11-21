import { post, get } from "./api.js"

export async function makeDonate(postId) {
   return await post(`/data/donations`, {postId})
}

export async function getMyDonates(postId, userId) {
    return await get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function getPostDonations(postId) {
    return await get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`)
}