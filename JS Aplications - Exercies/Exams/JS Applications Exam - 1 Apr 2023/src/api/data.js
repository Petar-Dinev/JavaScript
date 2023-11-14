import { del, get, post, put } from "./api.js";


export async function getAllFruits() {
   return await get('/data/fruits?sortBy=_createdOn%20desc')
}

export async function createFruit(fruitInfo) {
  return await post('/data/fruits', fruitInfo)
}

export async function getOneFruit(id) {
    return await get('/data/fruits/' + id)
}

export async function deleteFruit(id) {
    return await del('/data/fruits/' + id)
}

export async function updateFruit(id, fruitData) {
    return await put('/data/fruits/' + id, fruitData)
}

export async function makeSearch(query) {
    return await get(`/data/fruits?where=name%20LIKE%20%22${query}%22`)
}