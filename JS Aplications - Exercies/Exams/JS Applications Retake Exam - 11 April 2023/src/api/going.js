import { get, post } from "./api.js";

export function getGoingCount(eventId) {
    return get(`/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`)
}

export function willGoing(eventId) {
    return post('/data/going', {eventId})
}

export function getOwnGoings(eventId, userId) {
    return get(`/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}