import { del, get, post, put } from "./api.js";

const paths = {
    getAll: '/data/events?sortBy=_createdOn%20desc',
    createEvent: '/data/events',
    getOneById: '/data/events/'
}

export function getAllEvents() {
    return get(paths.getAll)
}

export function getOneEvent(id) {
    return get(paths.getOneById + id)
}

export function createEvent(eventData) {
   return post(paths.createEvent, eventData)
} 

export function editEvent(id, eventData) {
    return put(paths.getOneById + id, eventData)
}
export function delEvent(id) {
    return del(paths.getOneById + id)
}