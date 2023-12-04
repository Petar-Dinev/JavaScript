import { del, get, post, put } from "./api.js";

export function getAllPets() {
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name')
}

export function getOnePet(id) {
   return get('/data/pets/' + id)
}

export function createPet(petData) {
    return post('/data/pets/', petData)
}

export function editPet(id, petData) {
    return put('/data/pets/' + id, petData)
}

export function deletePet(id) {
    return del('/data/pets/' + id)
}