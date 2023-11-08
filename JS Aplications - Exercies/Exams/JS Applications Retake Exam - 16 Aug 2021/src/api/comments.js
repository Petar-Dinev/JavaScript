import { post, get } from "./api.js"

export async function makeComment(gameId, comment) {
   return await post(`/data/comments`, {gameId, comment})
}

export async function getGameComments(gameId) {
    return await get(`/data/comments?where=gameId%3D%22${gameId}%22`)
}