import { del, get, post, put } from "./api.js"


export async function getOwnTheaters(userId) {
    return await get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getAllTheaters() {
    return await get('/data/theaters?sortBy=_createdOn%20desc&distinct=title')
}

export async function createTheater(theaterData) {
    return await post('/data/theaters', theaterData)
}

export async function editTheater(theaterId, theaterData) {
    return await put('/data/theaters/' + theaterId, theaterData)
}
export async function deleteTheater(theaterId) {
    return await del('/data/theaters/' + theaterId)
}
export async function getTheaterById(theaterId) {
    return await get('/data/theaters/' + theaterId)
}