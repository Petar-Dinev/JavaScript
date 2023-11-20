import { del, get, post, put } from "./api.js";


export async function getCars() {
    return await get('/data/cars?sortBy=_createdOn%20desc')
}
export async function getOneCar(carId) {
    return await get('/data/cars/' + carId)
}
export async function createCar(carData) {
   return await post('/data/cars', carData)
}
export async function editCar(carId, carData) {
    return await put('/data/cars/' + carId, carData)
}
export async function deleteCar(carId) {
    return await del('/data/cars/' + carId)
}

export async function getMyList(userId) {
    return await get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}
export async function getCarsByYear(query) {
    return await get(`/data/cars?where=year%3D${query}`)
}
