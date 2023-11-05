import { del, get, post, put } from "./api.js"

const paths = {
 getAll: '/data/offers?sortBy=_createdOn%20desc',
 createOne: '/data/offers',
 getOne: '/data/offers/',
 updateOne: '/data/offers/',
 deleteOne: '/data/offers/',
}

export async function getAllOffers() {
    return await get(paths.getAll)
}

export async function getOfferById(offerId) {
    return await get(paths.getOne + offerId)
}

export async function createOffer(offerData) {
    return await post(paths.createOne, offerData)
}

export async function updateOffer(offerId, offerData) {
    return await put(paths.updateOne + offerId, offerData)
}

export async function deleteOffer(offerId) {
    return await del(paths.deleteOne + offerId)
}