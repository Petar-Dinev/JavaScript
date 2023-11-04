import { del, get, post, put } from "./api.js"

const paths = {
 getAll: '/data/products?sortBy=_createdOn%20desc',
 createOne: '/data/products',
 getOne: '/data/products/',
 updateOne: '/data/products/',
 deleteOne: '/data/products/',
}

export async function getAllProducts() {
    return await get(paths.getAll)
}

export async function createProduct(productData) {
    return await post(paths.createOne, productData)
}

export async function updateProduct(productId, productData) {
    return await put(paths.updateOne + productId, productData)
}

export async function deleteProduct(productId) {
    return await del(paths.deleteOne + productId)
}
 
export async function getProductById(productId) {
    return await get(paths.getOne + productId)
}