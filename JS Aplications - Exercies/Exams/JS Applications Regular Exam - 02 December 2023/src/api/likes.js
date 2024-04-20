import { get, post } from "./api.js";

export async function makeLike(characterId) {
    await post('/data/useful', { characterId })
}

export async function getAllLikes(characterId) {
    return await get(`/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`)
}

export async function getOwnLikes(characterId, userId) {
    return await get(`/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}