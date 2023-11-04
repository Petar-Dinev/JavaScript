import { get, post } from "./api.js";

export async function makeBuy(productId) {
    return await post('/data/bought', {productId})
}
export async function getAllBuys(productId) {
    return await get(`/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`);
}
export async function getOwnBuys(productId, userId) {
    return await get(`/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}