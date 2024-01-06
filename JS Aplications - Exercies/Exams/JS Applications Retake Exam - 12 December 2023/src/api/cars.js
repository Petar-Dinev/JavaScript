import { del, get, post, put } from "./api.js";

export async function getAllCars() {
    return await get('/data/cars?sortBy=_createdOn%20desc')
}

export async function getCarById(carId) {
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
export async function searchCar(query) {
    return await get(`/data/cars?where=model%20LIKE%20%22${query}%22`)
}